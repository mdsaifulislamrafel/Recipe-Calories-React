// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner h-[400px] lg:h-[600px] flex items-center justify-center text-white rounded-xl'>
            <div className='lg:w-[60%] text-center space-y-5 lg:space-y-10'>
                <h1 className='text-2xl lg:text-5xl font-bold lg:leading-[76px]'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='font-normal'>Craft a culinary masterpiece with a fusion of vibrant spices and fresh ingredients, elevating your dining experience to new heights.</p>
                <div className='space-x-8'>
                    <button className='bg-green-600 border-0 rounded-full p-3 text-black font-bold'>Explore Now</button>
                    <button className='border rounded-full p-3 hover:bg-gray-300 hover:text-black'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;