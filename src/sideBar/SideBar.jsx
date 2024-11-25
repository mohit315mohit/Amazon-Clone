/* eslint-disable react/prop-types */
// import React from 'react'
import ion from "../assets/arrow.svg";
import close from "../assets/close.svg";
import { sidebarData } from "../constant";

export default function SideBar({ openSidebar, onCloseSidebar}) {
  // console.log(openSidebar,"fghj")
  const content =
    "flex items-center justify-between py-3.5 text-[14px] leading-4 text-[#111111] cursor-pointer font-bold hover:bg-[#00050080]";
  return openSidebar ? (
    <div className="full-view w-[100dvw] h-[100dvg] flex z-[5] bg-transparent top-0 left-0">
      <div className="popup-background fixed z-[7] w-full h-full max-w-[100dvw] max-h-[100dvh] bg-[#00000080] left-0 top-0 cursor-pointer" onClick={onCloseSidebar}></div>
      <div className="sidebar absolute top-0 left-0 w-[364px] h-full bg-white z-[7] flex flex-col overflow-y-auto">
        <button className="bg-[rgb(34,47,62)] px-8 py-2 font-bold text-[19px] leading-[25px] flex gap-2 h-min ">
          <img src="" />
          Hello. sign In
        </button>
        {sidebarData.map((contain) => {
          return (
            <div
              key={contain.title}
              className="content-container flex flex-col px-8 py-2 border-b border-gray-500"
            >
              <div className="py-2 font-bold text-lg text-[#111111] leading-6">
                {contain.title}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col">
                {contain.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={content}>
                    {item.heading}
                    {item.arrow && (
                      <img src={ion} alt="Arrow" className="w-2.5 h-3.5" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
        <button
          onClick={onCloseSidebar}
          className="absolute top-2 left-[366px]  z-20 w-8 h-8 "
        >
          <img src={close} alt="no"  className="h-full w-full"/>
        </button>
    </div>
  ) : (
    <></>
  );
}
