import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailPage } from "../components/DetailInfo";
import { PostsList } from "../components/PostsList";
import { Sidebar } from "../components/Sidebar";
import { fetchUsers } from "../store/actions/userActions";
import { Row, Col, Container } from "reactstrap";

export default function Home() {
  const dispatch = useDispatch();
  const { users, page } = useSelector(state => state.users);
  const [choosedUser, setChoosedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handlerDetailUserInfo = ({ target }) => {
    let foundUser = users.find(user => {
      return user.id === +target.id;
    });
    setChoosedUser(foundUser);
  };

  return (
    <Container fluid={true}>
      <Head>
        <title>Users </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Row>
        <Col xs='2'>
          <Sidebar currentPage={page} col />
        </Col>
        <Col xs='8'>
          <PostsList
            users={users}
            handlerDetailUserInfo={() => handlerDetailUserInfo.bind(this)}
          />
        </Col>
        <Col xs='2'>
          <DetailPage user={choosedUser} />
        </Col>
      </Row>
    </Container>
  );
}
