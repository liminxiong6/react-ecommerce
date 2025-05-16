import { Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import Backdrop from "./Backdrop";

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { user } = useSelector((state) => state.auth);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logoutHandler = () => {};

    return (
        <div>
            <div
                onClick={handleClick}
                className="flex cursor-pointer items-center gap-1 rounded-full transition hover:shadow-md sm:border-[1px] sm:border-slate-400"
            >
                <Avatar alt="Menu" src="" />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                    sx: { width: 160 },
                }}
            >
                <Link to="/profile">
                    <MenuItem onClick={handleClose} className="flex gap-2">
                        <BiUser className="text-xl" />
                        <span className="mt-1 text-[16px] font-bold">
                            {user?.username}
                        </span>
                    </MenuItem>
                </Link>
                <Link to="/order">
                    <MenuItem onClick={handleClose} className="flex gap-2">
                        <FaShoppingCart className="text-xl" />
                        <span className="mt-1 text-[16px] font-bold">
                            Order
                        </span>
                    </MenuItem>
                </Link>
                <MenuItem onClick={logoutHandler} className="flex gap-2">
                    <div className="flex w-full items-center gap-2 rounded-md bg-(image:--custom-gradient1) px-4 py-1 font-semibold text-white">
                        <IoExitOutline className="text-xl" />
                        <span className="mt-1 text-[16px] font-bold">
                            Logout
                        </span>
                    </div>
                </MenuItem>
            </Menu>
            {open && <Backdrop />}
        </div>
    );
};

export default UserMenu;
