import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/product-actions";

const useProducFilter = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const sortOrder = searchParams.get("sortby") || "asc";
    const category = searchParams.get("category") || null;
    const keyword = searchParams.get("keyword") || null;

    // http://localhost:8080/api/public/products?pageNumber=0&pageSize=10&sortBy=productId&sortOrder=dsc
    const currentPage = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;

    const params = new URLSearchParams();
    params.set("sortBy", "price");
    params.set("sortOrder", sortOrder);
    params.set("pageNumber", currentPage - 1);
    if (category) {
      params.set("category", category);
    }
    if (keyword) {
      params.set("keyword", keyword);
    }

    const queryString = params.toString();

    dispatch(fetchProducts(queryString));
  }, [dispatch, searchParams]);
};

export default useProducFilter;
