import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";
import PodcastList from "../components/PodcastList";

const EpisodesPage = () => {
    return (
        <div className='flex flex-col h-screen bg-MainGold'>
            <MainHeader />
            <main className='flex-grow'>
                <section className='bg-MainGold flex flex-col'>
                <div className='flex flex-col mb-32'>
                    <PodcastList />
                 </div>
                </section>
            </main>
            <MainFooter />
        </div>
    )
}

export default EpisodesPage