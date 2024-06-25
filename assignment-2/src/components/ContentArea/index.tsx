
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const ContentArea = () => {
  return (
    <>
      <div className="flex">
        <LeftSection />
        <RightSection />
      </div>
    </>
  );
};

export default ContentArea;