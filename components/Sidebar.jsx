import Link from "next/link";
import PropTypes from "prop-types";
function Sidebar({ currentPage }) {
  return (
    <section className='sideBar'>
      <ul className='sideBar-menu'>
        <li className='sideBar-menu_item'>
          <Link href='/'>
            <a
              className={`sideBar-menu_item_link ${
                currentPage === "users" ? "sideBar-menu_item_link_active" : ""
              }`}
              href='#'
            >
              Пользователи
            </a>
          </Link>
        </li>
        <li className='sideBar-menu_item'>
          <Link href='/'>
            <a
              className={`sideBar-menu_item_link ${
                currentPage === "posts" ? "sideBar-menu_item_link_active" : ""
              }`}
              href='#'
            >
              Посты
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
}

Sidebar.propTypes = {
  currentPage: PropTypes.string,
};
Sidebar.defaultProps = {
  currentPage: "",
};

export { Sidebar };
