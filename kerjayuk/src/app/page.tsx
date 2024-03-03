"use client"

import dayjs from "dayjs";
import Image from "next/image";
import { getPartOfDay } from "./utils/timeParse";
import Card from "./components/card";
import { fetcher } from "./utils/swr"
import useSWR from 'swr'
import NavMenu from "./components/navMenu";

type props = {

}

const getAllUser = async () => {

  try {
    const res = await fetch('https://dummyjson.com/users')
    console.log(res.json())
    // return res.json()
  } catch (error) {
    return new Error('Failed to fetch data')
  }
}


export default function Home({ }) {
  const { data, error } = useSWR('https://dummyjson.com/users', fetcher)
  console.log(data)

  return (
    <div className=" h-screen" >
      <main >
        <div className="flex flex-col pt-6 px-5">
          <div className="flex justify-between items-center">
            <Image className="-ml-3" src={`/kerjayuk-logo.png`} alt="" width={120} height={20} />
            <a href="/notification">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="10" viewBox="0 0 512 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path></svg>
            </a>
          </div>

          <div className="text-sm">
            Hi, Good {getPartOfDay(dayjs())}
          </div>

          <div className="mt-2 text-white bg-gradient-to-r from-red to-purple w-full rounded-xl p-4">
            <div className="flex gap-2">
              <img className="rounded-full" src={'https://picsum.photos/60'} alt="" />

              <div className="flex justify-between w-full">
                <div>
                  <text className="font-extrabold text-sm">Tabay</text>
                  <p className="text-xs text italic font-light">UI/UX Designer</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text italic font-light">Member since</p>
                  <text className="font-extrabold text-sm">01 Juni 2021</text>
                </div>
              </div>

            </div>

            <div className="mt-3 flex justify-between ">
              <div className="text-xs font-light flex flex-col">
                Location
                <text className="font-extrabold text-sm">Kantor Sahid</text>
              </div>
              <p className="text-xs italic font-light items-end flex">ICO</p>
            </div>
          </div>

          <text className="mt-5 ml-2 font-bold">{`Today's activity`}</text>

          <div className="flex justify-between px-3 pt-2">
            <div className="flex flex-col items-center">
              <svg className="mb-2" stroke="red" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12h-3.5"></path><path d="M12 7v5"></path></svg>
              <text className="font-bold text-sm">08:30</text>
              <p className="text-xs font-light">Check In</p>
            </div>

            <div className="flex flex-col items-center">
              <svg stroke="red" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12h-3.5"></path><path d="M12 7v5"></path></svg>
              <text className="font-bold text-lg text-red  ">03:00:00</text>
              <p className="text-xs font-light">Working Hours In</p>
            </div>

            <div className="flex flex-col items-center">
              <svg className="mb-2" stroke="red" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12v3.5"></path><path d="M12 7v5"></path></svg>
              <text className="font-bold text-sm ">--:--</text>
              <p className="text-xs font-light">Check Out</p>
            </div>

          </div>

          <text className="mt-5  font-bold">PCS News</text>

          <text className="mt-5  font-bold">Online</text>
          <Card className="flex " >
            {data?.users?.slice(0, 10)?.map((el: any, index: number) =>
              <div style={{ zIndex: index }} key={el.firstName} className="-ml-2 text-center">
                <img className="bg-red rounded-full border-2 border-white" src={el.image} alt="" style={{ height: '37px' }} />
                <text className="" style={{ fontSize: '6px' }}>
                  {el?.firstName} <br />
                  {el?.company?.department}
                </text>
              </div>
            )}
            {data?.users &&
              <div style={{ height: '37px', width: '37px', fontSize: '10px', lineHeight: 'normal' }} className="flex items-center justify-center text-center bg-red rounded-full border-2 border-white  text-white z-40 -ml-3">
                {data?.users?.length - 10} <br />
                more
              </div>
            }
          </Card>

        </div>

      </main>
      <NavMenu className="absolute max-w-sm bottom-0" />


    </div>
  );
}
{/* <a
href="/notification"
className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// target="_blank"
rel="noopener noreferrer"
> */}
