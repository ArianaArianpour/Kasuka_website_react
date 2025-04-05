import './About.css';
import Options from './Options';
import aboutPic from '../assets/images/about.jpg';
import featurePic from '../assets/images/teamwork.jpg'
import Slider from '../Content/Slider.js';
import Boxes from './Boxes.js';
export default function About() {
    const OptionsData = [
        { id: 1, text: "۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی" },
        { id: 2, text: "تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد." },
        { id: 3, text: "برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید" }
    ]
    const sliderData = [
        { id: 1, image: 'images/client-1.png' },
        { id: 2, image: 'images/client-2.png' },
        { id: 3, image: 'images/client-3.png' },
        { id: 4, image: 'images/client-4.png' },
        { id: 5, image: 'images/client-5.png' },
        { id: 6, image: 'images/client-6.png' },
        { id: 7, image: 'images/client-7.png' },
        { id: 8, image: 'images/client-8.png' }
    ];
    const featuresBoxes = [
        {id:1, image:'icons/database.png', title:'تبلیغ سختی است', text:'نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند'},
        {id:2, image:'icons/bar-chart.png', title:'کدام یک از اینهاست', text:'کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند'},
        {id:3, image:'icons/check.png', title:'یا کور شده است', text:'یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند'},
        {id:4, image:'icons/calendar.png', title:'حقیقت مبارک', text:'آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند'}
    ]
    return (
        <div className="content">
            <div className="about-container">
                <div className="about-image">
                    <img src={aboutPic} alt="photo" />
                </div>
                <div className="about-text">
                    <h1>شرکت دیجیتال کاسوکا</h1>
                    <p>شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند</p>
                    <Options {...OptionsData[0]} />
                    <Options {...OptionsData[1]} />
                    <Options {...OptionsData[2]} />
                    <p>خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.</p>
                </div>
            </div>
            <div className="slider">
                <Slider {...sliderData[0]} />
                <Slider {...sliderData[1]} />
                <Slider {...sliderData[2]} />
                <Slider {...sliderData[3]} />
                <Slider {...sliderData[4]} />
                <Slider {...sliderData[5]} />
                {/* <Slider {...sliderData[6]} />
                <Slider {...sliderData[7]} /> */}
            </div>
            <div className="features">
                <div className="boxs">
                    <Boxes {...featuresBoxes[0]}/>
                    <Boxes {...featuresBoxes[1]}/>
                    <Boxes {...featuresBoxes[2]}/>
                    <Boxes {...featuresBoxes[3]}/>
                </div>
                <img src={featurePic} alt="" />
            </div>
        </div>
    );
}