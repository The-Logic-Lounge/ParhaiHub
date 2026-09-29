import React, { useState } from 'react';

const InputUpload = ({ label, placeholder,value,onChange}) => {
 


  return (
      <div>
      <label className='text-[#2B2D2F] ml-7 font-bold'>{label}</label>
      <div className="mt-3 relative">
      
        <input
          type="file"
          accept="image/jpeg, image/png, application/pdf" 
          className="absolute inset-0 z-50 opacity-0 cursor-pointer"
          onChange={onChange}
        />
       
        <div className="relative z-0 flex items-center justify-center w-80 py-3 px-7 border-2 border-[#C86D42]/40 text-[#2B2D2F] bg-[#F5EDE8] rounded-md cursor-pointer">
          <span className='mr-28 text-[#555555]'>
            {value ? value.name : placeholder}
          </span>
          <span className=' bg-[#C86D42] text-white p-[0.4rem] rounded-sm absolute right-2'>Choose File</span>
        </div>
      </div>
    </div>
  );

}

export default InputUpload;

