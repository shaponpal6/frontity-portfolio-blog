import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Article Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const TopSection = ({ state, categories, showMedia = true }) => {
  return (
    <Section>
      <CenterContainer>
        <Name>Shapon Pal</Name>
        <Habit>I'm enthusiastic. I love to develop awesome project.</Habit>
        <Service>Full-Stack WordPress, React and Blockchain Developer</Service>
      </CenterContainer>
    </Section>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(TopSection);

// All styles :)

export const Section = styled.section`
  &:first-of-type {
    padding: 4rem 0 0;
  }

  @media (min-width: 700px) {
    &:first-of-type {
      padding: 8rem 0 0;
    }
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h1`
  font: normal bold 50px/ 72px "Roboto", cursive;
  font-size: 7rem;
`;

export const Habit = styled.p`
  font-size: 4rem;
`;

export const Service = styled.h4`
  font-size: 4rem;
`;

// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

export const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

export const PostTitle = styled.h1`
  margin: 0;
  @media (min-width: 700px) {
    font-size: 6.4rem !important;
  }
`;

const PostLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostInner = styled(SectionContainer)`
  padding-top: 5rem;
  @media (min-width: 700px) {
    padding-top: 8rem;
  }
`;

export const EntryContent = styled.div`
  line-height: 1.5;
  max-width: 58rem;
  font-family: "Hoefler Text", Garamond, "Times New Roman", serif;
  letter-spacing: normal;

  @media (min-width: 700px) {
    font-size: 2.1rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: 2em 0;
    max-width: 100%;
  }
`;
