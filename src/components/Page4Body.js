import boost_stairs_2 from "../utils/boost_stairs_2.png";
import boost_stairs_1 from "../utils/boost_stairs_1.png";
import boost_phone from "../utils/boost_phone.png";
import boost_burger from "../utils/boost_burger.png";
import boost_card from "../utils/boost_card.png";
import boost_hand from "../utils/boost_hand.png";
import boost_coffee from "../utils/boost_coffee.png";
import boost_shoe from "../utils/boost_shoe.png";

const Page4Body = () => {
    return (
        <div className="page-4-body">
            <img className="boost-stairs-2" src={boost_stairs_2} alt="boost_stairs_2"></img>
            <img className="boost-stairs-1" src={boost_stairs_1} alt="boost_stairs_1"></img>

            <img className="boost-phone" src={boost_phone} alt="boost_phone"></img>
            <img className="boost-burger" src={boost_burger} alt="boost_burger"></img>  
            <img className="boost-card" src={boost_card} alt="boost_card"></img>
            <img className="boost-hand" src={boost_hand} alt="boost_hand"></img>
            <img className="boost-coffee" src={boost_coffee} alt="boost_coffee"></img>
            <img className="boost-shoe" src={boost_shoe} alt="boost_shoe"></img>
            <div className="boost-data">
                <p className="boost">Cash Card <br></br>& Boost</p>
                <p className="boost-text">The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
            </div>
        </div>
    );
}


export default Page4Body;