import { Outlet } from "react-router-dom";

import { Footer, Header } from "../../../components/pages";

const Index = () => {
 

 
  return (
    <>
   <Header/>
   <div className="mt-[70px]">
   <Outlet />
   </div>
    <Footer/>
    </>
  );
};

export default Index;
