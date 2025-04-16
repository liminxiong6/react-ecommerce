import api from "../api/api";
import { errorActions } from "./error-slice";
import { productActions } from "./product-slice";

export const fetchProducts = (queryString) => {
  return async (dispatch) => {
    try {
      dispatch(errorActions.isFetching());
      const { data } = await api.get(`/public/products?${queryString}`);
      dispatch(
        productActions.replaceProducts({
          products: data.content,
          pageNumber: data.pageNumber,
          pageSize: data.pageSize,
          totalElements: data.totalElements,
          lastPage: data.lastPage,
        }),
      );
      dispatch(errorActions.isSuccess());
    } catch (error) {
      console.error(error);
      dispatch(
        errorActions.isError(
          error?.response?.data?.message || "Failed to fetch products",
        ),
      );
    }
  };
};
