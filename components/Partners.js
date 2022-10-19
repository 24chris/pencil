import Link from "next/link";
import ThemeChanger from "../components/DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Container from "./container";

export default function Partners() {

  return (
    
    <Container>
        <div className="flex flex-col justify-center">
          <div className="text-3xl font font-sans font-bold text-center text-black dark:text-white">
            {/* Trusted by <span className="text-indigo-600">2000+</span>{" "} */}
            Our Partners
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              
              <Image src="/img/hungerfighters.png" alt="hunger-fighters" width={130} height={100}/>
            </div>
            <div className="">
            <Image src="/img/womenprobono.png" alt="women-probono" width={130} height={100}/>
            </div>
            <div className="">
            <Image src="/img/intneeds.png" alt="intneeds" width={160} height={80}/>
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
            <Image src="/img/isu.png" width={110} alt="isu" height={100}/>
            </div>
            <div className="pt-2 ">
            <Image src="/img/maz.png" width={110} alt="maz" height={33}/>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 ">
              
              <Image src="/img/chemiphar.png" alt="chemiphar" width={110} height={33}/>
            </div>
            <div className="">
            <Image src="/img/camtech.png" alt="camtech" width={110} height={33}/>
            </div>
            
          </div>
        </div>
      </Container>
  );
}

