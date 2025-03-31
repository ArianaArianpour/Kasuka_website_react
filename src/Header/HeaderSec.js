import './HeaderSec.css';
import Navbar from './Navbar.js';
import Boxes from "./Boxes.js";
export default function HeaderSec(){
    return(
        <div className="container">
            <div className="pre-header">
                <button className="starting-btn">شروع</button>
                <Navbar/>
                <h1 className="logo"><a href="https://theme-script.ir/templates/kasuka/index.html">Kasuka</a></h1>
            </div>
            <div className="intro">
                <h1>راه حل های قدرتمند<br /> دیجیتال با<br /><span>kasuka</span></h1>
                <p>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
            </div>
            <div className="boxes">
                <Boxes/>
                <Boxes/>
                <Boxes/>
                <Boxes/>
                <Boxes/>
            </div>

        </div>
    );
}