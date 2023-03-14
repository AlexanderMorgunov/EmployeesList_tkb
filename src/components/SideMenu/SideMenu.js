import "./SideMenu.css";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="Layout_side-menu">
      <div className="Layout_side-menu_header">Меню</div>
      <ul className="Layout_side-menu-ul">
        <li className="SideMenu_item">
          <NavLink to="EmployeesList" state={"all"}>
            Все сотрудники
          </NavLink>
        </li>
        <li className="SideMenu_item">
          <NavLink to="EmployeesList" state={"Аналитик"}>
            Аналитики
          </NavLink>
        </li>
        <li className="SideMenu_item">
          <NavLink to="EmployeesList" state={"Менеджер"}>
            Менеджеры
          </NavLink>
        </li>
        <li className="SideMenu_item">
          <NavLink to="EmployeesList" state={"Программист"}>
            Программисты
          </NavLink>
        </li>
        <li className="SideMenu_item">
          <NavLink to="EmployeesList" state={"Юрист"}>
            Юристы
          </NavLink>
        </li>
        <li className="SideMenu_item">
          <NavLink to="FormNewEmployee">Добавить нового сотрудника</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
