import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeadingIconOutlinedButton = (props)=> {
    return (
        <div className="btn-outline" onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon} />
            <p>{props.name}</p>
        </div>
    )
}

export default LeadingIconOutlinedButton;