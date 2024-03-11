const FormInput = ({label, name, type, defaultValue, size = "w-full"}) => {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                type={type}
                name={name}
                placeholder={defaultValue}
                className={`input input-bordered ${size}`}
            />
        </label>
    )
}
export default FormInput