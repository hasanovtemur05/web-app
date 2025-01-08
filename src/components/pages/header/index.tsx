import { Link } from "react-router-dom";

const Index = () => {

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-10">
        <div className="w-[90%] m-auto h-[60px] flex items-center justify-between">
          <Link
            to="/user-layout"
            className="font-medium text-gray-600 text-[18px] lg:text-[24px]"
          >
            ANDMI
          </Link>
        </div>
      </header>
    </>
  );
};

export default Index;
