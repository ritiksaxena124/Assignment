
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const ContentArea = () => {
  return (
    <>
      <div className="flex md:flex-col lg:flex-row gap-4">
        <LeftSection />
        <RightSection />
      </div>
    </>
  );
};

export default ContentArea;