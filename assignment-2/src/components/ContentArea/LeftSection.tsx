import LocationIcon from "../../assets/marker-pin-01.svg";
import SalaryRangeIcon from "../../assets/coins-stacked-03.svg";
import FigmaLogo from "../../assets/figma-logo.png";
import IllustratorLogo from "../../assets/illustrator-logo.png";
import AdobeXDLogo from "../../assets/adobexd-logo.png";
import AtlassianLogo from "../../assets/atlassian-logo.png";

const LeftSection = () => {
  return (
    <div className="py-9 md:w-full md:pr-4 lg:w-3/4 border-r-2 border-border">
      {/* Job Role */}
      <div className="md:pl-10 lg:pl-[100px] flex flex-col gap-6 pb-8 border-b-[1px] border-border">
        <div className="flex gap-3 items-center">
          <h1 className="text-[35px] text-dark-grey font-semibold">
            Software Product Designer
          </h1>
          <span className="h-[6px] w-[6px] rounded-full bg-grey"></span>

          <span className="text-light-grey text-sm font-medium">
            posted 2 days ago
          </span>
          <div className="pl-[6px] pr-2 py-[2px] border border-border-green rounded-full flex gap-1 items-center justify-center bg-very-light-green">
            <span className="h-[6px] w-[6px] rounded-full bg-green"></span>
            <span className="text-dark-green text-xs font-medium">Open</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {/* Location and Salary range */}
          <div className="flex items-center gap-2">
            <img
              src={LocationIcon}
              alt="location icon"
              width={24}
              height={24}
            />
            <span className="font-medium text-xl text-davys-grey">
              Delaware, USA
            </span>
          </div>
          <span className="h-[6px] w-[6px] rounded-full bg-grey"></span>

          <div className="flex items-center gap-2">
            <img
              src={SalaryRangeIcon}
              alt="location icon"
              width={24}
              height={24}
            />
            <span className="font-medium text-xl text-davys-grey">
              $300k-$400k
            </span>
          </div>
        </div>
      </div>
      {/* Requirement Description */}
      <div className="py-8 md:pl-10 lg:pl-[100px] border-b-[1px] border-border">
        <div className="flex gap-16">
          <div className="">
            <h3 className="mb-2 text-sm font-medium text-dove-grey">
              Skills Required
            </h3>
            <div className="gap-2 flex flex-col">
              <div className="px-[6px] py-1 rounded-[6px] flex items-center justify-center gap-1 border text-xs border-border w-fit">
                <img src={FigmaLogo} alt="figma logo" width={16} height={16} />
                Figma
              </div>
              <div className="px-[6px] py-1 rounded-[6px] flex items-center justify-center gap-1 border text-xs border-border w-fit">
                <img
                  src={IllustratorLogo}
                  alt="figma logo"
                  width={16}
                  height={16}
                />
                Adobe Illustrator
              </div>
              <div className="px-[6px] py-1 rounded-[6px] flex items-center justify-center gap-1 border text-xs border-border w-fit">
                <img
                  src={AdobeXDLogo}
                  alt="figma logo"
                  width={16}
                  height={16}
                />
                Adobe XD
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="mb-2 text-sm font-medium text-dove-grey">
              Preferred Language
            </h3>
            <div className=" text-base font-semibold text-dark-grey">English</div>
          </div>

          <div className="">
            <h3 className="mb-2 text-sm font-medium text-dove-grey">Type</h3>
            <div className=" text-base font-semibold text-dark-grey">Full time</div>
          </div>

          <div className="">
            <h3 className="mb-2 text-sm font-medium text-davys-grey">
              Years of Experience
            </h3>
            <div className=" text-base font-semibold text-dark-grey">
              3+ Years of Experience
            </div>
          </div>
        </div>
      </div>
      {/* Job Description */}
      <div className="py-8 md:pl-10 lg:pl-[100px] border-b-[1px] border-border">
        <h3 className="mb-2 text-sm font-medium text-dove-grey">
          About the Job
        </h3>
        <ol className="text-base list-decimal list-inside leading-7">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <ul className="text-base list-disc list-inside leading-7">
          <span>Benefits: </span>
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <ul className="text-base list-disc list-inside leading-7">
          <span>Schedule: </span>
          <li>Day shift</li>
        </ul>

        <ul className="text-base list-disc list-inside leading-7">
          <span>Supplemental pay types: </span>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <span>Work location: In person</span>
      </div>
      {/* Company Description */}
      <div className="py-8 md:pl-10 lg:pl-[100px] border-b-[1px] border-border">
        <div className="flex items-center gap-3 py-[10px]">
          <img
            src={AtlassianLogo}
            alt="atlassian-logo"
            width={40}
            height={40}
            className="rounded-[4px]"
          />
          <h2 className="text-xl font-medium">Atlassian</h2>
        </div>
        <div className="mt-4 flex gap-12 md:flex-col lg:flex-row">
          <div className="space-y-6 min-w-[344px]">
            <div className="space-y-2">
              <h3 className="mb-2 text-sm font-medium text-dove-grey">
                Company size
              </h3>
              <p>1k - 2k employees</p>
            </div>

            <div className="space-y-2">
              <h3 className="mb-2 text-sm font-medium text-dove-grey">
                Sector
              </h3>
              <p>Information Technology, Infrastructure</p>
            </div>

            <div className="space-y-2">
              <h3 className="mb-2 text-sm font-medium text-dove-grey">
                Founded In
              </h3>
              <p>2019</p>
            </div>
          </div>
          <div className="space-y-6 min-w-[344px]">
            <div className="space-y-2">
              <h3 className="mb-2 text-sm font-medium text-dove-grey">Type</h3>
              <p>Private</p>
            </div>

            <div className="space-y-2">
              <h3 className="mb-2 text-sm font-medium text-dove-grey">
                Funding
              </h3>
              <p>Bootstrapped</p>
            </div>

            <div className="space-y-2">
              <h3 className="mb-2 text-sm font-medium text-dove-grey">
                Founded By
              </h3>
              <p>Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
