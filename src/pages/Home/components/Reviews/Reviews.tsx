import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../../sharedComponents/SectionTitle";
import Container from "../../../../sharedComponents/Container";

const Reviews = () => {
  return (
    <div className=" py-20 lg:py-28 bg-secondColor bg-opacity-35">
      <Container>
        <div>
          <SectionTitle
            subTitle="Happy Customers"
            mainTitle="What Our Customers Say"
          ></SectionTitle>

          <div>
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination]}
              className="mySwiper cursor-pointer"
            >
              <SwiperSlide className="mt-4">
                <div className="space-y-4 md:mr-10 border-2 border-primeColor rounded-xl p-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div>
                      <img
                        className="w-[50px] h-[50p] object-contain rounded-full"
                        src="/reviewImage1.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="text-3xl font-stylish">Josef </p>
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, quibusdam ipsa aliquid veniam voluptate
                      voluptatibus enim tempora et repellat ex quisquam fugiat
                      non tenetur quo laudantium culpa quia sit sequi mollitia
                      provident aperiam consectetur ratione obcaecati. Laborum
                      inventore, modi, porro eos doloribus alias earum rem nobis
                      placeat autem quidem eum.
                    </p>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="mt-4">
                <div className="space-y-4 md:mr-10 border-2 border-primeColor rounded-xl p-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div>
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src="/reviewImage1.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="text-3xl font-stylish">Josef </p>
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, quibusdam ipsa aliquid veniam voluptate
                      voluptatibus enim tempora et repellat ex quisquam fugiat
                      non tenetur quo laudantium culpa quia sit sequi mollitia
                      provident aperiam consectetur ratione obcaecati. Laborum
                      inventore, modi, porro eos doloribus alias earum rem nobis
                      placeat autem quidem eum.
                    </p>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="mt-4">
                <div className="space-y-4 md:mr-10 border-2 border-primeColor rounded-xl p-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div>
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src="/reviewImage1.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="text-3xl font-stylish">Josef </p>
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, quibusdam ipsa aliquid veniam voluptate
                      voluptatibus enim tempora et repellat ex quisquam fugiat
                      non tenetur quo laudantium culpa quia sit sequi mollitia
                      provident aperiam consectetur ratione obcaecati. Laborum
                      inventore, modi, porro eos doloribus alias earum rem nobis
                      placeat autem quidem eum.
                    </p>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="mt-4">
                <div className="space-y-4 md:mr-10 border-2 border-primeColor rounded-xl p-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div>
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src="/reviewImage1.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="text-3xl font-stylish">Josef </p>
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, quibusdam ipsa aliquid veniam voluptate
                      voluptatibus enim tempora et repellat ex quisquam fugiat
                      non tenetur quo laudantium culpa quia sit sequi mollitia
                      provident aperiam consectetur ratione obcaecati. Laborum
                      inventore, modi, porro eos doloribus alias earum rem nobis
                      placeat autem quidem eum.
                    </p>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="mt-4">
                <div className="space-y-4 md:mr-10 border-2 border-primeColor rounded-xl p-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div>
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src="/reviewImage1.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="text-3xl font-stylish">Josef </p>
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, quibusdam ipsa aliquid veniam voluptate
                      voluptatibus enim tempora et repellat ex quisquam fugiat
                      non tenetur quo laudantium culpa quia sit sequi mollitia
                      provident aperiam consectetur ratione obcaecati. Laborum
                      inventore, modi, porro eos doloribus alias earum rem nobis
                      placeat autem quidem eum.
                    </p>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="mt-4">
                <div className="space-y-4 md:mr-10 border-2 border-primeColor rounded-xl p-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div>
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src="/reviewImage1.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="text-3xl font-stylish">Josef </p>
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, quibusdam ipsa aliquid veniam voluptate
                      voluptatibus enim tempora et repellat ex quisquam fugiat
                      non tenetur quo laudantium culpa quia sit sequi mollitia
                      provident aperiam consectetur ratione obcaecati. Laborum
                      inventore, modi, porro eos doloribus alias earum rem nobis
                      placeat autem quidem eum.
                    </p>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
