import './Slider.css';
export default function Slider({image}){
    return(
        <div className="slider-container">
            <img src={image} alt="" />
        </div>
    );
}