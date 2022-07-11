import { FC } from "react"
import './style.css'

interface ICardProps {
    imageUrl: string
    name: string
}

const Card: FC<ICardProps> = ({ imageUrl, name }) => {
    return (
        <section className="card">
            <div className="card__icon">
                <img src={imageUrl} alt="icon" />
            </div>
            <div className="card__data">
                <p>{name}</p>
            </div>
        </section>
    )
}

export { Card }
