import PropTypes from "prop-types";
function UserPostsList({ posts }) {
  return (
    <section className='post'>
      <h2 className='post_h1-title h1-title'>Посты </h2>

      {posts &&
        posts.map(post => (
          <div key={post.id} className='post'>
            <div className='post_user-name' id={post.id}>
              {post.title}
            </div>
            <div className='post_user-city'>{posts.body}</div>

            <a className='post_user-link'>Смотреть посты</a>
          </div>
        ))}
    </section>
  );
}

UserPostsList.propTypes = {
  posts: PropTypes.array,
};

UserPostsList.defaultProps = {
  posts: [],
};

export { UserPostsList };
