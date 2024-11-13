import Navigation from "../components/Navigation";
import profileIcon from "../assets/img/profile-icon.png";
import { getUser } from "../actions/profile/getUser";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import LeadingIconOutlinedButton from "../components/LeadingIconOutlinedButton";
import { faArrowRightFromBracket, faPencil } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        props.getUser();
        setName(props.data.name);
        setEmail(props.data.email);
    }, [])
    return (
        <div>
            <Navigation />
            <div className="banner"></div>
            <div className="profile-section">
                <img src={profileIcon} className="profile-pic" />
                <div className="info">
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
            </div>

            <div className="button-group">
                <LeadingIconOutlinedButton
                    name = "Edit Profile"
                    icon = {faPencil}
                />
                <LeadingIconOutlinedButton
                    name="Keluar"
                    icon={faArrowRightFromBracket}
                />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return state.user
}
export default connect(mapStateToProps, { getUser })(Profile);