const FormInput = ({label, name, type, defaultValue}) => {
    return (
        <label className="form-control w-full mb-5">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                type={type}
                name={name}
                placeholder={defaultValue}
                className="input input-bordered w-full"
            />
        </label>
    )
}
export default FormInput