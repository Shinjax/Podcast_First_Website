import { FaYoutube, FaSpotify, FaApple, FaPatreon, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from 'next/image';

const MainFooter = () => {
    return (
      <footer className='bg-MainGold flex flex-col items-center justify-center min-h-150'>
        <section className='relative h-3/5 flex flex-col items-center justify-center text-text font-semibold border-2 border-black p-1 w-full'>
          <div className='absolute inset-0'>
            <Image 
                src='/Images/SteakandEggsSet.jpg' 
                alt='Background'
                layout='fill'
                objectFit='cover'
                quality={100}
                className='z=0 blur-[2px]' 
                
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className='relative flex flex-col items-center h-1/2 w-2/5'>
            <h1 className='text-lg font-extrabold mb-5 mx-5 text-white'>SUBSCRIBE</h1>
            <h2 className='mx-5 text-center text-white'>To get notifications to watch the most recent episodes please consider following us on youtube or our streaming
                platforms!
            </h2>
            <h2 className='mx-5 mt-5 text-center text-white'>
                To get exclusive bonus episodes please subscribe to us on Patreon!
            </h2>
          </div>
          <div className='relative flex flex-row space-x-4 mt-20 lg:mt-5'>
            <a href='https://www.youtube.com/@steakandeggspod' target='_blank' rel='noopener norefferer'>
                <div className='rounded-full p-2'>
                    <FaYoutube className='text-red-400 text-4xl'/>
                </div>
            </a>
            <a href='https://open.spotify.com/show/6Gv6TCjLyIZQ4hPEkwtv4l' target='_blank' rel='noopener norefferer'>
                <div className='rounded-full p-2'>
                    <FaSpotify className='text-green-600 text-4xl'/>
                </div>
            </a>
            <a href='https://podcasts.apple.com/us/podcast/steak-eggs-podcast/id1672630146' target='_blank' rel='noopener norefferer'>
                <div className='rounded-full p-2'>
                    <FaApple className='text-white text-4xl'/>
                </div>
            </a>
            <a href='https://www.youtube.com/@steakandeggspod' target='_blank' rel='noopener norefferer'>
                <div className='rounded-full p-2'>
                    <FaPatreon className='text-patreon text-4xl'/>
                </div>
            </a>    
          </div>
        </section>
        <section className='h-2/5 bg-zinc-900 flex items-start justify-center text-text font-semibold border-2 border-black p-1 w-full'>
            <div className='flex flex-col items-center'>
                <h1 className='text-lg mx-5 mt-20 text-center text-white'>Follow Our Socials!</h1>
                <div className='flex flex-row space-x-4 mt-5'>
                    <a href='https://twitter.com/steakandeggs' target='_blank' rel='noopener norefferer'>
                        <div className='rounded-full p-2'>
                            <FaTwitter className='text-white text-4xl'/>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/steakandeggscast/?hl=en' target='_blank' rel='noopener norefferer'>
                        <div className='rounded-full p-2'>
                            <FaInstagram className='text-white text-4xl'/>
                        </div>
                    </a>
                    <a href='https://www.tiktok.com/@steakandeggspodcast' target='_blank' rel='noopener norefferer'>
                        <div className='rounded-full p-2'>
                            <FaTiktok className='text-white text-4xl'/>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section className='h-1/5 bg-black flex items-center justify-center text-text font-semibold border-2 border-black p-1 w-full'>
            <div className='flex flex-col justify-start text-center'>
                <h1 className='text-white text-center'>Developed by Adam</h1>
                <h1 className='text-white text-center'>This website is fanmade and I have no affiliations with the Steak and Eggs Podcast</h1>
            </div>
        </section>
      </footer>
    )
  }
  
  export default MainFooter
  