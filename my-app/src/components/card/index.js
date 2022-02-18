import './style.scss'

const Card = ({ title, value }) => {
    return(
        <div className='card'>
            <h3 className='card__title'>{title}</h3>
            <p
                className={
                    title === 'Valor Final Liquido' || title === 'Ganho Líquido'
                        ? `card__value--green`
                        : 'card__value'
                }
            >
                {value}
            </p>
        </div>
    )
}

export default Card