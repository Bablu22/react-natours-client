import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../../common/FormRow";
import { toast } from "react-toastify";
import { createTour } from "../../../redux/features/tourSlice";
import Loader from "../../common/Loader";

const initialState = {
    name: "",
    description: "",
    price: "",
    duration: "",
    maxGroupSize: "",
    difficulty: "EASY",
    startDates: "",
    summary: "",
    imageCover: "",
    guides: [],
};
const options = [
    {
        label: "EASY",
        value: "easy",
    },
    {
        label: "MEDIUM",
        value: "medium",
    },
    {
        label: "DIFFICULT",
        value: "difficult",
    },
];

function AddTour() {
    const [values, setValues] = useState(initialState);
    const [difficulty, setDifficulty] = useState("");
    const [guides, setGuides] = useState([]);
    const [image, setImage] = useState("");
    const { activeUsers } = useSelector((state) => ({ ...state.auth }));
    const { loading } = useSelector((state) => ({ ...state.tour }));
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    values.difficulty = difficulty;
    values.guides = guides;


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTour({ values, image, toast }))
        setValues({})
    };


    return (
        <div>
            {
                loading ? <Loader /> :

                    <form onSubmit={handleSubmit}>
                        <FormRow
                            type="text"
                            name="name"
                            value={values.name}
                            handleChange={handleChange}
                            placeholder="Enter tour name"
                            labelText="Tour name"
                            required
                            classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                        />
                        <FormRow
                            type="text"
                            name="description"
                            value={values.description}
                            handleChange={handleChange}
                            placeholder="Enter tour description"
                            labelText="Tour description"
                            required
                            classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                        />
                        <FormRow
                            type="text"
                            name="summary"
                            value={values.summary}
                            handleChange={handleChange}
                            placeholder="Enter tour summary"
                            labelText="Tour summary"
                            required
                            classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                        />
                        <div className="grid grid-cols-4 gap-3">
                            <FormRow
                                type="number"
                                name="price"
                                value={values.price}
                                handleChange={handleChange}
                                placeholder="Enter tour price"
                                labelText="Tour price"
                                required
                                classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                            />
                            <FormRow
                                type="number"
                                name="duration"
                                value={values.duration}
                                handleChange={handleChange}
                                placeholder="Enter tour duration"
                                labelText="Tour duration"
                                required
                                classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                            />
                            <FormRow
                                type="number"
                                name="maxGroupSize"
                                value={values.maxGroupSize}
                                handleChange={handleChange}
                                placeholder="Enter tour maxGroupSize"
                                labelText="Tour maxGroupSize"
                                required
                                classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                            />
                            <FormRow
                                type="date"
                                name="startDates"
                                value={values.startDates}
                                handleChange={handleChange}
                                placeholder="Enter tour maxGroupSize"
                                labelText="Tour Start Dates"
                                required
                                classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                            />

                            <select
                                className="p-2 mb-4 bg-gray-100 border border-gray-500 outline-none title"
                                name={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                            >
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="p-2 mb-4 bg-gray-100 border border-gray-500 outline-none title"
                                name={guides}
                                onChange={(e) => setGuides([...guides, e.target.value])}
                            >
                                {activeUsers.map((option) => (
                                    <option
                                        key={option.email}
                                        value={option._id}
                                    >{`${option.name}`}</option>
                                ))}
                            </select>
                        </div>
                        <FormRow
                            type="file"
                            handleChange={(e) => setImage(e.target.files[0])}
                            placeholder="Enter tour image"
                            labelText="Tour image"
                            required
                            classnames="title bg-gray-100 border border-gray-500 p-2 mb-4 outline-none"
                        />
                        <button
                            className="hover:shadow-form  rounded-md bg-[#FFC800] py-3 px-8 text-center text-base font-semibold text-black outline-none font bold"
                            type="submit"
                        >
                            Add Tour
                        </button>
                    </form>
            }
        </div>
    );
}

export default AddTour;
