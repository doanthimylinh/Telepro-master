import { FC } from "react";
import SideBar from "../components/Home/SideBar";
import Account from "../components/Home/Account";

const Home: FC = () => {
  return (
    <div className="flex">
      <Account />
      <SideBar />

      <div className="bg-lighten hidden flex-grow flex-col items-center justify-center gap-3 md:!flex">
        <h1 className="text-dark-lighten border-dark rounded-full p-2 text-center">
          Select a conversation to start chatting
        </h1>
      </div>
    </div>
  );
};

export default Home;
