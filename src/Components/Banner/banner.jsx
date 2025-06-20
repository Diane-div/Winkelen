import React from 'react'
import BannerImg from "../../assets/4547829.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'


const banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py:0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos="zoom-in">
                    <img className="max-w-[400px] h-[350px] w-full mx-auto object-cover"src={BannerImg} alt="Banner img" />
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold '>Winter Sale upto 50% off</h1>
                    <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates a inventore ex ratione aut dolore ducimus quod iusto error. Doloremque ex ad dolores numquam rerum fugiat ipsum nesciunt facere dolorem tempore?</p>
                    <div className='flex flex-cold gap-4'>
                        <div data-aos="fade-up" className='flex items-center gap-4'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default banner