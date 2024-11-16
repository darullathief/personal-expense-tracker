const OverviewCard = (props) => {
    return (
        <div className="card-container">
            <p>{props.name}</p>
            <p className="overview-amount">{props.amount}</p>
        </div>
    )
}

export default OverviewCard;