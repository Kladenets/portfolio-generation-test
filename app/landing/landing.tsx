import React, { useState } from 'react';
import WorkExperience from './components/workExperience';

// Note: In a real project, you would customize these colors in your tailwind.config.js file
// This is a representation of how you would use those themed colors

const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="font-sans text-gray-800 bg-primary-background-light dark:bg-primary-background-dark">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white bg-opacity-90 shadow-md z-50 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-primary-600">JohnDev</div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none text-primary-600"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex space-x-10">
                        <a
                            href="#overview"
                            className="hover:text-primary-600 transition duration-300"
                        >
                            Overview
                        </a>
                        <a
                            href="#experience"
                            className="hover:text-primary-600 transition duration-300"
                        >
                            Experience
                        </a>
                        <a
                            href="#skills"
                            className="hover:text-primary-600 transition duration-300"
                        >
                            Skills
                        </a>
                        <a href="#links" className="hover:text-primary-600 transition duration-300">
                            Links
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-primary-600 transition duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden py-4 bg-white">
                        <a
                            href="#overview"
                            className="block py-2 hover:text-primary-600"
                            onClick={toggleMenu}
                        >
                            Overview
                        </a>
                        <a
                            href="#experience"
                            className="block py-2 hover:text-primary-600"
                            onClick={toggleMenu}
                        >
                            Experience
                        </a>
                        <a
                            href="#skills"
                            className="block py-2 hover:text-primary-600"
                            onClick={toggleMenu}
                        >
                            Skills
                        </a>
                        <a
                            href="#links"
                            className="block py-2 hover:text-primary-600"
                            onClick={toggleMenu}
                        >
                            Links
                        </a>
                        <a
                            href="#contact"
                            className="block py-2 hover:text-primary-600"
                            onClick={toggleMenu}
                        >
                            Contact
                        </a>
                    </div>
                )}
            </nav>

            {/* Main content with scroll snap */}
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                {/* Overview Section */}
                <section
                    id="overview"
                    className="h-screen w-full flex items-center justify-center snap-start px-6 bg-gradient-to-br from-primary-50 to-secondary-50"
                >
                    <div className="max-w-4xl text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
                        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
                            Senior Software Engineer
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-8">
                            Passionate software developer with expertise in modern web technologies.
                            Specializing in building scalable applications with React, Node.js, and
                            cloud infrastructure.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#contact"
                                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                            >
                                Get in touch
                            </a>
                            <a
                                href="#experience"
                                className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 px-6 rounded-lg transition duration-300"
                            >
                                View my work
                            </a>
                        </div>
                    </div>
                </section>

                <WorkExperience />

                {/* Skills Section */}
                <section
                    id="skills"
                    className="h-screen w-full flex items-center justify-center snap-start px-6 bg-primary-background-light dark:bg-primary-background-dark"
                >
                    <div className="max-w-4xl w-full">
                        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">React</span>
                                            <span>95%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary-600 h-2 rounded-full"
                                                style={{ width: '95%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">
                                                JavaScript / TypeScript
                                            </span>
                                            <span>90%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary-600 h-2 rounded-full"
                                                style={{ width: '90%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">
                                                CSS / Tailwind / SASS
                                            </span>
                                            <span>85%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary-600 h-2 rounded-full"
                                                style={{ width: '85%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">Node.js / Express</span>
                                            <span>85%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary-600 h-2 rounded-full"
                                                style={{ width: '85%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">MongoDB / SQL</span>
                                            <span>80%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary-600 h-2 rounded-full"
                                                style={{ width: '80%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">AWS / Docker</span>
                                            <span>75%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary-600 h-2 rounded-full"
                                                style={{ width: '75%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    Git
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    CI/CD
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    Jest
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    RESTful APIs
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    GraphQL
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    Redux
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    Agile/Scrum
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    UI/UX Design
                                </span>
                                <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                                    Responsive Design
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Links Section */}
                <section
                    id="links"
                    className="h-screen w-full flex items-center justify-center snap-start px-6 bg-gradient-to-br from-primary-50 to-secondary-50"
                >
                    <div className="max-w-4xl w-full">
                        <h2 className="text-3xl font-bold mb-12 text-center">Projects & Links</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <a
                                href="#"
                                className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                                <p className="text-gray-600 mb-4">
                                    A full-featured online store with cart functionality, payment
                                    processing, and inventory management.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                        React
                                    </span>
                                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                        Redux
                                    </span>
                                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                        Node.js
                                    </span>
                                </div>
                                <div className="flex items-center text-primary-600">
                                    <span>View Project</span>
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                                <p className="text-gray-600 mb-4">
                                    A collaborative task manager with real-time updates, user
                                    permissions, and file sharing.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                        React
                                    </span>
                                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                        Firebase
                                    </span>
                                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                        Tailwind
                                    </span>
                                </div>
                                <div className="flex items-center text-primary-600">
                                    <span>View Project</span>
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    id="contact"
                    className="h-screen w-full flex items-center justify-center snap-start px-6 bg-primary-background-light dark:bg-primary-background-dark"
                >
                    <div className="max-w-4xl w-full">
                        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="mt-12">
                                <h3 className="text-xl font-semibold mb-6 text-center">
                                    Find Me Online
                                </h3>
                                <div className="flex justify-center space-x-6">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-primary-600 transition duration-300"
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-primary-600 transition duration-300"
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-primary-600 transition duration-300"
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-primary-600 transition duration-300"
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <svg
                                                className="w-6 h-6 text-primary-600 mr-3 mt-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                            <div>
                                                <p className="font-medium">Email</p>
                                                <p className="text-gray-600">kkent908@gmail.com</p>
                                            </div>
                                        </div>

                                        {/* <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+1 (267) 824-0296</p>
                      </div>
                    </div> */}

                                        <div className="flex items-start">
                                            <svg
                                                className="w-6 h-6 text-primary-600 mr-3 mt-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                ></path>
                                            </svg>
                                            <div>
                                                <p className="font-medium">Location</p>
                                                <p className="text-gray-600">
                                                    Philadelphia Suburbs, PA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Availability</h3>
                                    <p className="text-gray-700 mb-2">
                                        Currently available for freelance projects and full-time
                                        opportunities.
                                    </p>
                                    <p className="text-gray-700">
                                        Preferred work: Frontend development, React applications,
                                        and UI/UX implementation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 text-white text-center py-6 px-6">
                    <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
                    <p className="text-sm text-gray-400 mt-1">Made with React & Tailwind CSS</p>
                </footer>
            </div>
        </div>
    );
};

export default Landing;
