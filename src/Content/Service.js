import './Service.css';
export default function Service({image, title, text}){
    return(
        <div className="service-box">
            <div className="service-img-container">
                <img src={image} alt="" />
            </div>
            <div className="service-box-title">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}