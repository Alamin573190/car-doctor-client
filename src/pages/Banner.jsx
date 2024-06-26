import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import img6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex h-full transform left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='lg:w-2/3 flex justify-center p-10 flex-col  text-white space-y-6'>
                        <h1 className='font-bold text-2xl md:text-5xl '>
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div>
                     <button className="btn btn-success mr-3">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                     </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 
                    bottom-0">

                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />

                <div className="absolute flex h-full transform left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='lg:w-2/3 flex justify-center p-10 flex-col  text-white space-y-6'>
                        <h1 className='font-bold text-2xl md:text-5xl '>
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div>
                     <button className="btn btn-success mr-3">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                     </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 
                    bottom-0">

                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex h-full transform left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='lg:w-2/3 flex justify-center p-10 flex-col  text-white space-y-6'>
                        <h1 className='font-bold text-2xl md:text-5xl '>
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div>
                     <button className="btn btn-success mr-3">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                     </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex h-full transform left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='lg:w-2/3 flex justify-center p-10 flex-col  text-white space-y-6'>
                        <h1 className='font-bold text-2xl md:text-5xl '>
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div>
                     <button className="btn btn-success mr-3">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                     </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;