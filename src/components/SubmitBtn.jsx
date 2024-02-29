export const SubmitBtn = ({text, style}) => {
    return (
        <div className="card-actions justify-stretch">
            <button type="submit" className={`btn flex-auto  ${style}`}>
                {text}
            </button>
        </div>
    )
}
