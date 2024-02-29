import {useNavigate} from "react-router-dom";

const SubmitBtn = ({text, style}) => {

    const navigation = useNavigate();
    const isSubmitting = navigation.state === "submitting"
    return (
        <div className="card-actions justify-stretch">
            <button disabled={isSubmitting} type="submit" className={`btn flex-auto  ${style}`}>
                {
                    isSubmitting ?
                        <><span className="loading loading-spinner"></span>En cours...</>
                        :
                        text
                }
            </button>
        </div>
    )
}
export default SubmitBtn;