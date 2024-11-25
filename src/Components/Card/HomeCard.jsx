import Card2 from "./Card2";
import Card3 from "./Card3";
import { data } from "../../constant";

export default function HomeCard() {
  const twodarray = (data) => {
    const result = [];
    for (let i = 0; i < data.length; i += 4) {
      result.push(data.slice(i, i + 4));
    }
    return result;
  };

  return (
    <div className="home-card-container flex flex-wrap justify-between gap-4 px-[80px] bg-[#d7d4d4] ">
      {twodarray(data.slice(0, 24)).map(function (data, index) {
        return <Card2 key={index} data={data} />;
      })}
      <div>
      <Card3 data={data.slice(24, 50)}/>;
      </div>
    </div>
  );
}
