import "./styles.css"

type Props = {
    icon: string
    title: string
    description: string
}

export function FeatureCard({icon, title, description}: Props) {
    return (
        <div className="featureCardContainer">
            <img src={icon} alt="" />
            <div className="featureCardDescription">
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}