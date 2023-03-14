import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import FormNewEmployee from "../pages/FormNewEmployee/FormNewEmployee";
import EmployeesList from "../pages/EmployeesList/EmployeesList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="FormNewEmployee" element={<FormNewEmployee />}></Route>
        <Route path="EmployeesList" element={<EmployeesList />}></Route>
      </Route>
      <Route path="*" element={<Layout />}></Route>
    </Routes>
  );
};

export default AppRouter;
