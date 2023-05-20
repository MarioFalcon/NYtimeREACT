import { FC } from "react";
import "./styles.css";

const Header: FC = () => {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <h2 className="tittle"> NY Times Books </h2>
      </div>
    </header>
  );
};

export default Header;
