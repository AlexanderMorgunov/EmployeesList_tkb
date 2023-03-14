import React, { useContext } from "react";
import "./Layout.css";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import SideMenu from "../SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import { SearchContext } from "../../providers/SearchProvider";

const Layout = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="Layout_wrapper">
      <SideMenu />
      <div className="Layout_header">
        <div className="Layout_search_wrapper">
          <input
            type="text"
            className="Layout_search_input"
            placeholder="Поиск сотрудника по фамилии"
            onChange={(e) => setSearch((search) => e.target.value)}
          />
        </div>
      </div>
      <div className="Layout_content">
        <Outlet />
      </div>
      <div className="Layout_footer">
        ©2023 Created by Morgunov Alex
        <span>
          <a href="https://github.com/AlexanderMorgunov">
            <IconContext.Provider
              value={{ color: "black", className: "footer_github_icon" }}
            >
              <AiFillGithub />
            </IconContext.Provider>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Layout;
