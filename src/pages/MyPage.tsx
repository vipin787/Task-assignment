// import { Link } from 'react-router-dom';
// interface BreadcrumbProps {
//   pageName: string;


// }

import DefaultLayout from "../layout/DefaultLayout";
import TableOne from "../components/TableOne"
import Header from "../components/Header";
import { useState } from "react";
import DropdownUser from "../components/DropdownUser";
import DropdownMessage from "../components/DropdownMessage";
import DropdownNotification from "../components/DropdownNotification";
import { Link } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineStock ,AiOutlineFileZip} from "react-icons/ai";
import { GoMailRead } from "react-icons/go";
import { CiBadgeDollar } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { BiCube,BiUserCircle } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { RiBugLine } from "react-icons/ri";
import { FaShippingFast, FaTelegramPlane } from "react-icons/fa";
import { SiOpencontainersinitiative } from "react-icons/si";

const MyPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
                <div className="flex flex-grow items-center justify-between px-4 shadow-2 md:px-6 2xl:px-11">
                    <div className="flex items-center">
                        <ul className="flex items-center">
                            {/* <!-- Notification Menu Area --> */}
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <AiOutlineDashboard />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <GoMailRead />
                                    Mailbox
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <CiBadgeDollar />
                                    Sales
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <BsCart4 />
                                    Purchase
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <AiOutlineStock />
                                    Stock
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <FaShippingFast />
                                    Shipment
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <FaTelegramPlane />
                                    Booking
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <SiOpencontainersinitiative />
                                    Containers
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <BiCube />
                                    Products
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <TbUsers />
                                    Customers
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <RiBugLine />
                                    Partners
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <BiUserCircle />
                                    Contacts
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    to="#"
                                    className="relative flex items-center justify-center text-black text-xs py-1 px-2 gap-2 border-y border-[#EFF4FB] border-r border-[#EFF4FB] hover:text-primary"
                                >
                                    <AiOutlineFileZip />
                                    Reports
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default MyPage;