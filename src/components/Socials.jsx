import { instagram, linkedin, twitter } from "../assets"
const socials = ()=>{
    return (
        <span className="background">
        <span className="social-media-buttons">
            <span className="social-media-button">
                <img
                    alt="Instagram"
                    src={instagram}
                />
            </span>
            <span className="social-media-button">
                <img
                    alt="Twitter"
                    src={twitter}
                />
            </span>
            <span className="social-media-button">
                <img
                    alt="LinkedIn"
                    src={linkedin}
                />
            </span>
        </span>
    </span>
    )
}

export default socials;