import twitterLogo from "../../assets/twitterLogo.png"
import linkedinLogo from "../../assets/linkedinLogo.png"
import "./styles.css"

type Props = {
    img: string
    title: string
    description: string
}

export function ProfileCard({ img, title, description }: Props) {
    return (
        <div className="profileCardContainer">
            <img src={img} alt="" className="profileImg"/>
            <div className="profileDescriptionContainer">
                <p className="title">{title}</p>
                <p className="description">
                    {description}
                </p>
            </div>
            <div className="socialmediaLogos">
                <img src={twitterLogo} alt="" />
                <img src={linkedinLogo} alt="" />
            </div>
        </div>
    )
}