import { FaBeer } from 'react-icons/fa';
import Container from '../../../../sharedComponents/Container';
const AllFeatures = () => {
    return (
        <div className='mt-10'>
            <Container>
            <div className=' bg-[#EEFDFF] px-10  py-10  rounded-3xl '>
                <h2 className='text-center text-red-500 font-bold mt-3'>
                    One Tool
                </h2>
                <p className='text-center text-3xl font-bold mt-3'>One Undefined Workplace for all things project</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Forms</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Custom Fields</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Custom Roles</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Multi-lingual</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>White labeling</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Email-in</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Daily agenda</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Project Manager</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className=''>
                            <FaBeer className='w-[35px] h-[35px] bg-white rounded-full p-2'></FaBeer>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>File versioning</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ipsum, quasi enim natus accusamus quas magnam distinctio. Id deserunt quod, magnam hic facilis eaque sit tempora excepturi culpa minima?</p>
                        </div>
                    </div>
                
                    
                </div>

                <div className='text-center'>
                    <button className=' py-4 my-10 rounded-full  px-10 font-extrabold bg-blue-600 text-white'>See All Features</button>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default AllFeatures;