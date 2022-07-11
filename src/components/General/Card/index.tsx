import { FC } from "react"
import './style.css'

interface ICardProps {
    status: string
    name: string
}

const Card: FC<ICardProps> = ({ status, name }) => {
    return (
        <section className="card">
            <div className="card__icon">
                <p>{status}</p>
            </div>
            <div className="card__data">
                <p>{name}</p>
            </div>
        </section>
    )
}

export { Card }
