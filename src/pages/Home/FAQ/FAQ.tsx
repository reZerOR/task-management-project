import Container from "../../../sharedComponents/Container";


const FAQ = () => {
    return (
      <Container>
          <section className="dark:bg-gray-800 dark:text-gray-100 font-stylish">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p>
            <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">What is Taskflow?</summary>
                    <div className="px-4 pb-4">
                        <p>Taskflow is a productivity platform designed to help individuals and teams manage tasks, streamline workflows, and improve overall efficiency.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline"> How can I create a new task?</summary>
                    <div className="px-4 pb-4">
                        <p>To create a new task, log in to your Taskflow account, navigate to the Taskboard, and click on the "Create Task" button. Fill in the task details and save to create a new task.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline"> Is Taskflow suitable for teams?</summary>
                    <div className="px-4 pb-4 space-y-2">
                         <p>Yes, Taskflow is ideal for teams. It offers collaboration features, allowing team members to share tasks, update statuses, and work together seamlessly.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">  How do I track the progress of my tasks?</summary>
                    <div className="px-4 pb-4 space-y-2">
                         <p>Taskflow provides a comprehensive task dashboard where you can track the status and progress of all your tasks. </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline"> Is Taskflow accessible on mobile devices?</summary>
                    <div className="px-4 pb-4 space-y-2">
                         <p>Yes, Taskflow is responsive and can be accessed on various devices, including smartphones and tablets, making it convenient for on-the-go task management.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline"> Is Taskflow suitable for teams?</summary>
                    <div className="px-4 pb-4 space-y-2">
                         <p>Yes, Taskflow is ideal for teams. It offers collaboration features, allowing team members to share tasks, update statuses, and work together seamlessly.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>
      </Container>
    );
};

export default FAQ;