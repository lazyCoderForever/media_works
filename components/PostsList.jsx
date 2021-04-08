import PropTypes from "prop-types";
import Link from "next/link";
function PostsList({ users, handlerDetailUserInfo }) {
  return (
    <section className='posts'>
      <h2 className='posts_h1-title h1-title '>Пользователи</h2>

      {users &&
        users.map(user => (
          <div key={user.id} className='post'>
            <div
              className='post_user-name'
              id={user.id}
              onClick={handlerDetailUserInfo()}
            >
              {user.name}
            </div>
            <div className='post_user-city'>{user.address?.city}</div>
            <Link href={`user/${user.id}/posts`}>
              <a className='post_user-link'>Смотреть посты</a>
            </Link>
          </div>
        ))}
    </section>
  );
}

PostsList.propTypes = {
  users: PropTypes.array,
  handlerDetailUserInfo: PropTypes.func,
};

PostsList.defaultProps = {
  users: [],
  handlerDetailUserInfo: function () {},
};

export { PostsList };
