import Image from "next/image";
import React from "react";

const FeedCard: React.FC = () => {
  return (
  <>
  <div className="border border-gray-600 border-r-0 border-l-0 border-b-0 p-4 hover:bg-slate-900 transition-all cursor-pointer">
  <div className="grid grid-cols-12 gap-3">
    <div className="col-span-1">
        <Image src={"https://avatars.githubusercontent.com/u/118913466?v=4"} width={50} height={50} className="rounded-full" alt="user-image" />
    </div>
    <div className="col-span-11">
        <h5 className="font-bold">Avi</h5>
        <p>Hey, I am Avi. I am a full stack developer. I am currently working on a project called Twitter-Client</p>
    </div>
  </div>
  </div>
  </>)
};

export default FeedCard;