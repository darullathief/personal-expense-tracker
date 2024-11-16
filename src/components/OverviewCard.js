import { ThreeDot } from 'react-loading-indicators';

const OverviewCard = (props) => {
    const formattedAmount = props.amount.toLocaleString('id-ID');

    return (
        <div className="card-container">
            <p>{props.name}</p>
            {props.pending ? (
                <ThreeDot color="#E6730F" size="small" />
            ) : (
                <p className="overview-amount">Rp. {formattedAmount}</p>
            )}
            
        </div>
    )
}

export default OverviewCard;