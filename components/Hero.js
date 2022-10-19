import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/Illustration2.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
        <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Pencil Systems
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl dark:text-gray-300">
              Pencil systems Uganda Limited boasts a plethora of highly trained
              and creative, skilled, multi-talented, and experienced software
              Developers with a unique blend of mobile, enterprise programming,
              and design prowess.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/about-us">
              <a
                
                className="px-8 py-4 text-lg font-medium text-center text-white bg-black rounded-md "
              >
                Read more
              </a>
              </Link>
              
            </div>
          </div> 
        </div>
      </Container>
    </>
  );
}

