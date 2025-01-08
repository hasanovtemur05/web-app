import { AppstoreOutlined, FileDoneOutlined, ScanOutlined, SettingOutlined, SnippetsOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <footer
        id="footer"
        className="fixed bottom-0 left-0 w-full z-50  py-3 md:py-4 lg:py-5 bg-slate-50 rounded-tl-2xl rounded-tr-2xl"
      >
        <div className="flex justify-evenly items-center text-[grey]">
          <Link
            to="/user-layout/task-lists"
            className="flex flex-col items-center group"
          >
            <SnippetsOutlined className="text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] group-hover:scale-110 transition-transform duration-200 hover:text-black" />
            <p className="text-xs sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mt-1 group-hover:text-black">
              Vazifalar
            </p>
          </Link>

          <Link to="/user-layout/products" className="flex flex-col items-center group">
            <AppstoreOutlined className="text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] group-hover:scale-110 transition-transform duration-200  hover:text-black" />
            <p className="text-xs mt-1 group-hover:group-hover:text-black">
              Tovarlar
            </p>
          </Link>

          <Link to="/user-layout/scaner" className="flex flex-col items-center group">
            <ScanOutlined className="text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] group-hover:scale-110 transition-transform duration-200  hover:text-black" />
            <p className="text-xs sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mt-1 group-hover:text-black">
              Scan
            </p>
          </Link>

          <Link
            to="/user-layout/tasks-completed"
            className="flex flex-col items-center group"
          >
            <FileDoneOutlined className="text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] group-hover:scale-110 transition-transform duration-200  hover:text-black" />
            <p className="text-xs sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mt-1 group-hover:text-black">
              Ro'yxat
            </p>
          </Link>

          <Link to="/user-layout/settings" className="flex flex-col items-center group">
            <SettingOutlined className="text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] group-hover:scale-110 transition-transform duration-200  hover:text-black" />
            <p className="text-xs sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mt-1 group-hover:text-black">
              Settings
            </p>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Index;
