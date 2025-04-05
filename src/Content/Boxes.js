import './Boxes.css';

export default function Boxes({image, title, text}) {
  return (
    <div className="content-box-container">
        
        <div className="box-text">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
        <img src={image} alt="" />
    </div>
  );
}
