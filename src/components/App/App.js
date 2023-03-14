import "./App";
import AppRouter from "../AppRouter";
import { EmployeesProvider } from "../../providers/EmployeesProvider";
import { SearchProvider } from "../../providers/SearchProvider";

function App() {
  return (
    <SearchProvider>
      <EmployeesProvider>
        <AppRouter />
      </EmployeesProvider>
    </SearchProvider>
  );
}

export default App;
