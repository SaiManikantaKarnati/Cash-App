import intro_cube_1 from "../utils/intro_cube_1.png"
import intro_stairs_1 from "../utils/intro_stairs_1.png"
import intro_phone_1 from "../utils/intro_phone_1.png"
import intro_cubes_1 from "../utils/intro_cubes_1.png"
import intro_pillar_1 from "../utils/intro_pillar_1.png"
import apple from "../utils/apple.png"
import android from "../utils/android.png"
import arrow from "../utils/arrow.png"
import icon1 from "../utils/icon1.png"
import icon2 from "../utils/icon2.png"
import icon3 from "../utils/icon3.png"

const Page1Body = () => {
    return (
        <div className="section-1-body">
            <img className="intro-cube-1" src={intro_cube_1} alt="intro-cube1"></img>

            <img className="intro-stairs-1" src={intro_stairs_1} alt="intro_stairs_1"></img>

            <p className="cash">CASH</p>
            <img className="intro-phone-1" src={intro_phone_1} alt="intro_phone_1"></img>
            <p className="app">APP</p>

            <img className="intro-cubes-1" src={intro_cubes_1} alt="intro_cubes_1"></img>

            <img className="intro-pillar-1" src={intro_pillar_1} alt="intro_pillar_1"></img>

            <div className="buttons">
                <div className="button1">
                    <button className="app-store"><img className="apple" src={apple} alt="apple-img"></img><span className="button-text">APP STORE</span></button>
                </div>
                <div className="button2">
                    <button className="google-play"><img className="android" src={android} alt="android-img"></img><span className="button-text">GOOGLE PLAY</span></button>
                </div>
            </div>

            <img className="arrow-img" src={arrow} alt="arrow image"></img>
            
            <p className="section1-footer-text">Brokerage services by Cash App Investing LLC, member FINRA / SIPC.<br></br> See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br></br>trading offered by Cash App. Cash App Investing does not trade bitcoin and <br></br>Cash App is not a member of FINRA or SIPC. Cash App facilitates banking<br></br> services through Sutton Bank and Lincoln Savings Bank, Members FDIC. </p>

            <div className="icons">
                <img className="icon" src={icon1} alt="icon1"></img>
                <img className="icon" src={icon2} alt="icon2"></img>
                <img className="icon" src={icon3} alt="icon3"></img>
            </div>
        </div>
    );
}

export default Page1Body;