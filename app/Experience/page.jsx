import React from 'react';
import experience from '../../../experience'

const Page = () => {
  return (
    <div className=' flex gap-4 p-4'>
      {Object.keys(experience).map((companyKey, index) => (
        <div key={index} className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-green-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h2 className=' text-3xl'>{experience[companyKey].name}</h2>
          <p className=' text-xl'> {experience[companyKey].position}</p>
          <p className=' font-bold'>Start Date: {experience[companyKey].startDate}</p>
          <p className=' font-bold'>End Date: {experience[companyKey].endDate}</p>
          <h3 className=' font-semibold'>Responsibilities:</h3>
          <ul>
            {experience[companyKey].responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Page;
