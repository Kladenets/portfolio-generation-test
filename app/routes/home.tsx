import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import Landing from '~/landing/landing';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'New React Router App' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

import React, { useState } from 'react';

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

function WorkExperience() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="border-b border-gray-300 py-4">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center text-left md:cursor-default"
                    >
                        <span className="text-lg font-semibold">{exp.title}</span>
                        {/* Show arrow only on mobile */}
                        <span
                            className="md:hidden transform transition-transform duration-300"
                            style={{
                                transform:
                                    activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        >
                            ▼
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out text-gray-700 ${
                            activeIndex === index ? 'max-h-40 mt-2' : 'max-h-0'
                        } md:max-h-full md:mt-2 md:block`}
                    >
                        <p>{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Home() {
    return <WorkExperience />;
    return <Landing />;
}
