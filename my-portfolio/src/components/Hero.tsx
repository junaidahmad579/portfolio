"use client";
import React from "react";
import { Boxes} from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils";
import { getPortfolio } from "../../sanity/lib/client";
import { TypewriterEffectHeading } from "./NameHeading";
import Image from "next/image";

export default async function Hero() {
    const portfolio = await getPortfolio();

  return (
    <div className="h-200 relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}


{portfolio.map((portfolio)=>(
          
          <div key={portfolio._id}
          className={cn('w-full flex flex-col lg:flex-row justify-between items-center content-start mt-20 pl-32 pr-28 relative z-20')}
          >
            <div>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-extrabold text-black text-start relative z-20'> Hi, I'm <span className='text-indigo-500'>{portfolio.name}</span></h1> 
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

    </div>
  );
}
