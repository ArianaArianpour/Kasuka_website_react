import './Boxes.css';
import icon from '../assets/images/calendar.png'
export default function Boxes(){
    return(
        <div className="box-container">
            <img src={icon} alt="icon" />
            <h2>نمونه کارها</h2>
        </div>
    )
}