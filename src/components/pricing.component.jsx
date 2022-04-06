import { useState } from 'react';
import './style.scss';

const PricingComponent = () =>
{
    const [price, setprice] = useState(16)
    const [theme, setTheme] = useState(1)
    const changeTheme = () => {
		if (theme === 1) setTheme(2);
		else setTheme(1);
	};
    return (
        <div className="bg-white h-full w-full rounded-2xl drop-shadow-lg">
            <div className='md:p-12 p-5 flex w-full flex-col md:justify-start md:items-baseline justify-center items-center relative'>
                <span className='md:order-1 mt-3 text-lg tracking-widest font-[400]'>100K PAGEVIEWS</span>
                <input type="range" min="0" value={price} max="100" className="range md:order-3 w-full " onChange={(e) => setprice(e.target.value)}/>
                <span className='md:order-2 md:absolute md:right-12 flex items-center justify-center mt-9 md:mt-0'><strong className='text-4xl'>${price}.00 </strong> / month</span>
            </div>
            <div className='md:px-12 px-3 flex items-center md:justify-end justify-center md:gap-6 gap-3 mt-5 mb-12'>
                <span className='md:font-bold md:text-base text-sm'>Monthly Billing</span>
                <div className="w-[45px] h-[20px] rounded-full toggle relative" id={`theme${theme}`}>
                    <i
                        className="transition-all duration-300 ease-in-out delay-150 fa-solid fa-circle text-sm cursor-pointer absolute top-[17.5%]"
                        onClick={changeTheme}></i>
                </div>
                <span className='md:font-bold md:text-base text-sm'>Yearly Billing <small className='discount hidden md:inline'> 25% Discount</small></span>
            </div>
            <hr />
            <div className='px-12 py-7  flex flex-col md:flex-row justify-between items-center m-auto'>
                <ul className="list md:text-left text-center">
                    <li className='py-1 pl-3'>Unlimited websites</li>
                    <li className='py-1 pl-3'>100% data ownership</li>
                    <li className='py-1 pl-3'>Email reports</li>
                </ul>
                <button className="rounded-full trial_btn mt-9 md:mt-0">Start my trial</button>
            </div>
        </div>
      );
}
 
export default PricingComponent;