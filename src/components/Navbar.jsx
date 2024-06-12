import reactIcon from "../assets/react.svg";

const Navbar = ({ theme, changeTheme }) => {
  return (
    <nav className={theme ? "navbar bg-dark shadow-lg" : "navbar bg-primary"}>
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          <img src={reactIcon} alt="Bootstrap" width="30" height="24" />
          {name}
        </a>
        <button
          className={
            theme
              ? "btn btn-secondary rounded-0 btn-sm"
              : "btn btn-dark rounded-0 btn-sm"
          }
          onClick={() => changeTheme()}
        >
          {theme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  name: "Default Value",
  theme: "navbar bg-primary",
};

export default Navbar;
