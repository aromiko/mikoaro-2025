import bolton from "@/app/assets/icons/bolton.jpg";
import fujitsu from "@/app/assets/icons/fujitsu.jpg";
import misys from "@/app/assets/icons/misys.jpg";
import mrm from "@/app/assets/icons/mrm.jpg";
import workforce from "@/app/assets/icons/workforce.jpg";
import landscape2 from "@/app/assets/images/landscape5.jpg";
import Logo from "@/components/ui/logo";

export const workTimelineItems = [
  {
    title: "MRM",
    description: {
      position: "Senior Frontend Developer",
      tenure: "July 2022 – Present",
      work: "I specialize in developing frontend libraries and reusable components for CMS platforms. I design and implement complex UI components and workflows, ensuring seamless user experiences. One of my key projects includes creating a Storybook UI to showcase components for a pharmaceutical website. I also led the frontend redevelopment of a medicine assistance tool, enhancing its usability and performance. Additionally, I contributed to building a Next.js project integrated with the Contentful GraphQL API, streamlining content management and improving performance."
    },
    className: "lg:before:flex-1",
    dotContent: <Logo src={mrm} width={48} height={48} />
  },
  {
    title: "Bolton International",
    description: {
      position: "Frontend Developer",
      tenure: "July 2020 – February 2022",
      work: "I contributed to a financial tech startup’s accounts payable automation app, developing a standardized frontend library and translating designs into reusable components. I worked closely with product and design teams to implement complex workflows and integrated APIs to dynamically display data on dashboards, tables, and graphs."
    },
    className: "flex-row-reverse lg:flex-row lg:after:flex-1",
    dotContent: <Logo src={bolton} width={48} height={48} />
  },
  {
    title: "Tanda | Workforce.com",
    description: {
      position: "Frontend Developer",
      tenure: "February 2020 – April 2020",
      work: "I played a key role in building and optimizing a high-performance marketing website designed to attract clients. I focused on enhancing page loading speeds to reduce bounce rates and collaborated with SEO specialists, UI/UX designers, and content teams to align strategies for maximum engagement."
    },
    className: "lg:before:flex-1",
    dotContent: <Logo src={workforce} width={48} height={48} />
  },
  {
    title: "Fujitsu Philippines",
    description: {
      position: "Application Systems Engineer",
      tenure: "October 2016 – February 2020",
      work: "I developed high-fidelity prototypes for bank loan machine learning web apps and collaborated with the Japan counterpart to present demos at annual Fujitsu forums. I worked on large-scale APIs for a bank user profile system, developed client-focused designs, and ensured code quality through unit, automated, and functional testing."
    },
    className: "flex-row-reverse lg:flex-row lg:after:flex-1",
    dotContent: <Logo src={fujitsu} width={48} height={48} />
  },
  {
    title: "Misys",
    description: {
      position: "Software QA Tester Intern",
      tenure: "January 2016 – April 2016",
      work: "I was part of a team responsible for automated testing of financial software. I worked closely with developers and QA engineers to integrate and build tests on an automation server, improving software reliability and reducing manual testing efforts."
    },
    className: "lg:before:flex-1",
    dotContent: <Logo src={misys} width={48} height={48} />
  },
  { className: "flex-row-reverse lg:flex-row lg:after:flex-1" }
];

export const workMainHeroProps = {
  bgImage: landscape2,
  headerText: "Work Experience",
  bodyText:
    "These work experiences are not just a list of jobs I’ve held—they are the foundation of who I am today. Each role, project, and challenge has shaped my skills, mindset, and approach to problem-solving. From collaborating in fast-paced environments to tackling complex technical problems, these experiences have honed my ability to adapt, innovate, and grow. They’ve taught me how to thrive under pressure, communicate effectively, and deliver results that make an impact. It's through this diverse range of experiences that I’ve developed the expertise and confidence to take on any challenge that comes my way, and these experiences continue to define me as both a professional and an individual."
};
