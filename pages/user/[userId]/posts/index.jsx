import Head from "next/head";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "../../../../store/actions/userActions";
import { fetchUserPosts } from "../../../../store/actions/userPostsActions";

import { Row, Col, Container } from "reactstrap";

import { DetailPage } from "../../../../components/DetailInfo";
import { UserPostsList } from "../../../../components/UserPostsList";
import { Sidebar } from "../../../../components/Sidebar";

export default function Home({ userId }) {
  const dispatch = useDispatch();
  const { user, page } = useSelector(state => state.users);
  const { posts } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchUserPosts(userId));
  }, []);

  return (
    <Container fluid={true}>
      <Head>
        <title>User Posts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Row>
        <Col xs='2'>
          <Sidebar currentPage={page} col />
        </Col>
        <Col xs='8'>
          <UserPostsList posts={posts} />
        </Col>
        <Col xs='2'>
          <DetailPage user={user} />
        </Col>
      </Row>
    </Container>
  );
}

Home.getInitialProps = ctx => {
  const userId = ctx.query.userId;
  return {
    userId,
  };
};

Home.propTypes = {
  userId: PropTypes.string,
};

Home.defaultProps = {
  userId: "",
};
