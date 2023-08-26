import investing_graph_1 from '../utils/investing_graph_1.png';
import investing_graph_2 from '../utils/investing_graph_2.png';
import investing_bitcoin from '../utils/investing_bitcoin.png';
import investing_stocks from '../utils/investing_stocks.png';
import investing_floor_1 from '../utils/investing_floor_1.png';
import apple from '../utils/apple.png';
import android from '../utils/android.png';
import icon1 from "../utils/page-5-icon1.png";
import icon2 from "../utils/page-5-icon2.png";
import icon3 from "../utils/page-5-icon3.png";

const Page5Body = () => {
    return (
        <div className="page-5-body">
            {/* <div className="page-5-floor"></div> */}
            <img className='investing-floor-1' src={investing_floor_1}></img>
            <img className="investing-graph-1" src={investing_graph_1}></img>
            <img className="investing-graph-2" src={investing_graph_2}></img>
            <p className='investing'>Investing</p>
            <div className='investing-phones'>
                <img className="investing-bitcoin" src={investing_bitcoin}></img>
                <img className="investing-stocks" src={investing_stocks}></img>
            </div>

            <div className='stocks-data'>
                <p className='stocks'>Stocks</p>
                <p className='stocks-text'>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
            </div>

            <div className='bitcoin-data'>
                <p className='bitcoin'>Bitcoin</p>
                <p className='bitcoin-text'>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.</p>
            </div>

            <div className='page-5-buttons'>
                <button className='page-5-app-store'><img src={apple} alt="apple-img"></img><span className='button-text'>APP STORE</span></button>
                <button className='page-5-google-play'><img src={android} alt="android-img"></img><span className='button-text'>GOOGLE PLAY</span></button>
            </div>

            <p className="page-5-footer-text">Brokerage services by Cash App Investing LLC, member FINRA / SIPC.<br></br> See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br></br>trading offered by Cash App. Cash App Investing does not trade bitcoin and <br></br>Cash App is not a member of FINRA or SIPC. Cash App facilitates banking<br></br> services through Sutton Bank and Lincoln Savings Bank, Members FDIC. </p>

            <div className="page-5-icons">
                <img className="icon" src={icon1} alt="icon1"></img>
                <img className="icon" src={icon2} alt="icon2"></img>
                <img className="icon" src={icon3} alt="icon3"></img>
            </div>
        </div>
    )

}

export default Page5Body;