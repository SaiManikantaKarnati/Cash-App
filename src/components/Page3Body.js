import banking_hole from "../utils/banking_hole.png";
import banking_column from "../utils/banking_column.png";
import banking_track_1 from "../utils/banking_track_1.png";
import banking_track_2 from "../utils/banking_track_2.png"; 
import banking_phone from "../utils/banking_phone.png";
import banking_ramp_1 from "../utils/banking_ramp_1.png";
import banking_stairs_2 from "../utils/banking_stairs_2.png";
import banking_ramp_2 from "../utils/banking_ramp_2.png";
import banking_stairs_1 from "../utils/banking_stairs_1.png";
import banking_monster from "../utils/banking_monster.png";
import banking_cubes from "../utils/banking_cubes.png";
import banking_tube from "../utils/banking_tube.png";

const Page3Body = () => {
    return (
        <div className="page-3-body">
            <img className="banking-hole-1" src={banking_hole} alt="banking_hole"></img>
            <img className="banking-track-2" src={banking_track_2} alt="banking_track_2"></img>
            <div className="banking-data">
                <p className="banking">Banking</p>
                <p className="banking-text">Receive your paycheck, tax returns, and <br></br>other direct deposits up to two days early <br></br>using your Cash App routing <br></br>and account number.</p>
            </div>
            
            <img className="banking-column" src={banking_column} alt="banking_column"></img>
            <img className="banking-track-1" src={banking_track_1} alt="banking_track_1"></img>
            <img className="banking-ramp-1" src={banking_ramp_1} alt="banking_ramp_1"></img>
            <img className="banking-stairs-2" src={banking_stairs_2} alt="banking_stairs_2"></img>
            <img className="banking-ramp-2" src={banking_ramp_2} alt="banking_ramp_2"></img>
            <img className="banking-phone" src={banking_phone} alt="banking_phone"></img>
            <img className="banking-stairs-1" src={banking_stairs_1} alt="banking_stairs_1"></img>
            <img className="banking-monster" src={banking_monster} alt="banking_monster"></img>
            <img className="banking-cubes" src={banking_cubes} alt="banking_cubes"></img>
            <img className="banking-hole-2" src={banking_hole} alt="banking_hole"></img>
            <img className="banking-tube" src={banking_tube} alt="banking_tube"></img>
        </div>   
    )
}

export default Page3Body;