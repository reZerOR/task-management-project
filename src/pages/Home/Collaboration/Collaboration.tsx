import React, { useState } from "react";
import Container from "../../../sharedComponents/Container";
import SectionTitle from "../../../sharedComponents/SectionTitle";
interface TabData {
  [key: string]: {
    text: string;
    imgSrc: string;
  };
}
const tabData: TabData = {
  Discussions: {
    text: "Keep conversations organized, focused, and on topic with threaded discussion. Loop in team members and stakeholders by adding them to a conversation to keep everyone on the same page. Get all the relevant details related to the topic documented in one place.",
    imgSrc:
      "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?w=740&t=st=1705581188~exp=1705581788~hmac=aefc4eb079dd138a60822b0a438611a04834cfc79260a3fcc63c7b68d4522e4c",
  },
  Proofing: {
    text: "Manage your team’s proofing process all in one place, streamline feedback and approvals. Quickly identify bottlenecks in the workflow and address them directly in the platform. Ensure that all team members have access to the latest versions.",
    imgSrc:
      "https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?w=740&t=st=1705581292~exp=1705581892~hmac=5192258fd8c5633f1017049be5a17a2ccf7af7493a3a0112b8a40c728bfccc6a",
  },
  Notes: {
    text: "Capture important project notes in one accessible location. Make sure that your notes are organized and easy to find when you need them. Use tags and categories to keep everything in order so that your team can stay aligned.",
    imgSrc:
      "https://img.freepik.com/free-photo/close-up-people-working-office_329181-16052.jpg?w=740&t=st=1705581326~exp=1705581926~hmac=0fa32cc01a13faca5d790b0435783e7215fc2e078ac5eb1e9d8a829ed3404ecc",
  },
  Announcements: {
    text: "Broadcast updates and news to your entire team. Keep everyone informed about the latest developments and ensure that all stakeholders are aware of changes. Use announcements to celebrate milestones and recognize individual contributions.",
    imgSrc:
      "https://img.freepik.com/free-psd/3d-rendering-announcement-blank-banner-background_23-2150742106.jpg?w=740&t=st=1705581392~exp=1705581992~hmac=2f930f652c75c5c85f85f9e8e5b1634a75f8ffe5482e84a7d00707a9f28132ca",
  },
  Chat: {
    text: "Communicate in real-time with your team members. Use chat to quickly solve problems, share updates, and make decisions without delay. The chat feature allows for immediate feedback and helps keep the team connected.",
    imgSrc:
      "https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060227.jpg?w=740&t=st=1705581427~exp=1705582027~hmac=52c65317922eeda4b58a9fd74c89e7a7d464f90f9edf3c9d714bf53e970c0a35",
  },
};

const Collaboration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof TabData>("Discussions");

  const handleTabClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    tabName: string
  ) => {
    event.preventDefault();
    setActiveTab(tabName);
  };

  const { text, imgSrc } = tabData[activeTab];

  return (
    <div className="bg-secondColor bg-opacity-45 py-20 lg:py-28 ">
      <Container>
        <div className="rounded-xl w-full mx-auto">
          <SectionTitle
            subTitle="Collaboration"
            mainTitle="All your team’s communication in one place"
          ></SectionTitle>
          <header className="pb-4 mb-6">
            <nav className="flex justify-between lg:justify-center overflow-x-auto mb-4">
              {Object.keys(tabData).map((tabName) => (
                <a
                  key={tabName}
                  href="#"
                  onClick={(e) => handleTabClick(e, tabName)}
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
          <div className="flex flex-col md:flex-row-reverse gap-10 lg:gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-4xl border-l-4 pl-2 border-primeColor font-stylish mb-4">
                {activeTab}
              </h3>
              <p className="text-black mb-4 text-justify">{text}</p>
              {/* <button className="bg-purple-500 text-white rounded-lg px-6 py-2 hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                Get started for free
              </button> */}
            </div>
            <div className="flex-1 mt-6 md:mt-0 md:ml-4">
              <img
                className="rounded-lg shadow-lg"
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

export default Collaboration;
