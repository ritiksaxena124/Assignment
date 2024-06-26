import Button from "../Button";
import ApplicantsIcon from "../../assets/users-01.svg";
import MatchesIcon from "../../assets/user-check-01.svg";
import MessagesIcon from "../../assets/message-square-01.svg";
import ViewsIcon from "../../assets/eye.svg";
import DeleteIcon from "../../assets/trash-03.svg";
import EditIcon from "../../assets/edit-02.svg";

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
      <div className="py-8 pr-4 md:w-full md:px-4 lg:w-1/4 lg:mx-auto">
        {/* Editing buttons */}
        <div className="flex gap-4">
          <Button type="secondary">
            <img src={DeleteIcon} alt="delete icon" width={20} height={20} />
            Delete Job
          </Button>
          <Button type="primary">
            <img src={EditIcon} alt="edit icon" width={20} height={20} />
            Edit Job
          </Button>
        </div>
        {/* Statistics */}
        <div className="py-3 px-6">
          {statistics.map((statistic) => (
            <div
              key={statistic.id}
              className={`flex items-center justify-between py-[26px] ${
                statistic.id === 4 ? "border-b-0" : "border-b-[1px]"
              } border-border`}
            >
              {/* icon and name */}
              <div className="flex gap-[10px]">
                <img src={statistic.icon} alt="icon" width={20} height={20} />
                <span className="text-base font-medium text-[#4F4F4F]">
                  {statistic.title}
                </span>
              </div>
              {/* count */}
              <span className="text-xl font-semibold text-dark-grey">
                {statistic.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RightSection;
