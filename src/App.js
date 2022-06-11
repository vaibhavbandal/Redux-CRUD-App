import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getAllProducts from "./redux/actions/productActions";
import { Navbar } from "./component/Navbar";
import { UserForm } from "./component/UserForm";
import { UserTable } from "./component/UserTable";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid sm:grid-cols-2 px-2 py-2   gap-2 ">
        <UserForm />
        <UserTable />
      </div>
    </>
  );
}
