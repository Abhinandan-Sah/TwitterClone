import Image from "next/image";
import {Inter} from "next/font/google";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { BiBell, BiHash, BiHomeCircle, BiUser } from "react-icons/bi";

const inter = Inter({subsets: ["latin"]});

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
]

export default function Home(){
  return (
    <>
    <div className="Inter">
        <div className="grid grid-cols-12 h-screen w-screen px-56">
          <div className="col-span-3 pt-8">
            <div className="text-3xl h-fit hover:bg-gray-800 rounded-full p-2 w-fit cursor-pointer">
            <BsTwitterX  />
            </div>
            <div className="mt-4 text-2xl">
              <ul className="flex flex-col gap-y-2">
                {SidebarMenuItems.map(item=>
                  <li className="flex justify-start items-center gap-3 w-fit rounded-full px-5 py-2 cursor-pointer hover:bg-gray-800 transition-all" key={item?.title}><span>{item?.icon}</span><span>{item?.title}</span></li>
                )}
              </ul>
              <div className="flex justify-center px-4 mt-3 font-semibold">
              <button className="px-4 py-2 bg-blue-500 rounded-full w-full text-xl">Post</button>
              </div>
            </div>
          </div>
          <div className="col-span-6 border-r-2 border-l-2 border-grey">

          </div>
          <div className="col-span-3"></div>
        </div>
        </div>
    </>
  );
}
