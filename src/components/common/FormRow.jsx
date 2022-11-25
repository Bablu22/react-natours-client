const FormRow = ({ type, name, value, handleChange, labelText, placeholder, required, classnames }) => {
    return (
        <div className="my-3">
            <label htmlFor={name} className="text-sm leading-7 text-gray-600 font-roboto">
                {labelText || name}
            </label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                className={`w-full p-4 text-sm text-gray-600 border border-gray-200 rounded bg-gray-50 focus:outline-none font-roboto ${classnames}`}
            />
        </div>
    )
}

export default FormRow

