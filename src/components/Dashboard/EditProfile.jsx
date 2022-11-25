import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import FileUpload from "../common/FileUpload";
import FormRow from "../common/FormRow";
import Loader from "../common/Loader";


function EditProfile() {
    const { user, loading } = useSelector((state) => ({ ...state.auth }));
    const filePicker = useRef(null);
    const [selectFile, setSelectFile] = useState(null);
    const [values, setValues] = useState(user);
    const dispatch = useDispatch();
    const [image, setImage] = useState("");

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const addImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        setImage(e.target.files[0])
        reader.onload = (rederEvent) => {
            setSelectFile(rederEvent.target.result);
        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ values, toast, image }));
        return;
    };

    return (
        <div>
            {
                loading ? <Loader /> :

                    <div className="flex items-center justify-center p-">
                        <div className="mx-auto w-full max-w-[550px] bg-white">
                            <form className="py-6 px-9" onSubmit={onSubmit}>
                                <div className="mb-5">
                                    <FormRow
                                        labelText="Name"
                                        type="text"
                                        name="name"
                                        required={false}
                                        value={values?.name}
                                        handleChange={handleChange}
                                        placeholder="Enter your name"
                                    />
                                    <FormRow
                                        type="email"
                                        name="email"
                                        required={false}
                                        value={values?.email}
                                        handleChange={handleChange}
                                        placeholder="Enter your email"
                                        labelText="Email"
                                    />
                                </div>

                                <FileUpload
                                    filePicker={filePicker}
                                    addImage={addImage}
                                    selectFile={selectFile}
                                    setFunction={() => setSelectFile(null)}
                                />

                                <div>
                                    <button
                                        type="submit"
                                        className="hover:shadow-form w-full rounded-md bg-[#FFC800] py-3 px-8 text-center text-base font-semibold text-black outline-none font bold"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
            }
        </div>
    );
}

export default EditProfile;
