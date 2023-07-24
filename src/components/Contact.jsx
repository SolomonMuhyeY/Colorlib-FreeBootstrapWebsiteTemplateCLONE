import React, { useState } from "react";
import FooterSection from "./FooterSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    textArea: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSumbmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      textArea: "",
    });
  };
  return (
    <div>
      <div className='container mx-auto text-center w-full  lg:w-3/4 p-6 md:p-12 lg:p-20 mb-28'>
        <h1 className='text-brightRed text-2xl sm:text-4xl lg:text-6.5xl leading-loose word-spacing-4 lg:px-24 font-bold font-sans mb-12'>
          Contact Us
        </h1>
        <p className='leading-8 hidden sm:block'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          incidunt vitae fugit harum architecto doloribus facere omnis
          recusandae pariatur porro quis alias quas animi, dignissimos fuga ab
          reprehenderit repudiandae ea?
        </p>
        <p className='leading-8 block sm:hidden'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem
          nulla quos suscipit laborum fugit aspernatur rem pariatur illo.
        </p>
      </div>
      <div className='bg-white block px-12 sm:px-24 gap-16 justify-center items-center lg:flex lg:px-20 lg:py-28'>
        <form onSubmit={handleSumbmit} method='post'>
          <div className='lg:flex lg:space-x-8'>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='First Name'
              onFocus={(e) => {
                e.target.style.borderColor = "rgb(240, 125, 125)";
                e.target.style.outline = "none";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "gray";
              }}
              className='h-12 w-full pl-3 pr-20 font-light py-6 border-1 border-slate-600 rounded my-4 '
            />
            <input
              type='text'
              name='lastName'
              onChange={handleChange}
              value={formData.lastName}
              placeholder='Last Name'
              onFocus={(e) => {
                e.target.style.borderColor = "rgb(240, 125, 125)";
                e.target.style.outline = "none";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "gray";
              }}
              className='h-12 w-full pl-3 pr-20 font-light py-6 border-1 border-slate-600 rounded my-4'
            />
          </div>
          <br />
          <textarea
            name='textArea'
            onChange={handleChange}
            value={formData.textArea}
            id=''
            cols='30'
            rows='10'
            placeholder='Write Your Massage here.'
            onFocus={(e) => {
              e.target.style.borderColor = "rgb(240, 125, 125)";
              e.target.style.outline = "none";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "gray";
            }}
            className='relative w-full px-4 py-5 border-1 rounded border-slate-600'
          />
          <button className=' w-full py-3 my-3 rounded-3xl bg-brightRed text-white lg:w-1/2 text-center transition-all duration-500 hover:bg-BrighterRed'>
            Send Message
          </button>
        </form>
        <div className='w-full lg:w-1/4 px-2 py-12'>
          <h1 className='text-3xl py-8'>Contact info</h1>
          <b className='font-semibold pt-3 block'>Address</b>
          <p className='text-simpleLight'>
            34 Street Name, City Name Here, United States
          </p>
          <b className='font-semibold pt-3 block'>Phone</b>
          <p className='text-simpleLight'>+1 242 4942 290</p>
          <b className='font-semibold pt-3 block'>Email</b>
          <p className='text-simpleLight'>info@yourdomain.com</p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
