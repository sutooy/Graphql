import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

type props = {
    children?: ReactNode;
    className?: string
}

function NavMenu({ children, className }: props) {
    const pathname = usePathname()

    return (
        <div className={`${className} font-semibold py-2 bg-white z-50 flex justify-between w-full`}
            style={{
                boxShadow: '0px -3px 5px #d9d9d9 '
            }}
        >
            <div className={`flex justify-evenly w-full`}>
                <a href='/' className={`${pathname === "/" ? "text-red" : "text-gray"} text-xs  items-center text-center flex flex-col justify-center`}>
                    <svg stroke="currentColor" fill='currentColor' stroke-width="0" viewBox="0 0 16 16" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"></path><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"></path></svg>
                    Home
                </a>
                <a href='/Attendance' className={`${pathname === "Attendance" ? "text-red" : "text-gray"} text-xs  items-center text-center flex flex-col justify-center`}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                    Attendance
                </a>
            </div>

            <div className='text-red -mt-12 mb-2 w-1/2 flex flex-col items-center justify-center'>
                <div className='bg-red rounded-full w-full h-full flex items-center justify-center'>
                    <svg className='' stroke="white" fill="white" stroke-width="0" viewBox="0 0 576 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"></path></svg>
                </div>
                <text className='text-xs -mb-2 '>
                    check-out
                </text>
            </div>

            <div className={`flex justify-evenly w-full text-xs`}>
                <a href='/Form' className={`${pathname === "Form" ? "text-red" : "text-gray"} items-center text-center flex flex-col justify-center`}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M439.91 112h-23.82a.09.09 0 0 0-.09.09V416a32 32 0 0 0 32 32 32 32 0 0 0 32-32V152.09A40.09 40.09 0 0 0 439.91 112z"></path><path d="M384 416V72a40 40 0 0 0-40-40H72a40 40 0 0 0-40 40v352a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 1.15-1.15 1.14 1.14 0 0 0-.85-1.1A64.11 64.11 0 0 1 384 416zM96 128a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 400zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 336zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 272zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 208zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 144z"></path></svg>
                    Form
                </a>
                <a href='/Setting' className={`${pathname === "/Setting" ? "text-red" : "text-gray"} items-center text-center flex flex-col justify-center`}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor"></path></svg>
                    Setting
                </a>
            </div>
        </div>
    )
}

export default NavMenu