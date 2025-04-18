import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Tooltip,
    Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

// http://localhost:xxxx?keyword=television&sortby=desc
const Filter = ({ categories }) => {
    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const currentCategory = searchParams.get("category") || "all";
        const currentSortOrder = searchParams.get("sortby") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";

        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    }, [searchParams]);

    // when keyword change, timeout give use some time to typing before navigate the url
    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchTerm) {
                searchParams.set("keyword", searchTerm);
            } else {
                searchParams.delete("keyword");
            }

            navigate(`${pathname}?${searchParams.toString()}`);
        }, 700);

        return () => {
            clearTimeout(handler);
        };
    }, [searchParams, searchTerm, navigate, pathname]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory === "all") {
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }

        navigate(`${pathname}?${params}`);
        setCategory(selectedCategory);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => {
            const newOrder = prevOrder === "asc" ? "desc" : "asc";
            params.set("sortby", newOrder);
            navigate(`${pathname}?${params}`);
            return newOrder;
        });
    };

    const handleClearFilters = () => {
        navigate({ pathname: window.location.pathname });
    };

    return (
        <div className="justify-enter flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between">
            {/* Search Bar */}
            <div className="relative flex items-center sm:w-[420px] 2xl:w-[450px]">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="broder-gray-400 w-full rounded-md border py-2 pr-4 pl-10 text-slate-800 focus:ring-1 focus:ring-[#1976d2] focus:outline-none"
                />
                <FiSearch className="size={20} absolute left-3 text-slate-800" />
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
                {/* Categories Select */}
                <FormControl
                    variant="outlined"
                    size="small"
                    className="border-slate-700 text-slate-800"
                >
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                        className="min-w-[120px] border-slate-700 text-slate-800"
                    >
                        <MenuItem value="all">All</MenuItem>
                        {categories.map((item) => (
                            <MenuItem
                                key={item.categoryId}
                                value={item.categoryName}
                            >
                                {item.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* Sort Button*/}
                <Tooltip title={`Sorted by price: ${sortOrder}`}>
                    <Button
                        variant="contained"
                        color="primary"
                        className="flex h-10 items-center gap-2"
                        onClick={toggleSortOrder}
                    >
                        Sort By
                        {sortOrder === "asc" ? (
                            <FiArrowUp size={20} />
                        ) : (
                            <FiArrowDown size={20} />
                        )}
                    </Button>
                </Tooltip>
                <button
                    className="flex cursor-pointer items-center gap-2 rounded-md bg-rose-800 px-3 py-2 text-white shadow-md transition-all duration-300 ease-in hover:bg-rose-900 hover:shadow-lg focus:outline-none"
                    onClick={handleClearFilters}
                >
                    <FiRefreshCw className="font-semibold" size={16} />
                    <span className="font-semibold">Clear Filter</span>
                </button>
            </div>
        </div>
    );
};

export default Filter;
