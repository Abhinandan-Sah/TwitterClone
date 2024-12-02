import Image from "next/image";
import localFont from "next/font/local";


export default function Home() {
  return (
    <>
        <div className="grid grid-cols-12 h-screen w-screen">
          <div className="col-span-3">
            <div className="">
              <Image src="/twitter-logo.png" alt="Twitter Logo" width={100} height={100} />
            </div>
          </div>
          <div className="col-span-6"></div>
          <div className="col-span-3"></div>
        </div>
    </>
  );
}
