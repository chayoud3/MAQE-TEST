import styled from "styled-components";

// Styled Test
export const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  padding: 1em;
  position: relative;
  border-radius: 1em;
  background-color: #66c3e9;
  box-shadow: 0 0 5px #555;
`;

export const TextContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;

  display: grid;
  grid-template-columns: 50% 50%;
`;

export const MiniTextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.5em;
  box-sizing: border-box;
`;

export const MiniTextBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 10px #333;

  font-size: 5em;
  color: #66c3e9;
  -webkit-text-stroke: 2px black;
`;

export const InnerBoxContainer = styled.div`
  padding: 1em;
  border-radius: 1em;
  background-color: #fff;
`;

export const GradientBoxContainer = styled.div`
  padding: 1em;
  min-width: 700px;
  min-height: 600px;
  border-radius: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(158, 213, 209, 1) 0%,
    rgba(104, 195, 233, 1) 100%
  );
`;

export const MiniBoxContainer = styled.div`
  padding: 1em;
  min-width: 250px;
  min-height: 250px;
  background-color: #9bd6e4;
`;

//
// Template Test
//

// Post Card Section
export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eeeeee;
`;

export const PostCardContainer = styled.div`
  width: 800px;
  margin: 0.5em 0;
  padding: 0.2em 0;
  min-width: 400px;
  border-radius: 0.3em;
  box-shadow: 3px 3px 5px #ccc;
  background-color: ${(props) => props.color || "#fff"};
`;

// Author
export const AuthorSection = styled.div`
  width: 100%;
  padding: 0.2em;
  align-items: center;
  display: inline-flex;
  box-sizing: border-box;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
`;

export const AvatarContainer = styled.img`
  width: auto;
  height: 30px;
  margin: 0 0.5em;
  border-radius: 999em;
`;

export const AuthorName = styled.div`
  color: #f64f26;
  margin: 0 0.5em;
  font-weight: bold;
`;

export const PostTime = styled.div`
  color: #888;
`;

// Post Section
export const PostDetailContainer = styled.div`
  display: flex;
`;

export const PostImage = styled.img`
  width: auto;
  height: 200px;
  margin: 0.5em;
`;

export const PostTextContainer = styled.div`
  margin: 0.5em;
`;

export const PostTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const PostContent = styled.div`
  padding: 0.2em 0.5em;
`;
