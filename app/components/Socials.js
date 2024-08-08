import Image from 'next/image'
import { FaYoutube, FaTwitter, FaTwitch } from "react-icons/fa";

const Socials = () => {
    return (
        <div className='bg-MainGold flex items-center justify-center mt-24 mb-32'>
            <div className='bg-DarkGold h-3/4 w-full mx-20'>
                <h1 className='text-left mx-20 my-20 text-4xl font-extrabold'>Hosts</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-20 justify-between text-center'>
                    <div className='flex flex-col items-center mb-8'>
                        <Image  
                            src='/Images/Asmongold.jpg' 
                            alt='Asmongold' 
                            width={299} 
                            height={169} 
                            quality={100}
                            className='rounded w-full h-auto max-w-[300px]' 
                        />
                        <h1 className='mt-5 text-xl sm:text-2xl lg:text-3xl font-extrabold'>Asmongold</h1>
                        <div className='flex flex-row space-x-2 sm:space-x-4 mt-3 sm:mt-5'>
                            <a href='https://www.youtube.com/@AsmonTV' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaYoutube className='text-red-600 text-lg sm:text-xl'/>
                                </div>
                            </a>
                            <a href='https://twitter.com/Asmongold' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaTwitter className='text-blue-400 text-lg sm:text-xl'/>
                                </div>
                            </a>
                            <a href='https://www.twitch.tv/zackrawrr' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaTwitch className='text-purple-600 text-lg sm:text-xl'/>
                                </div>
                            </a>
                        </div>
                    </div>
                
                    <div className='flex flex-col items-center mb-8'>
                        <Image
                            src='/Images/Emiru.jpg'
                            alt='Emiru'
                            width={300}
                            height={169}
                            quality={100}
                            className='rounded w-full h-auto max-w-[300px]'
                        />
                        <h1 className='mt-5 text-xl sm:text-2xl lg:text-3xl font-extrabold'>Emiru</h1>
                        <div className='flex flex-row space-x-2 sm:space-x-4 mt-3 sm:mt-5'>
                            <a href='https://www.youtube.com/@Emiru' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaYoutube className='text-red-600 text-lg sm:text-xl'/>
                                </div>
                            </a>
                            <a href='https://twitter.com/Emiru' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaTwitter className='text-blue-400 text-lg sm:text-xl'/>
                                </div>
                            </a>
                            <a href='https://www.twitch.tv/Emiru' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaTwitch className='text-purple-600 text-lg sm:text-xl'/>
                                </div>
                            </a>
                        </div>
                    </div>
                
                    <div className='flex flex-col items-center mb-8'>                  
                        <Image
                            src='/Images/Tectone.jpg'
                            alt='Tectone'
                            width={300}
                            height={169}
                            quality={100}
                            className='rounded w-full h-auto max-w-[300px]'
                        />
                        <h1 className='mt-5 text-xl sm:text-2xl lg:text-3xl font-extrabold'>Tectone</h1>
                        <div className='flex flex-row space-x-2 sm:space-x-4 mt-3 sm:mt-5'>
                            <a href='https://www.youtube.com/@Tectone' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaYoutube className='text-red-600 text-lg sm:text-xl'/>
                                </div>
                            </a>
                            <a href='https://twitter.com/Tectone' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaTwitter className='text-blue-400 text-lg sm:text-xl'/>
                                </div>
                            </a>
                            <a href='https://www.twitch.tv/Tectone' target='_blank' rel='noopener noreferrer'>
                                <div className='bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 duration-500'>
                                    <FaTwitch className='text-purple-600 text-lg sm:text-xl'/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Socials;