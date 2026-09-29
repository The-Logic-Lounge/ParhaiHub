import React from 'react'

const Input = ({label ,placeholder,value,onChange}) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[#2B2D2F] ml-7 font-bold'>{label}</label>
      <input type="text" name="inputField" placeholder={placeholder} value={value} onChange={onChange}
      className="focus:border-[#C86D42] outline-none placeholder:text-[#555555] mt-3 py-3 px-7 border-2 border-[#C86D42]/40 text-[#2B2D2F] bg-[#F5EDE8] rounded-md w-80">
      </input>
    </div>
  )
}

export default Input
