import React from 'react'
// import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";


const ContactMe = () => {
    const { register, handleSubmit} = useForm();
    const onsubmit = (formData) => {
        document.location.href = `mailto:bharathaaleti018@gmail.com?subject=(From PORTFOLIO):::${formData.subject}&body=${formData.name}::: ${formData.message} (${formData.email})`;
    };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact ME</h3>
        <div className='flex flex-col space-y-10 mt-20'>
            <h4 className=' md:text-2xl font-semibold text-center p-4'>Don't be shy - I won't bite (unless you're made of chocolate).{" "}<span className='decoration-[#f7ab0a]/50 underline'>Let's Talk</span></h4>
            <div className='space-y-3'>
{/*                 <div className='flex items-center justify-center space-x-3'>
                    <PhoneIcon className='w-7 h-7 text-[#f7ab0a] animate-pulse' />
                    <p className='text-xl'>+918897257030</p>
                </div> */}
                <div className='flex items-center justify-center space-x-3'>
                    <EnvelopeIcon className='w-7 h-7 text-[#f7ab0a] animate-pulse' />
                    <p className='text-xl'>aaletibharath@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <MapPinIcon className='w-7 h-7 text-[#f7ab0a] animate-pulse' />
                    <p className='text-xl'>India</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onsubmit)}  className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className="flex space-y-2 sm:space-x-2 flex-col sm:flex-row">
                    <input {...register("name")} type="text" placeholder='Name' className=' contactBoxStyle'/>
                    <input {...register("email")} type="email" placeholder='Email' className=' contactBoxStyle'/>
                </div>

                <input {...register("subject")} type="text" placeholder='Subject' className='contactBoxStyle'/>
                <textarea {...register("message")} className='contactBoxStyle' placeholder='Message'/>
                <button type='submit' className='bg-[#f7ab0a] rounded-md py-5 px-10 text-black font-bold text-lg'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe;
