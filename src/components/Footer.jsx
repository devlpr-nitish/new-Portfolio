import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between flex-wrap p-6 md:p-12 text-sm md:text-lg mt-12 '>
        <div className='space-y-4'>
            <h3 className='text-xl text-gray-200 '>Made with ❤️ by Nitish</h3>
            {/* <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="#"><FaGithubSquare /></a>
                <a href="#"><FaInstagram /></a>
            </div> */}

        </div>  

        <p className='text-gray-400'>@ nk3227610@gmail.com</p>
        
    </div>
  )
}

export default Footer