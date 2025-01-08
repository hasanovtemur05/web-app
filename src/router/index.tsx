import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { AdminLayout, Products, Scan, Settings, SignIn, SignUp, TaskLists, TasksCompleted, UserLayout } from "../modules";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/user-layout" element={<UserLayout/>}>
          <Route path="products" element={<Products/>}/>
          <Route path="task-lists" element={<TaskLists/>}/>
          <Route path="tasks-completed" element={<TasksCompleted/>}/>
          <Route path="scaner" element={<Scan/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>

        <Route path="/admin-layout" element={<AdminLayout/>}>
        
        </Route>


    </Route>)
  );
  return <RouterProvider router={router} />;
};

export default Index;
