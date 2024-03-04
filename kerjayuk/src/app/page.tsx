"use client"

import dayjs from "dayjs";
import Image from "next/image";
import { getPartOfDay } from "../utils/timeParse";
import Card from "./components/card";
import { fetcher } from "../utils/swr"
import useSWR from 'swr'
import NavMenu from "./components/navMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import idLocale from 'dayjs/locale/id'

type props = {

}


export default function Home({ }) {
  // mock data for example purpose ===
  const { data, error } = useSWR('https://dummyjson.com/users', fetcher)
  const newsData = data?.users?.slice(0, 3)
  const user = data?.users[0]
  // ===

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <div className="overflow-auto  h-screen" >
      <main >
        <div className="flex flex-col pt-6 ">
          <div className="flex justify-between items-center mx-5">
            <Image className="-ml-3" src={`/kerjayuk-logo.png`} alt="" width={120} height={20} />
            <a href="/notification">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="10" viewBox="0 0 512 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path></svg>
            </a>
          </div>

          <div className="text-sm mx-5">
            Hi, Good {getPartOfDay(dayjs())}
          </div>

          <div className="mt-2 mx-5 text-white bg-gradient-to-r from-red to-purple rounded-xl p-4">
            <div className="flex gap-2">
              <img className="rounded-full" src={'https://picsum.photos/60'} alt="" />

              <div className="flex justify-between w-full">
                <div>
                  <p className="font-extrabold text-sm">{user?.firstName}</p>
                  <p className="text-xs text italic font-light">{user?.company?.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text italic font-light">Member since</p>
                  <p className="font-extrabold text-sm">{dayjs(user?.birthDate).format("DD MMM YYYY")}</p>
                </div>
              </div>

            </div>

            <div className="mt-3 flex justify-between ">
              <div className="text-xs font-light flex flex-col">
                Location
                <p className="font-extrabold text-sm">{user?.address?.city}</p>
              </div>
              <p className="text-xs italic font-light items-end flex">ICO</p>
            </div>
          </div>

          <p className="mt-5  font-bold mx-5">{`Today's activity`}</p>

          <div className="flex justify-between px-3 pt-2 mx-5">
            <div className="flex flex-col items-center">
              <svg className="mb-2" stroke="red" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12h-3.5"></path><path d="M12 7v5"></path></svg>
              <p className="font-bold text-sm">08:30</p>
              <p className="text-xs font-light">Check In</p>
            </div>

            <div className="flex flex-col items-center">
              <svg stroke="red" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12h-3.5"></path><path d="M12 7v5"></path></svg>
              <p className="font-bold text-lg text-red  ">03:00:00</p>
              <p className="text-xs font-light">Working Hours In</p>
            </div>

            <div className="flex flex-col items-center">
              <svg className="mb-2" stroke="red" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12v3.5"></path><path d="M12 7v5"></path></svg>
              <p className="font-bold text-sm ">--:--</p>
              <p className="text-xs font-light">Check Out</p>
            </div>

          </div>

          <p className="mt-5 mx-5 font-bold">PCS News</p>
          <Slider {...settings} className="flex m-0 p-0 w-full adjust">
            {newsData?.map((el: any, index: number) =>
              <div key={el.firstName} className="" >
                <Card className=" py-3 h-40 overflow-hidden">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 font-semibold">
                      <img className="bg-red rounded-full border-2 border-white" src={el.image} alt="" style={{ height: '37px' }} />
                      <p className="text-red">
                        {el.firstName}
                      </p>
                    </div>
                    <div className="text-right text-xs ">
                      <div>
                        {dayjs(el.birthDate).locale(idLocale).format('dddd')}
                      </div>
                      <div>
                        {dayjs(el.birthDate).format("DD MMM YYYY")}
                      </div>
                    </div>
                  </div>
                  {el.userAgent}
                </Card>
              </div>
            )}
          </Slider>

          <p className="mt-7 mx-5 font-bold">Online</p>
          <Card className="flex mx-5 mb-28" >
            {data?.users?.slice(0, 10)?.map((el: any, index: number) =>
              <div style={{ zIndex: index }} key={el.firstName} className="-ml-2 text-center flex flex-col">
                <img className="bg-red rounded-full border-2 border-white" src={el.image} alt="" style={{ height: '37px' }} />
                <p className="" style={{ fontSize: '6px' }}>
                  <span className="text-semibold">
                    {el?.firstName}
                  </span>
                  <br />
                  {/* {el?.company?.department} */}
                </p>
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
