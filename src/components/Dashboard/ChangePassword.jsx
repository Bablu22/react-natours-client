import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../common/FormRow";
import Loader from "../common/Loader";
import { toast } from "react-toastify";
import { passwordChange } from "../../redux/features/authSlice";

const initialState = {
    passwordCurrent: "",
    password: "",
    confirmPassword: "",
};

function ChangePassword() {
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const [values, setValues] = useState(initialState);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(passwordChange({ values, toast }));
    };
    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="flex items-center justify-center ">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <form className="py-6 px-9" onSubmit={onSubmit}>
                            <div className="mb-5">
                                <FormRow
                                    labelText="Current Password"
                                    type="password"
                                    name="passwordCurrent"
                                    required={false}
                                    value={values.passwordCurrent}
                                    handleChange={handleChange}
                                    placeholder="Enter your current password"
                                />
                                <FormRow
                                    labelText="New Password"
                                    type="password"
                                    name="password"
                                    required={false}
                                    value={values.password}
                                    handleChange={handleChange}
                                    placeholder="Enter your password"
                                />
                                <FormRow
                                    labelText="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    required={false}
                                    value={values.confirmPassword}
                                    handleChange={handleChange}
                                    placeholder="Retype your password"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="hover:shadow-form w-full rounded-md bg-[#FFC800] py-3 px-8 text-center text-base font-semibold text-black outline-none font bold"
                                >
                                    Change Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChangePassword;
