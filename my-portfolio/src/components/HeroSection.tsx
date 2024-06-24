import React from 'react'
import { getPortfolio } from '../../sanity/lib/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { TypewriterEffectHeading } from './NameHeading';



const HeroSection = async() => {
    const portfolio = await getPortfolio();
    return (
      <> 
        {portfolio.map((portfolio)=>(
          
          <div key={portfolio._id}
          className='w-full flex flex-col lg:flex-row justify-between items-center content-start mt-20 pl-28 pr-28'
          >
            <div>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-extrabold text-black text-start'> Hi, I'm <span className='text-indigo-500'>{portfolio.name}</span></h1> 
            {/* <PortableText value={portfolio.content}/> */}
            <TypewriterEffectHeading/>
            </div>
            
            <div>
                <Image
                src={portfolio.image}
                alt={portfolio.name}
                width={400}
                height={400}
                />
            
            </div>
          </div>
        ))}
      </>
    );}

export default HeroSection 