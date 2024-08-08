"use client"
import MainFooter from "../components/Footer"
import MainHeader from "../components/Header"
import { useState } from "react";

const ContactPage = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
  
        formData.append("access_key", "d11d3839-ef40-4c5e-9ad2-5506d3e4ac86");
  
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
  
        const data = await response.json();
  
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };

    return (
        <div className='flex flex-col h-screen bg-MainGold'>
            <MainHeader />
            <main className='flex-grow bg-MainGold'>
                <section className='bg-MainGold h-[120vh] flex flex-col mb-24'>
                    <div className='space-x-20 my-20 w-full'>
                        <h1 className='text-4xl font-extrabold mx-20 mb-5'>Send Us a Message </h1>
                        <p>For Any Business Inquries or website features you want to see fill out the form below!</p>
                        <form className='flex flex-col gap-2 w-2/5 mt-10' onSubmit={onSubmit}>
                            <input className='bg-gray-200 border-black border-2 rounded-3xl p-4 mr-5' 
                                   placeholder='Your Name' 
                                   type='text'
                                   id='name'
                                   name='name'
                                   required
                                
                            />
                            <input className='bg-gray-200 border-black border-2 rounded-3xl p-4 mr-5' 
                                   placeholder='Your Email' 
                                   type='email'
                                   id='email'
                                   name='email'
                                   required
                            />
                            <textarea className='bg-gray-200 border-black border-2 rounded-3xl p-4 mr-5 h-[300px] '
                                   placeholder='Enter Your Message'
                                   name='message'
                                   id='message'
                                   required
                            />
                            <button className='bg-red-600 text-white font-bold w-[200px] h-[50px] rounded-full'> Submit Form </button>
                            {result && <p className="mt-4 text-center text-black text-xl">{result}</p>}
                        </form>
                    </div>
                </section>
            </main>
            <MainFooter />
        </div>
    )
}

export default ContactPage