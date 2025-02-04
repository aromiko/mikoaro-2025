import bolton from "@/app/assets/icons/bolton.jpg";
import fujitsu from "@/app/assets/icons/fujitsu.jpg";
import misys from "@/app/assets/icons/misys.jpg";
import mrm from "@/app/assets/icons/mrm.jpg";
import workforce from "@/app/assets/icons/workforce.jpg";
import landscape2 from "@/app/assets/images/landscape6.jpg";
import Logo from "@/components/ui/logo";

export const workTimelineItems = [
  {
    title: "MRM",
    description: (
      <>
        <p>Because this is the life you love!</p>
        <ul>
          <li>Work</li>
          <li>Code</li>
          <li>Sleep</li>
        </ul>
      </>
    ),
    dotVariant: "filled",
    className: "lg:before:flex-1",
    dotContent: <Logo src={mrm} width={48} height={48} />
  },
  {
    title: "Bolton International",
    description: (
      <>
        <p>Because this is the life you love!</p>
        <ul>
          <li>Work</li>
          <li>Code</li>
          <li>Sleep</li>
        </ul>
      </>
    ),
    dotVariant: "outline",
    className: "flex-row-reverse lg:flex-row lg:after:flex-1",
    dotContent: <Logo src={bolton} width={48} height={48} />
  },
  {
    title: "Tanda | Workforce.com",
    description: (
      <>
        <p>Because this is the life you love!</p>
        <ul>
          <li>Work</li>
          <li>Code</li>
          <li>Sleep</li>
        </ul>
      </>
    ),
    dotVariant: "outline",
    className: "lg:before:flex-1",
    dotContent: <Logo src={workforce} width={48} height={48} />
  },
  {
    title: "Fujitsu Philippines",
    description: (
      <>
        <p>Because this is the life you love!</p>
        <ul>
          <li>Work</li>
          <li>Code</li>
          <li>Sleep</li>
        </ul>
      </>
    ),
    dotVariant: "outline",
    className: "flex-row-reverse lg:flex-row lg:after:flex-1",
    dotContent: <Logo src={fujitsu} width={48} height={48} />
  },
  {
    title: "Misys",
    description: (
      <>
        <p>Because this is the life you love!</p>
        <ul>
          <li>Work</li>
          <li>Code</li>
          <li>Sleep</li>
        </ul>
      </>
    ),
    dotVariant: "outline",
    className: "lg:before:flex-1",
    dotContent: <Logo src={misys} width={48} height={48} />
  }
];

export const workMainHeroProps = {
  bgImage: landscape2,
  headerText: "Work Experiences",
  bodyText:
    "These work experiences are not just a list of jobs I’ve held—they are the foundation of who I am today. Each role, project, and challenge has shaped my skills, mindset, and approach to problem-solving. From collaborating in fast-paced environments to tackling complex technical problems, these experiences have honed my ability to adapt, innovate, and grow. They’ve taught me how to thrive under pressure, communicate effectively, and deliver results that make an impact. It's through this diverse range of experiences that I’ve developed the expertise and confidence to take on any challenge that comes my way, and these experiences continue to define me as both a professional and an individual."
};
