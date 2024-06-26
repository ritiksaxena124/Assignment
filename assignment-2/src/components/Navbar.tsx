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
      <div className="px-11 py-[14px] flex items-center justify-between border-b-2 border-border sticky w-full bg-white top-0 left-0">
        {/* Logo */}
        <div className="bg-[#E7E7E7] px-7 py-[18px] h-full flex items-center justify-center font-medium text-xl">
          <span className="text-orange"> Logo </span>
        </div>
        {/* Navbar Items */}
        <div className="p-2 border-[0.5px] border-border rounded-full flex items-center justify-between space-x-[65px]">
          <div className="flex items-center cursor-pointer justify-center gap-2 bg-orange border-2 border-[#FCB4A5] p-4 rounded-full">
            {/* Nav Icon */}
            <img src={JobsIcon} width={24} height={24} />
            {/* Nav Title */}
            <span className="text-white font-medium text-xl">Jobs</span>
          </div>

          <div className="flex items-center cursor-pointer justify-center gap-2 p-4 rounded-full">
            {/* Nav Icon */}
            <div className="relative">
              <img src={MessagesIcon} width={24} height={24} />
              <span className="w-[6px] h-[6px] rounded-full bg-orange absolute right-0 top-0"></span>
            </div>
            {/* Nav Title */}
            <span className="text-very-light-grey font-medium text-[20px]">
              Messages
            </span>
          </div>

          <div className="flex items-center cursor-pointer justify-center gap-2 p-4 rounded-full">
            {/* Nav Icon */}
            <img src={PaymentsIcon} width={24} height={24} />
            {/* Nav Title */}
            <span className="text-very-light-grey font-medium text-[20px]">
              Payments
            </span>
          </div>
        </div>
        {/* Notification bell with avatar and dropdown */}
        <div className="flex space-x-4">
          {/* Notification bell */}

          <div className="relative">
            <img
              src={NotificationBellIcon}
              width={32}
              height={32}
              alt="notification-bell-icon"
              className="cursor-pointer"
            />
            <span className="w-[6px] h-[6px] rounded-full bg-orange absolute right-1 top-0"></span>
          </div>
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
