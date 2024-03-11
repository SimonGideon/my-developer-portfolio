import { socialsM } from "../constants";

const handleSocialClick = (link) => {
    window.open(link, '_blank');
};
const socials = () => {
    return (
        <span className=" animate-move relative background">
            <span id="socials-ico" className="social-media-buttons">
                {socialsM.map((social, index) => (
                    <span key={index} className="social-media-button">
                        <img
                            alt={social.name}
                            className={social.name}
                            src={social.icon}
                            onClick={() => handleSocialClick(social.link)}
                        />
                    </span>))}

            </span>
        </span>
    )
}
export default socials;