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
const Section = ({
  title = "About Me",
  content = "My experience in building high-quality, responsive mobile sites that work perfect cross-browser to building scalable websites for any industry. I build Static, single page application(SPA), Dynamics Websites Development working as frontend developers as well as backend development, setup and customization of WordPress, WordPress Development, Speed Optimization, Page Optimization, Website Optimization, and Website Development.",
  image = "",
  bgColor = "#98ddca",
}) => {
  return (
    <Container style={{ background: bgColor }}>
      <CenterContainer>
        <Name>{title}</Name>
      </CenterContainer>
      <CenterContainer>
        <Row>
          <ImageContainer>
            <Image src={image} alt={title} />
          </ImageContainer>
        </Row>
        <Row>
          <About>{content}</About>
        </Row>
      </CenterContainer>
    </Container>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Section);

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
`;

export const Name = styled.h1`
  font: normal bold 50px/ 72px "Roboto", cursive;
  text-align: center;
`;
export const About = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777777;
  font: normal 500 16px/ 25px "Roboto", cursive;
  overflow: auto;
  max-height: 70vh;
`;
export const Row = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  align-items: center;
  justify-content: center;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 70vh;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  padding-right: 2rem;
`;
export const Service = styled.div`
  border: 1px solid #201f1f17;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.4s ease;
  > p {
    margin: 0px;
  }
  &:hover {
    box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
    transform: scale(1.1);
  }
`;
export const Button = styled.button`
  background-color: orange;
  border: solid 3px white;
  border-radius: 40px;
  margin-top: 20px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  min-height: 50px;
  padding: 1rem 2rem;
  transition: all ease-out 0.2s;
  &:hover {
    box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
    transform: scale(1.1);
  }
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
