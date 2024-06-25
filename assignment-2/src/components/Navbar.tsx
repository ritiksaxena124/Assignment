import JobsIcon from "../assets/jobs-icon.svg";
import MessagesIcon from "../assets/message-square-01.svg";
import NotificationBellIcon from "../assets/bell-02.svg";
import PaymentsIcon from "../assets/coins-hand.svg";
import Avatar from "../assets/atlassian-logo.png";
import DropDownIcon from "../assets/chevron-down.svg";

const Navbar = () => {
  return (
    <>
    {/* TODO: Make navbar responsive */}
      <div className="px-10 py-[18px] flex items-center justify-between h-[109px] border-b-[1px] border-border">
        {/* Logo */}
        <div className="bg-[#E7E7E7] px-[28px] py-[9px] h-full flex items-center justify-center font-bold text-xl">
          <span className="text-orange"> Logo </span>
        </div>
        {/* Navbar Items */}
        <div className="p-2 border-[0.5px] border-light-orange rounded-full flex space-x-20">
          <div className="flex items-center cursor-pointer justify-center gap-2 bg-orange border-2 border-[#FCB4A5] p-4 rounded-full">
            {/* Nav Icon */}
            <img src={JobsIcon} width={24} height={24} />
            {/* Nav Title */}
            <span className="text-white font-medium text-xl">Jobs</span>
          </div>

          <div className="flex items-center cursor-pointer justify-center gap-2 p-4 rounded-full">
            {/* Nav Icon */}
            <img src={MessagesIcon} width={24} height={24} />
            {/* Nav Title */}
            <span className="text-very-light-grey font-medium text-[20px]">Messages</span>
          </div>

          <div className="flex items-center cursor-pointer justify-center gap-2 p-4 rounded-full">
            {/* Nav Icon */}
            <img src={PaymentsIcon} width={24} height={24} />
            {/* Nav Title */}
            <span className="text-very-light-grey font-medium text-[20px]">Payments</span>
          </div>
        </div>
        {/* Notification bell with avatar and dropdown */}
        <div className="flex space-x-4">
          {/* Notification bell */}
          <img
            src={NotificationBellIcon}
            width={32}
            height={32}
            alt="notification-bell-icon"
            className="cursor-pointer"
          />
          <div className="flex items-center space-x-[6px]">
            {/* Avatar and dropdown */}
            <img
              src={Avatar}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
            <img
              src={DropDownIcon}
              alt="dropdown-icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
