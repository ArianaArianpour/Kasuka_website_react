import './Services.css';
import Service from './Service';
export default function Services(){
    const ourServices = [
        {id:1, image:'icons/darks/analytic-chart.png', title:'لورم اپیسوم', text:'برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد'},
        {id:2 , image:'icons/darks/basket-ball.png', title:'اما همانطور که مشاهده می کنید', text:'آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند'},
        {id:3 , image:'icons/darks/coding.png', title:'دردهای بزرگ', text:'آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند'},
        {id:4 , image:'icons/darks/customer-service-agent.png', title:'هیچکس دیگر', text:'اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم'},
        {id:5 , image:'icons/darks/page-speed-optimization.png', title:'لولا را پاک کنید', text:'آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند'},
        {id:6 , image:'icons/darks/youtube.png', title:'دیوا دان', text:'روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد'},
    ]
    return(
        <div className="services-container">
            <div className="services-title">
                <p><p className='space'></p>  خدمات </p>
                
                <h1>خدمات ما را بررسی کنید</h1>
            </div>
            <div className="services-boxes">
                <Service {...ourServices[0]}/>
                <Service {...ourServices[1]}/>
                <Service {...ourServices[2]}/>
            </div>
            <div className="services-boxes">
                <Service {...ourServices[3]}/>
                <Service {...ourServices[4]}/>
                <Service {...ourServices[5]}/>
            </div>
        </div>
    );
}