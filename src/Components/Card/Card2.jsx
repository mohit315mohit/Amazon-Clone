/* eslint-disable react/prop-types */

export default function Card1({ data }) {
  function extractWords(str) {
    const index = str.indexOf("|");
    return index !== -1 ? str.substring(0, index).trim() : str;
  }
  // console.log(data);
  return (
    <div className="home-card bg-white flex flex-col  gap-2 p-4 rounded border border-gray-200 text-gray-900 w-[406px] h-[385px]">
      <div className="home-card-title text-[22px] font-bold leading-[27px]">
        hello
      </div>
      <div className="home-card-items-container flex  justify-center flex-wrap gap-3">
        {data.map((item) => (
          <div
            key={item.product_id}
            className="home-card-items flex flex-col gap-1 shadow-xl"
          >
            <img
              className="home-card-image w-[180px] h-[115px] object-contain"
              src={item.img_link}
              alt={item.product_name}
            />
            <div className="home-card-items-title text-xs font-bold leading-4 w-[120px] text-gray-800">
              {extractWords(item.category)}
            </div>
          </div>
        ))}
      </div>
      <a
        className="home-card-redirect flex justify-start items-center text-blue-500 cursor-pointer hover:text-[#c7501f]"
        href=""
      >
        See more
      </a>
    </div>
  );
}
