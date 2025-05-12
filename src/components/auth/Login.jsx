import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import InputField from "../shared/InputField";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { authenticateSignInUser } from "../../store/auth-actions";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onTouched" });

    const loginHandler = async (data) => {
        dispatch(
            authenticateSignInUser(data, toast, reset, navigate, setLoader),
        );
    };

    return (
        <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="shadow-custom w-[360px] rounded-md px-4 py-8 sm:w-[450px] sm:px-8"
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <AiOutlineLogin className="text-5xl text-slate-800" />
                    <h1 className="font-montserrat text-center text-2xl font-bold text-slate-800 lg:text-3xl">
                        Login Here
                    </h1>
                </div>
                <hr className="mt-2 mb-5 text-slate-300" />
                <div className="flex flex-col gap-3">
                    <InputField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        register={register}
                        errors={errors}
                        placeholder="Enter your username"
                    />
                    <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        register={register}
                        errors={errors}
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    disabled={loader}
                    className="my-5 flex w-full items-center justify-center gap-2 rounded-md bg-(image:--custom-gradient1) py-3 font-semibold text-white transition-colors duration-100 hover:text-slate-400"
                >
                    {loader ? "Loading..." : "Login"}
                </button>
                <p className="text-center text-sm text-slate-700">
                    Don't have an account?{" "}
                    <Link className="font-semibold underline" to="/register">
                        <span className="text-custom-blue">Sign Up</span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
