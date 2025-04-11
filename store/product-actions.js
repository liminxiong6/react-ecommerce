import api from "../src/api/api";
import { productActions } from "./product-slice";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get("/public/products");
      dispatch(
        productActions.replaceProducts({
          products: data.content,
          pageNumber: data.pageNumber,
          pageSize: data.pageSize,
          totalElements: data.totalElements,
          lastPage: data.lastPage,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
};
