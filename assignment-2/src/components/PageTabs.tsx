const PageTabs = () => {
  return (
    <>
    {/* TODO: make it responsive */}
      <div className="flex space-x-[72px] md:px-10 lg:px-[107px] border-b-2 border-border">
        <div className="cursor-pointer flex flex-col items-center justify-between">
          <span className="py-5 text-orange text-xl font-semibold">
            Job preview
          </span>
          <div className="h-[2px] w-16 bg-orange"></div>
        </div>
        <div className="cursor-pointer text-light-grey flex flex-col items-center justify-between">
          <span className="py-5 text-xl font-medium">Applicants</span>
          <div className="h-[2px] w-16 bg-transparent"></div>
        </div>
        <div className="cursor-pointer text-light-grey flex flex-col items-center justify-between">
          <span className="py-5 text-xl font-medium">Match</span>
          <div className="h-[2px] w-16 bg-transparent"></div>
        </div>
        <div className="cursor-pointer text-light-grey flex flex-col items-center justify-between">
          <span className="py-5 text-xl font-medium ">Messages</span>
          <div className="h-[2px] w-16 bg-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default PageTabs;
