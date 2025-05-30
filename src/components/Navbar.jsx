import { Outlet } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

export default function Navbar() {
  return (
    <>
      <div className="w-[100%] lg:w-[50%] flex flex-col  mx-auto min-h-screen bg-white text-black">
        <InPageNavigation
          teams={[
            { title: "MATCHES", path: "/" },
            { title: "NEWS", path: "/news" },
            { title: "TABLE", path: "/pointsTable" },
          ]}
        ></InPageNavigation>

        <Outlet />
      </div>
    </>
  );
}
