import './Navbar.css';
export default function Navbar() {
    return (
        <div className="nav-container">
            <ul>
                <li className='list-menu'><a href="#" ></a>لیست کشویی</li>
                <li className='list-menu'><a href="#" ></a>تماس با ما</li>
                <li className='list-menu'><a href="#" ></a>تیم</li>
                <li className='list-menu'><a href="#" ></a>نمونه کارها</li>
                <li className='list-menu'><a href="#" ></a>خدمات</li>
                <li className='list-menu'><a href="#" ></a>درباره ما</li>
                <li className='list-menu  active-list'><a href="#" ></a>خانه</li>
            </ul>
        </div>
    );
}