import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { bannerLists } from "../../utils";
import { Link } from "react-router-dom";

const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];

const HeroBanner = () => {
    return (
        <div className="rounded-md py-2">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                grabCursor={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
            >
                {bannerLists.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className={`carousel-item h-96 rounded-md sm:h-[500px] ${colors[i]}`}
                        >
                            <div className="flex items-center justify-center">
                                <div className="hidden w-1/2 justify-center p-8 lg:flex">
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <h1 className="mt-2 text-5xl font-bold text-white">
                                            {item.subtitle}
                                        </h1>
                                        <p className="mt-4 font-bold text-white">
                                            {item.description}
                                        </p>
                                        <Link
                                            className="mt-6 inline-block rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
                                            to="/products"
                                        >
                                            Shop
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex w-full justify-center p-4 lg:w-1/2">
                                    <img src={item?.image} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBanner;
