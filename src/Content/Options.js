import './Options.css'
export default function Options({text}){
    return(
        <div className="option-container" dir='rtl'>
            <p><img src='icons/check.png' alt="icon" />{text}</p>
        </div>
    );
}