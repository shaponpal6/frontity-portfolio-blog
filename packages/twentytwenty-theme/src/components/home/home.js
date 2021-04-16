import { styled, connect } from "frontity";
import React, { useEffect } from "react";

import TopSection from "./topSection";
import About from "./about";
import Section from "./Section";
import { services } from "./data";

export const getMediaSource = (media) => {
  if (!media) return null;

  return media.source_url;
};

const Home = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  const categories_list = post.categories_list || {};

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    // actions.source.fetch("/project");
    actions.source.fetch("/");
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <PostArticle>
      <BGImageContainer
        style={{
          backgroundImage:
            "url(" +
            getMediaSource(state.source.attachment[post.featured_media]) +
            ")",
        }}
      >
        <TopSection state={state} />
      </BGImageContainer>
      <BGImageContainer>
        <About
          title={post.title.rendered}
          content={post.content.rendered}
          image={getMediaSource(state.source.attachment[post.featured_media])}
        />
      </BGImageContainer>
      {categories_list &&
        Object.keys(categories_list).length > 0 &&
        Object.keys(categories_list).map((key, i) => {
          const item = categories_list[key] || {};
          if (Object.keys(item["category_child"]).length < 1) return null;
          return (
            <BGImageContainer key={i}>
              <Section {...item} />
            </BGImageContainer>
          );
        })}
      {/* {services &&
        services.length > 0 &&
        services.map((service, i) => (
          <BGImageContainer key={i}>
            <Section {...service} />
          </BGImageContainer>
        ))} */}
    </PostArticle>
  ) : null;
};

export default connect(Home);

export const BGImageContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: block;
  overflow: hidden;
  float: left;
`;

const PostArticle = styled.div`
  padding-top: 0 !important;
`;
