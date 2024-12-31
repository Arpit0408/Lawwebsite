import React from 'react';

const Highlights = () => {
  const highlights = [
    {
      title: 'Years of Experience',
      content: 'Over 14 years in the legal field',
    },
    {
      title: 'Specialization',
      content: 'Civil Property Law and Criminal Defence',
    },
    {
      title: 'Client-Centered Approach',
      content: 'Prioritizing the needs and goals of clients',
    },
    {
      title: 'Proven Track Record of Success',
      content: 'A history of favorable outcomes for clients',
    },
  ];

  return (
    <div className="bg-[gray-100] dark:bg-[#0b1727] mt-10 px-10">

    {/* <div className="p-6 bg-gray-100 rounded-lg shadow-md"> */}
      <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
      <ul className="space-y-4 mb-10">
        {highlights.map((highlight, index) => (
          <li key={index} className="p-4 bg-[#FFFFFF01] border dark:text-white border-gray-200 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800  dark:text-white">{highlight.title}</h3>
            <p className="text-gray-600  dark:text-white">{highlight.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
