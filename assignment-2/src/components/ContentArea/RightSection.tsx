import Button from "../Button";
import ApplicantsIcon from "../../assets/users-01.svg";
import MatchesIcon from "../../assets/user-check-01.svg";
import MessagesIcon from "../../assets/message-square-01.svg";
import ViewsIcon from "../../assets/eye.svg";

interface StatisticsData {
  id: number;
  title: string;
  count: number;
  icon: string;
}

const RightSection = () => {
  const statistics: StatisticsData[] = [
    {
      id: 1,
      title: "Applicants",
      count: 400,
      icon: ApplicantsIcon,
    },
    {
      id: 2,
      title: "Matches",
      count: 100,
      icon: MatchesIcon,
    },
    {
      id: 3,
      title: "Messages",
      count: 147,
      icon: MessagesIcon,
    },
    {
      id: 4,
      title: "Views",
      count: 800,
      icon: ViewsIcon,
    },
  ];
  return (
    <>
      <div className="py-9 px-6 w-1/4">
        {/* Editing buttons */}
        <div className="flex gap-4">
          <Button type="secondary">Delete Job</Button>
          <Button type="primary">Edit Job</Button>
        </div>
        {/* Statistics */}
        <div className="p-3">
          {statistics.map((statistic) => (
            <div
              key={statistic.id}
              className="flex items-center justify-between py-[26px] border-b-[1px] border-border"
            >
              {/* icon and name */}
              <div className="flex gap-[10px]">
                <img src={statistic.icon} alt="icon" width={20} height={20} />
                <span className="text-base font-medium">{statistic.title}</span>
              </div>
              {/* count */}
              <span className="text-xl font-semibold">{statistic.count}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RightSection;
