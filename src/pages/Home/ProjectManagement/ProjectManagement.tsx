import React, { useState } from "react";
import Container from "../../../sharedComponents/Container";
import SectionTitle from "../../../sharedComponents/SectionTitle";
import task from "../../../assets/Home/task.png";
import viwes from "../../../assets/Home/views.png";
import time from "../../../assets/Home/time.png";
import workflow from "../../../assets/Home/workflow.png";
import templates from "../../../assets/Home/templates.png";
import reports from "../../../assets/Home/reports.png";
import fils from "../../../assets/Home/files.png";

interface TabData {
  [key: string]: {
    text: string;
    imgSrc: string;
  };
}

const tabData: TabData = {
  "Projects And Tasks": {
    text: "Projects & Tasks is a comprehensive tool that allows you to efficiently manage your projects and tasks. With a user-friendly interface, you can create, organize, and prioritize tasks effortlessly. Stay on top of deadlines and milestones by assigning tasks, setting due dates, and tracking progress. Whether you are working on a solo project or collaborating with a team, Projects & Tasks has got you covered. Keep everything organized and on track.",
    imgSrc: task,
    // "https://img.freepik.com/free-photo/young-creative-people-working-together-with-laptop-group-cool-guys-working-new-project-while-spending-time-modern-office_574295-5685.jpg?w=740&t=st=1705603557~exp=1705604157~hmac=e1acadedf071077df6562da1672f92f62f1c66d62339cff8e004d0bc1b5fbfa7",
  },
  Views: {
    text: "Views in our platform offer a high level of customization to fit your unique workflow. Create, save, and share customized views that display the information most important to you. Whether you prefer a Kanban board, Gantt chart, or a list view, our flexible system lets you tailor your workspace to your exact needs. Say goodbye to one-size-fits-all solutions, and welcome Views that adapt to your preferences. Stay productive with views that work for you.",
    imgSrc: viwes,
    // "https://img.freepik.com/free-vector/influencer-recording-new-video_52683-37608.jpg?w=740&t=st=1705603639~exp=1705604239~hmac=b03b48523308400c1df1e20e5e9b966077202f8b4e6a982f3f053dff80668c3c",
  },
  "Time Tracking": {
    text: "Time Tracking is a powerful tool designed to help you keep tabs on how your time is spent. Effortlessly track hours, minutes, and seconds on various tasks and projects. With intuitive reporting, you can analyze your time allocation and make data-driven decisions to optimize productivity. Time Tracking isn’t just about clocking in and out; it’s about gaining insights into your work habits and enhancing your efficiency. Make the most of your time with Time Tracking.",
    imgSrc: time,
    // "https://img.freepik.com/free-vector/deadline-concept-illustration_114360-6313.jpg?w=740&t=st=1705603686~exp=1705604286~hmac=52c402c2fe202dd5e5f8a95f63b3ed58ea5113e34d578ab5c8ebefd4a1c3b83d",
  },
  Workflows: {
    text: "Workflows are the backbone of your business processes. Create, customize, and automate workflows to streamline tasks and boost productivity. From approval processes to project management workflows, our platform allows you to define the steps and rules that govern your operations. Say goodbye to manual handoffs and hello to seamless, efficient Workflows. Achieve efficiency with Workflows that match your unique needs.",
    imgSrc: workflow,
    // "https://img.freepik.com/free-vector/flat-timeline-infographic-template_23-2148927216.jpg?w=740&t=st=1705603720~exp=1705604320~hmac=1fd59559da9107bbe2d172d9c262164fe13b6c1b3fc3449572a0625b39ac3023",
  },
  Templates: {
    text: "Templates are your shortcut to success. Jumpstart your projects with pre-defined templates tailored to various industries and use cases. From project plans to marketing campaigns, our Templates offer a solid foundation that you can build upon. Customize and adapt them to your specific needs, saving time and ensuring consistency in your work. Start strong with Templates that set you on the right path.",
    imgSrc: templates,
    // "https://img.freepik.com/free-vector/teamwork-landing-page-with-coworkers-helping-each-other_23-2148274500.jpg?w=740&t=st=1705603789~exp=1705604389~hmac=19762d4400e17e021f27403a12daaef0aa02eb94fab64590246e172f3dc87250",
  },
  Reports: {
    text: "Reports provide in-depth insights into your business performance. Generate detailed reports and analytics to make informed decisions. Whether it’s financial reports, project status reports, or performance metrics, our reporting system offers the flexibility to create, export, and share data that matters most to your organization. Gain actionable insights with Reports that drive your business forward.",
    imgSrc: reports,
    // "https://img.freepik.com/free-photo/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room_74952-1410.jpg?w=740&t=st=1705603822~exp=1705604422~hmac=7de5efa9f66b2d9804c34295ba2b7e92d79de49f518ca716c8c27bc2cfcffbc1",
  },
  "Files And Documents": {
    text: "Files & Documents is your central hub for secure storage and management. Store, organize, and access your files and documents with ease. Our platform offers version control, access permissions, and seamless integration with other tools, ensuring that your important files are always at your fingertips, and collaboration is a breeze. Keep your important documents organized and accessible with Files & Documents.",
    imgSrc: fils,
    // "https://img.freepik.com/free-photo/ring-binder-used-stored-documents_23-2149362564.jpg?w=740&t=st=1705603943~exp=1705604543~hmac=8cc6460b20eb7650497a9340032010cd01d3ecd863a1d7ee7751dfd0ae2ac2d5",
  },
};

const ProjectManagement: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<keyof TabData>("Projects And Tasks");

  const handleTabClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    tabName: keyof TabData
  ) => {
    event.preventDefault();
    setActiveTab(tabName);
  };

  const { text, imgSrc } = tabData[activeTab];

  return (
    <div className="bg-white py-20 lg:py-28 ">
      <Container>
        <div className="rounded-xl w-full mx-auto">
          <SectionTitle
            subTitle="Project Management"
            mainTitle="All your projects and teamwork in one place"
          ></SectionTitle>
          {/* tabs */}
          <header className="pb-4 mb-6">
            <nav className="flex justify-between lg:justify-center overflow-x-auto mb-4">
              {Object.keys(tabData).map((tabName) => (
                <a
                  key={tabName}
                  href="#"
                  onClick={(e) => handleTabClick(e, tabName as keyof TabData)}
                  className={`text-sm md:text-base text-black text-opacity-55 whitespace-nowrap  hover:text-primeColor font-semibold mr-4 lg:mx-4 py-2 transition-colors duration-300 ${
                    activeTab === tabName
                      ? "text-primeColor text-opacity-100 border-b-2 border-primeColor"
                      : ""
                  }`}
                >
                  {tabName}
                </a>
              ))}
            </nav>
          </header>
          {/* content */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-4xl border-l-4 pl-2 border-primeColor font-stylish mb-4">
                {activeTab}
              </h3>
              <p className="text-black font-normal  text-justify">{text}</p>
              {/* <button className="bg-purple-500 text-white rounded-lg px-6 py-2 hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                Get started for free
              </button> */}
            </div>
            <div className="flex-1">
              <img
                className="rounded-lg"
                src={imgSrc}
                alt={String(activeTab)}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectManagement;
