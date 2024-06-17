import { AdminBase } from "./AdminBase";
import React, { useState } from "react";
import { AdminNoticePageMain } from "./AdminNoticePageMain";

const AdminNoticePage = () => {
  const [isNavVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };
  return (
    <div className="flex h-100vh items-center justify-center bg-white">
      <AdminBase />
      <div className="flex-grow bg-white shadow-2xl w-full h-full transform transition duration-500 scale-100 opacity-90 hover:opacity-100">
        <div className="w-full h-full overflow-y-auto">
          <AdminNoticePageMain />
        </div>
      </div>
    </div>
  );
};

export { AdminNoticePage };
