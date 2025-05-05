export default function WorkExperience() {
    const experiences = [
        {
            title: 'Frontend Developer at XYZ Corp',
            description:
                'Worked on building responsive UIs using React and Tailwind CSS. Collaborated closely with backend teams.',
        },
        {
            title: 'UI Designer at ABC Ltd',
            description:
                'Designed interactive prototypes and worked on improving UX for enterprise dashboards.',
        },
        {
            title: 'Software Engineer at 123 Inc',
            description:
                'Developed internal tools using React, improved performance and reduced load times by 30%.',
        },
    ];

    // need to have the height set smaller than the vh height for smaller screens, and then set the overflow to scroll
    // Experience Section

    return (
        <section
            id="experience"
            className="h-screen w-full flex items-center justify-center snap-start px-6 bg-primary-background-light dark:bg-primary-background-dark"
        >
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>

                <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col md:flex-row md:justify-between mb-2">
                            <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                            <span className="text-gray-500">2021 - Present</span>
                        </div>
                        <h4 className="text-primary-600 mb-4">Tech Innovations Inc.</h4>
                        <p className="text-gray-700">
                            Led development of enterprise SaaS platform. Implemented modern React
                            architecture with Redux state management. Improved performance by 40%
                            through code optimization and lazy loading strategies.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col md:flex-row md:justify-between mb-2">
                            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                            <span className="text-gray-500">2018 - 2021</span>
                        </div>
                        <h4 className="text-primary-600 mb-4">Digital Solutions Co.</h4>
                        <p className="text-gray-700">
                            Developed and maintained multiple client websites and web applications.
                            Worked with React, Node.js, and MongoDB to deliver full-stack solutions.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col md:flex-row md:justify-between mb-2">
                            <h3 className="text-xl font-semibold">Junior Developer</h3>
                            <span className="text-gray-500">2016 - 2018</span>
                        </div>
                        <h4 className="text-primary-600 mb-4">WebTech Startup</h4>
                        <p className="text-gray-700">
                            Started as intern and grew into junior developer role. Assisted senior
                            developers in implementing frontend features using React and CSS
                            frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
