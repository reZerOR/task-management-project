import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className='mt-12'>
            <div className='max-w-screen-xl mx-auto bg-gray-200 space-y-2 py-6 px-8'>
                <h2 className='text-center text-red-500 font-bold'>Happy Customers</h2>
                <p className='text-center text-2xl font-semibold'>What Our Customers Say</p>

                <div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='mt-4'>
                            <div className='space-y-4'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div>
                                        <img className='w-[50px] h-[50px] rounded-full' src="/reviewImage1.jpg" alt="" />
                                    </div>

                                    <div>

                                        <p className='text-2xl'>Josef </p>
                                    </div>
                                </div>


                                <div className=''>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quibusdam ipsa aliquid veniam voluptate voluptatibus enim tempora et repellat ex quisquam fugiat non tenetur quo laudantium culpa quia sit sequi mollitia provident aperiam consectetur ratione obcaecati. Laborum inventore, modi, porro eos doloribus alias earum rem nobis placeat autem quidem eum.</p>
                                </div>
                                <div></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mt-4'>
                            <div className='space-y-4'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div>
                                        <img className='w-[50px] h-[50px] rounded-full' src="/reviewImage1.jpg" alt="" />
                                    </div>

                                    <div>

                                        <p className='text-2xl'>Josef </p>
                                    </div>
                                </div>


                                <div className=''>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quibusdam ipsa aliquid veniam voluptate voluptatibus enim tempora et repellat ex quisquam fugiat non tenetur quo laudantium culpa quia sit sequi mollitia provident aperiam consectetur ratione obcaecati. Laborum inventore, modi, porro eos doloribus alias earum rem nobis placeat autem quidem eum.</p>
                                </div>
                                <div></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mt-4'>
                            <div className='space-y-4'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div>
                                        <img className='w-[50px] h-[50px] rounded-full' src="/reviewImage1.jpg" alt="" />
                                    </div>

                                    <div>

                                        <p className='text-2xl'>Josef </p>
                                    </div>
                                </div>


                                <div className=''>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quibusdam ipsa aliquid veniam voluptate voluptatibus enim tempora et repellat ex quisquam fugiat non tenetur quo laudantium culpa quia sit sequi mollitia provident aperiam consectetur ratione obcaecati. Laborum inventore, modi, porro eos doloribus alias earum rem nobis placeat autem quidem eum.</p>
                                </div>
                                <div></div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews;