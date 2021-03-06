// import { useRef } from 'react'
// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper.min.css'
// import 'swiper/components/pagination/pagination.min.css'

// import SwiperCore, { Pagination } from 'swiper/core'

// SwiperCore.use([Pagination])

// export const Items = () => (
//   <div className='h-screen w-full overflow-hidden z-0 relative'>
//     <Image alt='Mountains' src='/img/homePage/carousel/homeCarouselItem1.png' layout='fill' objectFit='cover' quality={100} />

//     <div className='h-56 w-124 bg-transparent absolute top-48 left-10 text-center'>
//       <h3 className='font-semibold text-secondary-300'>Cursos Online</h3>
//       <br />
//       <span className='text-primary-300 text-7xl font-hottemp'>Enamorate del Sello</span> <br />
//       <p className='text-gray-700 mt-4 font-semibold text-sm'>
//         Únete a este programa virtual de 6 semanas que te dará los ingredientes claves para salir de la mentalidad de &quot;corregir debilidades&quot;
//         y aprender a amar el recurso más importante en el que te puedes apalancar para lograr con disfrute lo que quieres: tu combinación única de
//         talentos.
//       </p>
//     </div>
//   </div>
// )

// export const HeaderCarousel = () => {
//   const { current: carouselItem } = useRef([1, 2, 3, 4, 5])

//   return (
//     <>
//       <Swiper pagination={{ clickable: true }} className='h-screen w-full'>
//         {carouselItem.map((item, idx) => (
//           <SwiperSlide key={idx}>
//             <Items />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   )
// }

import { useRef } from 'react'
// import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, { Pagination } from 'swiper/core'

SwiperCore.use([Pagination])

export const Items = () => (
  <div className='h-screen w-full overflow-hidden z-0 relative'>
    {/* <img
      alt='Mountains'
      src='/img/homePage/carousel/homeCarouselItemMobile1.png'
      className='md:hidden h-full w-full object-cover'
      width={1920}
      height={1080}
    /> */}
    <img
      alt='Mountains'
      src='/img/homePage/carousel/homeCarouselItem1.png'
      className='hidden md:block h-full w-full object-cover'
      width={1920}
      height={1080}
    />

    {/* <Image
      alt='Mountains'
      src='/img/homePage/carousel/homeCarouselItemMobile1.png'
      className='hidden'
      layout='fill'
      objectFit='cover'
      quality={100}
    />
    <Image alt='Mountains' src='/img/homePage/carousel/homeCarouselItem1.png' className='hidden' layout='fill' objectFit='cover' quality={100} /> */}

    <div className='containerHeadermm-md containerHeadermd-lg containerHeader2xl hsm:pt-20 3xl:pt-60 md:top-40 lg:top-60 bg-transparent absolute top-0 flex flex-col justify-center items-center left-0 md:left-10 text-center px-4'>
      <h3 className='font-semibold text-secondary-300 2xl:text-lg'>Cursos Online</h3>
      <span className='text-primary-300 text-7xl font-hottemp 3xl:text-9xl'>
        Enámorate <br className='md:hidden' />
        de tu sello
      </span>
      <p className='text-gray-700 mt-4 font-medium text-sm 3xl:text-2xl'> 
        Únete a este programa virtual de 6 semanas que te dará los ingredientes claves para salir de la mentalidad de &quot;corregir debilidades&quot;
        y aprender a amar el recurso más importante en el que te puedes apalancar para lograr con disfrute lo que quieres: tu combinación única de
        talentos.
      </p>
    </div>
  </div>
)

export const HeaderCarousel = () => {
  const { current: carouselItem } = useRef([1, 2, 3, 4, 5])

  return (
    <>
      <Swiper pagination={{ clickable: true }} className='h-screen w-full'>
        {carouselItem.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Items />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
