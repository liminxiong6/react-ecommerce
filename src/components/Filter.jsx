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
import { useSearchParams } from "react-router-dom";

const Filter = ({ categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Derived from URL
  const category = searchParams.get("category") || "all";
  const sortOrder = searchParams.get("sortby") || "asc";
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("keyword") || "",
  );

  // when keyword change, timeout give use some time to typing before navigate the url
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams((prevParams) => {
        if (searchTerm) {
          prevParams.set("keyword", searchTerm); // <-- append key-value pair
        } else {
          prevParams.delete("keyword");
        }
        return prevParams;
      });
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, setSearchParams]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSearchParams((prevParams) => {
      if (selectedCategory === "all") {
        prevParams.delete("category"); // <-- append key-value pair
      } else {
        prevParams.set("category", selectedCategory);
      }
      return prevParams;
    });
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSearchParams((prevParams) => {
      prevParams.set("sortby", newOrder);
      return prevParams;
    });
  };

  const handleClearFilters = () => {
    setSearchParams();
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
              <MenuItem key={item.categoryId} value={item.categoryName}>
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
