import Image from "next/image";
import React, { useMemo } from "react";



const Provide = () => {
 
    
const features = [
    "Software development.",
    "IT Security.",
    "Cloud Solutions",
    "Business Intelligence"
  ]

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4" >
            <Image
              src="/img/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div>

        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" >
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Services You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the services that we provide with fun and have their
            own functions with each service.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <li
                className="relative circle-check custom-list"
                // custom={{duration: 2 + index}}
                // variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </li>
              )
            )}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
