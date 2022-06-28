import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const SummerCamp = () => {
    const images = [
        {_id:1, imgUrl: "https://i.ibb.co/LnbNbS7/img1.jpg"},
        {_id:2, imgUrl: "https://i.ibb.co/1vjLrNr/img2.jpg"},
        {_id:3, imgUrl: "https://i.ibb.co/Jzb8vng/img3.jpg"}
    ]
    return (
        <div className='m-8'>
            <div>
                <h1 className='text-4xl font-bold text-black'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
                <small className='text-slate-500 font-semibold'>Multi-Day Course ?</small>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <p className='text-gray-800 text-xl font-'>In this 5  day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>
                    <div className='mb-3 mt-6 flex items-center'>
                        <div class="avatar">
                        <div class="w-5 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" alt=''/>
                        </div>
                        </div>
                        <h2 className='text-primary font-bold ml-2 text-sm'>Kimberly R Moseler</h2>
                    </div>
                    <div className='flex items-center'>
                        <div class="rating rating-xs mr-2">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <div className='text-gray-500'>
                            <small>467 total reviews for this teacher</small>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div class="rating rating-xs mr-2">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <div className='text-gray-500'>
                            <small>5 reviews for this class</small>
                        </div>
                    </div>
                    
                    <h3 className='text-sm '>Completed by 21 learners</h3>
                    <div className='mt-6 flex items-center'>
                        <button className='btn btn-sm rounded-full btn-primary text-xs capitalize px-6'><span className='mr-2'>See Class Schedule</span> <FaAngleRight size="1rem"/> </button>
                        <div className='ml-8 text-primary font-bold text-xs'>
                            <Link to="/"><div className='flex justify-center items-center'><FaRegHeart /><span className='ml-1'>Save</span></div></Link>
                        </div>
                        <div className='ml-8 text-primary font-bold text-xs'>
                            <Link to="/"><div className='flex justify-center items-center'><RiShareForwardLine size="1rem"/><span className='ml-1'>Share</span></div></Link>
                        </div>
                    </div>
                </div>
                {/* <div className=' grid grid-cols-2 bg-slate-400'> 
                    <div
                    className='row-span-2 bg-green p-2'><img src={images[0].imgUrl} alt="" /></div>
                    <div
                    className='bg-green p-2'><img src={images[1].imgUrl} alt="" /></div>
                    <div
                    className='bg-green p-2'><img src={images[2].imgUrl} alt="" /></div>
                </div> */}
                <div className='flex md:mx-4 my-16 md:my-0'>
                    <div style={{ width: "50%" }} className="mr-2"><img style={{
                        height: "320px", width: "300px",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius:"10px"
                    }} src={images[0].imgUrl} alt="" /></div>
                    <div style={{width:"50%"}}>
                        <div><img style={{
                            height: "155px", width: "300px",
                            borderTopRightRadius:"10px"
                        }} src={images[1].imgUrl} alt="" /></div>
                        <div className='mt-2'><img style={{
                            height: "156px", width: "300px",
                            borderBottomRightRadius:"10px"
                        }} src={images[2].imgUrl} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummerCamp;