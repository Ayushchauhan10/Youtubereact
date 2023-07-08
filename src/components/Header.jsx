import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const { loading, mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`/searchResult/${searchQuery}`);
        }
    };

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden dark:md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="data:image/png;base64,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" />
                </div>
            </div>
        </div>
    );
};

export default Header;
