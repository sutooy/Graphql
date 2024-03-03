"use client"
import React, { useState } from 'react'
import { dateParse } from '../utils/timeParse'
import { formatText } from '../utils/text'
import { notifData } from '../utils/mockData'

function Notif() {

    const [selected, setSelected] = useState<any[]>([])
    const selectData = (index: number) => {
        if (selected.includes(index)) {
            setSelected(selected => selected.filter((el) => el !== index))
        } else {
            setSelected(selected => [...selected, index])
        }
    }
    return (
        <>
            <div className='flex  px-5 py-7 items-center gap-3'>
                <a href='/'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                </a>
                <div className=' text-red text-2xl font-semibold '>
                    Notification
                </div>
            </div>

            {notifData.map((el: any, index) => (
                <>
                    <div onClick={() => { selectData(index) }}
                        className={`flex justify-center gap-2 py-2 cursor-pointer ${selected.includes(index) ? "bg-blue-light" : ""}`}>

                        <div className='flex justify-center gap-2 ' style={{ width: '90%' }}>
                            <div className='relative  '>
                                <div className='flex rounded-lg h-12 w-12 items-center justify-center bg-gradient-to-r from-red to-purple '>
                                    {el.title === "Reimbursement" ?
                                        <svg stroke="white" fill="gold" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path></svg>
                                        : el.title === "Sickness" ? <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><g id="Pill"><path d="M19.31,4.691a5.5,5.5,0,0,0-7.78,0l-6.84,6.84a5.5,5.5,0,0,0,3.89,9.39,5.524,5.524,0,0,0,3.89-1.61l6.84-6.84a5.5,5.5,0,0,0,0-7.78Zm-.71,7.07-3.42,3.42L8.82,8.821,12.24,5.4a4.5,4.5,0,0,1,7.68,3.17A4.429,4.429,0,0,1,18.6,11.761Z"></path></g></svg>
                                            :
                                            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 256 256" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M128,44a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,44Zm0,168a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,212ZM164.49,99.51a12,12,0,0,1,0,17l-28,28a12,12,0,0,1-17-17l28-28A12,12,0,0,1,164.49,99.51ZM92,16A12,12,0,0,1,104,4h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,16Z"></path></svg>
                                    }

                                </div>
                                <div className='absolute -right-2 top-8 bg-white rounded-full'>
                                    {el.status === "success" ?
                                        <svg stroke="#00af86" fill="#00af86" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                        : el.status === "reject" ?
                                            <svg stroke="red" fill="red" stroke-width="0" version="1.2" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"></path></svg>
                                            :
                                            <svg stroke="#1f7dfa" fill="#1f7dfa" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg>
                                    }


                                </div>
                            </div>
                            <div className='w-full flex-col text-left text-sm'>
                                <div className='flex items-center justify-between'>
                                    <div className='font-bold '>
                                        {el.title}
                                    </div>
                                    <div className='text-gray text-xs'>
                                        {/* {dayjs(el.date).format("dd MM YYYY")} */}
                                        {dateParse(el.date)}
                                    </div>
                                </div>
                                <div className=''>
                                    {formatText(el.message)}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}

export default Notif
