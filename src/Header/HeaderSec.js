import './HeaderSec.css';
import Navbar from './Navbar.js';
import Boxes from "./Boxes.js";
export default function HeaderSec(){
    const BoxesData = [
        {id:1, image:'icons/database.png', title:'اطلاعات ذخیره شده'},
        {id:2, image:'icons/art.png', title:'عملکرد های پایانی'},
        {id:3, image:'icons/calendar.png', title:'نمونه کارها'},
        {id:4, image:'icons/bar-chart.png', title:'نمودار کیفی'},
        {id:5, image:'icons/shop.png', title:'متن نمایشی'},
    ]
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
                <Boxes {...BoxesData[0]}/>
                <Boxes {...BoxesData[1]}/>
                <Boxes {...BoxesData[2]}/>
                <Boxes {...BoxesData[3]}/>
                <Boxes {...BoxesData[4]}/>
            </div>

        </div>
    );
}