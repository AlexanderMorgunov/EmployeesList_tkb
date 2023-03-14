import { useContext } from "react";
import { EmployeesContext } from "../../providers/EmployeesProvider";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { SearchContext } from "../../providers/SearchProvider";

const EmployeesList = () => {
  const { Employees, setEmployees } = useContext(EmployeesContext);
  const { search } = useContext(SearchContext);
  const { state } = useLocation();

  console.log(state);

  const handleDelete = (id) => {
    setEmployees((Employees) => Employees.filter((el) => el.id !== id));
  };
  const content =
    state === "all"
      ? search.length === 0
        ? Employees
        : Employees.filter((el) =>
            el.name.toLowerCase().includes(search.toLowerCase())
          )
      : search.length === 0
      ? Employees.filter((el) => el.position === state)
      : Employees.filter((el) => {
          return el.position === state && el.name.includes(search);
        });

  if (content.length === 0) {
    return <div>Список пуст</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Возраст</th>
            <th>Компетенции</th>
            <th>Удалить?</th>
          </tr>
        </thead>
        <tbody>
          {content.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.position}</td>
              <td>{el.age}</td>
              <td width={250}>{el.skills}</td>
              <Button
                variant="danger button-container"
                onClick={() => handleDelete(el.id)}
              >
                Удалить
              </Button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default EmployeesList;
