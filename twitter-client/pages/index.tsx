import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { BiBell, BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";


interface TwitterSidebarButton{
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title:'Home',
    icon: <BiHomeCircle />
  },
  {
    title:'Explore',
    icon: <BiHash />
  },
  {
    title:'Notification',
    icon: <BsBell />
  },
  {
    title:'Messages',
    icon: <BsEnvelope />
  },
  {
    title:'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title:'Profile',
    icon: <BiUser />
  },
  {
    title:'Profile',
    icon: <BiUser />
  },
  {
    title:'Profile',
    icon: <BiUser />
  }
]

export default function Home(){
  return (
    <>
        <div className="grid grid-cols-12  h-screen w-screen px-56">
          <div className="col-span-3 pt-8">
            <div className="text-3xl h-fit hover:bg-gray-800 rounded-full p-2 w-fit cursor-pointer">
            <BsTwitterX  />
            </div>
            <div className="mt-4 text-2xl">
              <ul className="flex flex-col gap-y-2">
                {SidebarMenuItems.map(item=>
                  <li className="flex justify-start items-center gap-3 w-fit rounded-full px-2 py-2 cursor-pointer hover:bg-gray-800 transition-all" key={item?.title}><span>{item?.icon}</span><span>{item?.title}</span></li>
                )}
              </ul>
              <div className="flex justify-center px-4 mt-3 font-semibold">
              <button className="px-4 py-2 bg-blue-500 rounded-full w-full text-xl">Post</button>
              </div>
            </div>
          </div>
          <div className="col-span-5 border-r-[1px] border-l-[1px] border-t-0 border border-gray-600">
                <FeedCard />
                <FeedCard />
                <FeedCard />
          </div>
          <div className="col-span-3"></div>
        </div>
    </>
  );
}
