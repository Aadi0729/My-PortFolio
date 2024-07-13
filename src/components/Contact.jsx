import axios from "axios";
import React from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } = useForm();

        const onSubmit = async(data) => {
            const userInfo = {
                name: data.name,
                email: data.email,
                message: data.message
            };
        try {
            await axios.post("https://getform.io/f/bejyyvpa", userInfo);
            toast.success("Your message has been sent successfully");
        } catch(error) {
            console.log(error);
            toast.error("Something went wrong")
        }
        }
        
        return (
    <>
    <div 
    name = "Contact"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4 '>Let's Connect</h1>
        <span className='font-semibold text-xl text-orange-500'>Hello Connections!</span>
        <p className='mt-2'>If you'd like to get in touch with me, please fill out the form below. I'm looking forward to connecting with you!</p>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
                onSubmit={handleSubmit(onSubmit)}  
                // action="https://getform.io/f/bejyyvpa"
                // method="POST" 
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4 text-gray-800'>Send Your Message</h1>
                <div className='flex flex-col mb-4 '>
                    <label 
                    className='block text-gray-700 text-sm font-bold mb-2' 
                    >
                       Full Name
                    </label>
                    
                    <input 
                    {...register("name", { required: true })}
                    className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline' 
                    id='name' 
                    name='name'                      
                    type="text" 
                    placeholder='Enter your full name' 
                    />
                    {errors.name && <span className="text-sm text-red-700">This field is mandatory</span>}
                </div>

                <div className='flex flex-col mb-4 '>
                    <label 
                    className='block text-gray-700 text-sm font-bold mb-2' 
                    >
                       Email address
                    </label>
                    
                    <input 
                    {...register("email", { required: true })}
                    className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline' 
                    id='email' 
                    name='email'  
                    type="text" 
                    placeholder='Enter your email address' 
                    />
                    {errors.email && <span className="text-sm text-red-700">This field is mandatory</span>}
                </div>

                <div className='flex flex-col mb-4 '>
                    <label 
                    className='block text-gray-700 text-sm font-bold mb-2' 
                    >
                       Message
                    </label>
                    
                    <textarea
                    {...register("message", { required: true })}
                    className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline' 
                    id='message' 
                    name='message'
                    type="text" 
                    placeholder='Type your message here' 
                    />
                    {errors.message && <span className="text-sm text-red-700">This field is mandatory</span>}
                </div>
                <button type='submit' 
                    className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>
                    Send
                </button>
            </form>
        </div>
    </div>
    </>
  )
} 

export default Contact
