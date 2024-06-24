import React from 'react'
import { getskills } from '../../sanity/lib/client'
import Image from 'next/image';

const Skills = async() => {
  const skills = await getskills().then((skillsData) =>
  skillsData.sort((a, b) => {
    const dateA = new Date(a._updatedAt).getTime(); // Convert to milliseconds
    const dateB = new Date(b._updatedAt).getTime(); // Convert to milliseconds
    return dateA - dateB; // Subtract to get the difference in milliseconds
  })
);

  return(
<div className=' bg-slate-100 mt-20 pt-6'>
<h1 className='text-black font-bold text-4xl pl-12 pb-4 '>
My Toolbox & Things I can do</h1>
<p className='pl-12 text-base'>THE SKILLS, TOOLS AND TECHNOLOGIES I USE TO BRING YOUR PRODUCTS TO LIFE</p>
<div className="grid grid-cols-2 grid-rows-7 md:grid-cols-3 lg:grid-cols-7 lg:grid-rows-2 gap-2 justify-center items-center text-center p-6 mt-2 bg-slate-100">
      {skills.map((skill) => (
        <div key={skill._id} 
        className="flex flex-col justify-center items-center">
          <div>
            <Image src={skill.image} 
            alt={skill.name} 
            width={100} 
            height={100} 
            /> 
          </div>
          <div>
            <p className='text-lg font-bold pt-2'>{skill.name}</p>
          </div>
        </div>
    ))}
  </div>
  </div>  
  )}
export default Skills

