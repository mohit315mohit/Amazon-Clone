/* eslint-disable react/prop-types */
import all from "../assets/all.svg";
import { list_items } from "../constant";
export default function Catagory({openSidebar}) {
  const styles =
    "mt-1.5 mb-1.5 py-1.5 px-3 bg-transperent text-white cursor-pointer whitespace-nowrap rounded-sm border-2 border-transparent  font-semibold h-10";

  return (
    <div className="catagory_filter h-10 bg-[rgb(75,75,80)] text-black flex overflow-hidden items-center">
      <div className="all">
        <button
          onClick={openSidebar}
          className={`flex gap-1 items-center ${styles}`}
        >
          <img className="w-2.5 h-2.5" src={all} alt="all" />
          <span>All</span>
        </button>
      </div>
      {list_items.map((item, index) => (
        <button className={styles} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}
