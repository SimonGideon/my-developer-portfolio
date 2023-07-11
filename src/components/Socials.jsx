import { instagram, linkedin, twitter } from "../assets"
const socials = () => {
    return (
        <span className=" animate-move relative background">
            <span id="socials-ico" className="social-media-buttons">
                <span className="social-media-button">
                    <img
                        alt="Instagram"
                        src={instagram}
                        onClick={() =>
                            window.open(
                                'https://www.instagram.com/simon_gideon_/',
                                '_blank'
                            )
                        }
                    />
                </span>
                <span className="social-media-button">
                    <img
                        alt="Twitter"
                        src={twitter}
                        onClick={() =>
                            window.open(
                                "https://twitter.com/Simo_Giddy",
                                '_blank'
                            )
                        }
                    />
                </span>
                <span className="social-media-button">
                    <img
                        alt="LinkedIn"
                        src={linkedin}
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/simon-gideon/",
                                '_blank'
                            )
                        }
                    />
                </span>
            </span>
        </span>
    )
}

export default socials;