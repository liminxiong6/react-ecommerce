import api from "../api/api";
import { authActions } from "./auth-slice";

export const authenticateSignInUser =
    (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
        try {
            setLoader(true);
            const { data } = await api.post("/auth/signin", sendData);
            dispatch(authActions.loginUser(data)); // udpate redux state
            localStorage.setItem("auth", JSON.stringify(data));
            reset();
            toast.success("Login Success");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message || "Internal Server Error");
        } finally {
            setLoader(false);
        }
    };
