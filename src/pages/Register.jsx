import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/common/FormRow";
import logo from "../images/logo.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/features/authSlice";
import Loader from "../components/common/Loader";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isMember: true,
};

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialState);
    const { loading, error, user } = useSelector((state) => ({ ...state.auth }));

    useEffect(() => {
        error && toast.error(error);
        if (user) {
            navigate("/");
        }
    }, [error, user, navigate]);

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember, confirmPassword } = values;
        if (!email || !password || (!isMember && !name && !confirmPassword)) {
            return;
        }
        const currentUser = { email, password };
        const newUser = { name, email, password, confirmPassword };
        if (isMember) {
            dispatch(login({ currentUser, navigate, toast }));
        } else {
            dispatch(register({ newUser, navigate, toast }));
        }
    };

    const demouseLogin = () => {
        dispatch(
            login({
                currentUser: { email: "testuser@test.com", password: "12345678" },
                navigate,
                toast,
            })
        );
    };
    const demoadminLogin = () => {
        dispatch(
            login({
                currentUser: { email: "bablu22@gmail.com", password: "bablumia" },
                navigate,
                toast,
            })
        );
    };

    return (
        <>
            <section className="flex items-center justify-center mt-40 mb-20">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="w-full max-w-md p-6 space-y-4 bg-white border rounded">
                        <form className="form" onSubmit={onSubmit}>
                            <div className="flex items-center justify-center py-5">
                                <img src={logo} alt="" />
                            </div>
                            <h3 className="mb-4 text-3xl font-bold text-center font-josefin">
                                {values.isMember ? "Login" : "Register"}
                            </h3>

                            {/* name input */}
                            {!values.isMember && (
                                <FormRow
                                    labelText="Name"
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    handleChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            )}

                            {/* email input */}
                            <FormRow
                                type="email"
                                name="email"
                                value={values.email}
                                handleChange={handleChange}
                                placeholder="Enter your email"
                                labelText="Email"
                                required
                            />
                            {/* password input */}
                            <FormRow
                                type="password"
                                name="password"
                                value={values.password}
                                handleChange={handleChange}
                                placeholder="Enter your password"
                                labelText="Password"
                                required
                            />
                            {!values.isMember && (
                                <FormRow
                                    labelText="Confirm password"
                                    type="password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    handleChange={handleChange}
                                    placeholder="Retype password"
                                    required
                                />
                            )}

                            <button
                                type="submit"
                                className={`${values.isMember ? "bg-teal-800" : "bg-teal-800"
                                    } flex justify-center w-full p-3 my-5 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in  rounded-lg cursor-pointer hover:bg-gray-900 font-josefin`}
                            >
                                {values.isMember ? "Login" : "Register"}
                            </button>
                            <button
                                onClick={demouseLogin}
                                type="submit"
                                className={`bg-yellow-800 flex justify-center w-full p-3 my-5 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in  rounded-lg cursor-pointer hover:bg-gray-900 font-josefin`}
                            >
                                Demo user login
                            </button>
                            <button
                                onClick={demoadminLogin}
                                type="submit"
                                className={`bg-gray-800 flex justify-center w-full p-3 my-5 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in  rounded-lg cursor-pointer hover:bg-gray-900 font-josefin`}
                            >
                                Demo admin login
                            </button>

                            <p className="font-roboto">
                                {values.isMember ? "Not a member yet?" : "Already a member?"}
                                <button
                                    type="button"
                                    onClick={toggleMember}
                                    className="ml-2 text-sm text-blue-600 cursor-pointer font-roboto"
                                >
                                    {values.isMember ? "Register" : "Login"}
                                </button>
                            </p>
                        </form>
                    </div>
                )}
            </section>
        </>
    );
};

export default Register;
