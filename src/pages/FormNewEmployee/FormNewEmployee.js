import { useContext } from "react";
import { useForm } from "react-hook-form";
import "./FormNewEmployee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { nanoid } from "nanoid";
import { EmployeesContext } from "../../providers/EmployeesProvider";

const FormNewEmployee = () => {
  const { Employees, setEmployees } = useContext(EmployeesContext);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
    setEmployees((Employees) => [...Employees, { ...data, id: nanoid() }]);
    console.log(true);
  };

  return (
    <form
      action=""
      className="FormNewEmployee"
      onSubmit={handleSubmit(onSubmit)}
    >
      <table>
        <thead>
          <tr>
            <th>
              <label htmlFor="name">ФИО</label>
            </th>
            <th>
              <label htmlFor="position">Должность</label>
            </th>
            <th>
              <label htmlFor="age">Возраст</label>
            </th>
            <th>
              <label htmlFor="skills">Компетенции</label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                className="FormNewEmployee_input-name"
                {...register("name", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 3,
                    message: "Минимально 3 символа",
                  },
                })}
              />
              <div style={{ height: 40 }}>
                {errors?.name && (
                  <p className="FormNewEmployee_error-message">
                    {errors?.name?.message || "Error"}
                  </p>
                )}
              </div>
            </td>
            <td>
              <select
                name="position"
                id="position"
                {...register("position", {
                  required: "Поле обязательно для заполнения",
                  validate: (value, formValues) => value !== "DEFAULT",
                })}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Выберите должность ...
                </option>
                <option value="Аналитик">Аналитик</option>
                <option value="Менеджер">Менеджер</option>
                <option value="Программист">Программист</option>
                <option value="Юрист">Юрист</option>
              </select>
              <div style={{ height: 40 }}>
                {errors?.position && (
                  <p className="FormNewEmployee_error-message">
                    Выберите должность
                  </p>
                )}
              </div>
            </td>
            <td>
              <input
                type="number"
                name="age"
                className="FormNewEmployee_input-age"
                max={100}
                {...register("age", {
                  required: "Поле обязательно для заполнения",
                  min: {
                    value: 18,
                    message: "Минимальное возраст 18 лет",
                  },
                  max: {
                    value: 99,
                    message: "Максимальный возраст 99 лет",
                  },
                })}
              />
              <div style={{ height: 40 }}>
                {errors?.age && (
                  <p className="FormNewEmployee_error-message">
                    {errors?.age?.message || "Error"}
                  </p>
                )}
              </div>
            </td>
            <td>
              <textarea
                name="skills"
                className="FormNewEmployee_textarea"
                {...register("skills", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 10,
                    message: "Минимально 10 символов",
                  },
                })}
              ></textarea>
              <div style={{ height: 40 }}>
                {errors?.skills && (
                  <p className="FormNewEmployee_error-message">
                    {errors?.skills?.message || "Error"}
                  </p>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="Form-button-container">
        <Button variant="danger Form-button" type="submit" disabled={!isValid}>
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default FormNewEmployee;
