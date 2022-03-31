import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PostTime,
  PostImage,
  PostTitle,
  AuthorName,
  PostContent,
  PostContainer,
  AuthorSection,
  LayoutContainer,
  AvatarContainer,
  PostTextContainer,
  PostCardContainer,
  PostDetailContainer,
} from "../styles/container";

const PostTemplateComponent = (props) => {
  const { posts, authors } = props;

  // compute function
  const renderPostObjectList = () => {
    return posts.map((post) => {
      const author = authors.find((author) => author.id === post.author_id);
      if (!author) return posts;
      return { ...post, author };
    });
  };

  return (
    <PostContainer>
      <p>
        <Link to={"/"}>{"< Back"}</Link>
      </p>
      {renderPostObjectList().map((post, index) => {
        const { author, created_at, image_url, title, body, id } = post;
        return (
          <PostCardContainer
            key={index}
            color={id % 2 === 0 ? "#ccecff" : "#fff"}
          >
            <AuthorSection>
              <AvatarContainer src={author?.avatar_url} />
              <AuthorName>{author?.name}</AuthorName>
              <PostTime>{new Date(created_at).toString()}</PostTime>
            </AuthorSection>

            <PostDetailContainer>
              <PostImage src={image_url} />
              <PostTextContainer>
                <PostTitle>{title}</PostTitle>
                <PostContent>{body}</PostContent>
              </PostTextContainer>
            </PostDetailContainer>
          </PostCardContainer>
        );
      })}
    </PostContainer>
  );
};
PostTemplateComponent.defaultProps = { posts: [], authors: [] };

const TemplateTestComponent = (props) => {
  // page condition
  const [onFetch, setFetch] = useState(true);

  // page data
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  const initialFetch = useCallback(async () => {
    try {
      const post_endpoint = "https://maqe.github.io/json/posts.json";
      const author_endpoint = "https://maqe.github.io/json/authors.json";
      const posts_response = await axios.get(post_endpoint);
      const author_response = await axios.get(author_endpoint);

      setAuthors(author_response?.data);
      setPosts(posts_response?.data);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    if (onFetch) initialFetch();

    return () => setFetch(false);
  }, [initialFetch, onFetch]);

  return (
    <LayoutContainer>
      <PostTemplateComponent authors={authors} posts={posts} />
    </LayoutContainer>
  );
};

export default TemplateTestComponent;
