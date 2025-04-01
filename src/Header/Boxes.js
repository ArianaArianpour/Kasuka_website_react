import './Boxes.css';
export default function Boxes({image, title}){
    return(
        <div className="box-container">
            <img src={image} alt="icon" />
            <h2>{title}</h2>
        </div>
    )
}