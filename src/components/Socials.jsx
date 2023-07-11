import { instagram, linkedin, twitter } from "../assets"
const socials = () => {
    return (
        <span className=" animate-move relative background">
            <span className="social-media-buttons">
                <span className="social-media-button">
                    <a href="https://www.instagram.com/simon_gideon_/">
                        <img
                            alt="Instagram"
                            src={instagram}
                        />
                    </a>
                </span>
                <span className="social-media-button">
                    <a href="https://twitter.com/Simo_Giddy">
                        <img
                            alt="Twitter"
                            src={twitter}
                        />
                    </a>
                </span>
                <span className="social-media-button">
                    <a href="https://www.linkedin.com/in/simon-gideon/">
                        <img
                            alt="LinkedIn"
                            src={linkedin}
                        />
                    </a>
                </span>
            </span>
        </span>
    )
}

export default socials;