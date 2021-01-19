import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/actions/userActions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='container'>
      <Head>
        <title>Users Posts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
