import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 flex h-[70px] items-center bg-(image:--custom-gradient) text-white">
            <div className="flex w-full justify-between px-4 sm:px-8 lg:px-14">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr-2 text-3xl" />
                    <span className="font-[Poppins]">E-Shop</span>
                </Link>
                <ul
                    className={`absolute top-[70px] left-0 flex text-slate-800 shadow-md sm:static sm:items-center sm:shadow-none ${
                        navbarOpen
                            ? "h-fit pb-5 sm:pb-0"
                            : "h-0 overflow-hidden"
                    } w-full flex-col bg-(image:--custom-gradient) px-4 text-white transition-all duration-100 sm:h-fit sm:w-fit sm:flex-row sm:bg-none sm:px-0`}
                >
                    <li className="border-1 border-transparent p-4 font-[500] transition-all duration-150 hover:border-white">
                        <Link
                            className={`${path === "/" ? "font-semibold text-white" : "text-gray-200"}`}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="border-1 border-transparent p-4 font-[500] transition-all duration-150 hover:border-white">
                        <Link
                            className={`${path === "/" ? "font-semibold text-white" : "text-gray-200"}`}
                            to="/products"
                        >
                            Products
                        </Link>
                    </li>
                    <li className="border-1 border-transparent p-4 font-[500] transition-all duration-150 hover:border-white">
                        <Link
                            className={`${path === "/" ? "font-semibold text-white" : "text-gray-200"}`}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li className="border-1 border-transparent p-4 font-[500] transition-all duration-150 hover:border-white">
                        <Link
                            className={`${path === "/" ? "font-semibold text-white" : "text-gray-200"}`}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="border-1 border-transparent p-4 font-[500] transition-all duration-150 hover:border-white">
                        <Link
                            className={`${path === "/" ? "font-semibold text-white" : "text-gray-200"}`}
                            to="/cart"
                        >
                            <Badge
                                showZero
                                badgeContent={0}
                                color="primary"
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                            >
                                <FaShoppingCart size={22} />
                            </Badge>
                        </Link>
                    </li>
                    <li className="border-1 border-transparent p-4 font-[500] transition-all duration-150 hover:border-white">
                        <Link
                            className={`${path === "/" ? "font-semibold text-white" : "text-gray-200"} flex items-center gap-3 rounded-lg bg-gradient-to-r from-purple-600 to-red-500 px-4 py-2 transition duration-300 ease-in-out hover:from-purple-500 hover:to-red-400`}
                            to="/login"
                        >
                            <FaSignInAlt />
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="mt-2 flex items-center sm:mt-0 sm:hidden"
                >
                    {navbarOpen ? (
                        <RxCross2 className="text-3xl text-white" />
                    ) : (
                        <IoIosMenu className="text-3xl text-white" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
