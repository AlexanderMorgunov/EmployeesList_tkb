import { createContext, useState } from "react";

const initialState = [
  {
    name: "Иванов Василий Петрович",
    position: "Аналитик",
    age: 36,
    skills:
      "SQL разных реализаций, python, библиотеки pandas, библиотеки визуализации, умение использовать API",
    id: 1,
  },
  {
    name: "Петр Игнатьевич Головчанский",
    position: "Менеджер",
    age: 30,
    skills:
      "Опыт в B2B продажах более 5лет, взаимодействие с первыми лицами компаний",
    id: 2,
  },
  {
    name: "Ольга Матвеевна Шелестова",
    position: "Юрист",
    age: 42,
    skills:
      "Изучение судебной практики, правовое исследование, знание законов и правовых процедур",
    id: 3,
  },
  {
    name: "Кукушкин Михаил Игнатьевич",
    position: "Программист",
    age: 32,
    skills: "HTML, CSS, SCSS, JS, React, TypeScript, Redux",
    id: 4,
  },
];

export const EmployeesContext = createContext([]);

export const EmployeesProvider = ({ children }) => {
  const [Employees, setEmployees] = useState(initialState);
  return (
    <EmployeesContext.Provider value={{ Employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
