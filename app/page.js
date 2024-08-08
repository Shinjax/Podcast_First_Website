import Image from 'next/image'
import { FaYoutube, FaTwitter, FaTwitch } from "react-icons/fa";
import MainHeader from './components/Header';
import MainFooter from './components/Footer'
import PodcastList from './components/PodcastList';
import Socials from './components/Socials';

export default function Home() { 
  return (
    <div className='flex flex-col h-screen bg-MainGold'>
      <MainHeader />
      <main className='flex-grow'>
        {/* {Hero START} */}
        <section className='relative h-[75vh]'>
          <div className='absolute inset-0'>
              <Image
                src='/Images/bg.png'
                alt='Logo'
                layout='fill'
                quality={100}
              />
          </div>
        </section>
        {/* Hero end */}
        <section className='bg-MainGold flex flex-col'>
            <PodcastList />
            <Socials />
        </section>
      </main>
      <MainFooter />
    </div>
  )
}
