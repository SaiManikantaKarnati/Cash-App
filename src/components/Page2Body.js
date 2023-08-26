import payments_phone_1 from "../utils/payments_phone_1.png";
import payments_column from "../utils/payments_column.png";
import payments_pillar_medium from "../utils/payments_pillar_medium.png";
import payments_pillar_small from "../utils/payments_pillar_small.png";
import payments_pillar_large from "../utils/payments_pillar_large.png";

const Page2Body = () => {
    return (
        <div className="page-2-body">
            <div className="payments-data">
                <p className="payments">Payments</p>
                <p className="payments-text">Send and receive money with anyone, donate<br></br>to an important cause, or tip professionals.<br></br> Just enter a $cashtag, phone number, or<br></br> scan their QR code to pay.</p>
            </div>

            <div className="payment-phone">
                <img className="payments-phone-1" src={payments_phone_1} alt="payments_phone_1"></img>
            </div>
            
            {/* <img className="payments-column-1" src={payments_column} alt="payments_column"></img>
            <img className="payments-pillar-small" src={payments_pillar_small} alt="payments_pillar_small"></img>
            <img className="payments-pillar-medium1" src={payments_pillar_medium} alt="payments_pillar_medium"></img>
            <img className="payments-pillar-large" src={payments_pillar_large} alt="payments_pillar_large"></img>
            <img className="payments-pillar-medium2" src={payments_pillar_medium} alt="payments_pillar_medium"></img>
            <img className="payments-pillar-medium3" src={payments_pillar_medium} alt="payments_pillar_medium"></img>
            <img className="payments-column-2" src={payments_column} alt="payments_column"></img>
            <img className="payments-pillar-medium4" src={payments_pillar_medium} alt="payments_pillar_medium"></img>
            <img className="payments-column-3" src={payments_column} alt="payments_column"></img> */}

        </div>
    )
}

export default Page2Body;