"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import PodcastBox from './PodcastBox';

function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [guestFilter, setGuestFilter] = useState('');
  const [allGuests, setAllGuests] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get('/api/podcasts');
        setPodcasts(response.data);
        const guests = [...new Set(response.data.flatMap(podcast => podcast.guests.split(', ')))];
        setAllGuests(guests);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };
    fetchPodcasts();
  }, []);

  const loadMore = () => {
    setDisplayCount(prevCount => prevCount + 5);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setDisplayCount(5);
  };

  const handleSort = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleGuestFilter = (event) => {
    setGuestFilter(event.target.value);
    setDisplayCount(5);
  };

  const filteredAndSortedPodcasts = podcasts
    .filter(podcast => 
      (podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       podcast.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (guestFilter === '' || podcast.guests.includes(guestFilter))
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.publication_date) - new Date(b.publication_date);
      } else {
        return new Date(b.publication_date) - new Date(a.publication_date);
      }
    });

  return (
    <section className='container'>
      <h1 className='text-text text-4xl font-black mr-24 ml-24 mt-40'>Our Episodes</h1>
      <div className="mr-24 ml-24 mt-10 flex flex-col items-center lg:flex lg:flex-row lg:items-center space-x-4">
        <input
          type="text"
          placeholder="Search episodes..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded flex-grow"
        />
        <button 
          onClick={handleSort} 
          className="bg-DarkGold text-black font-bold py-2 px-4 rounded hover:bg-MainRed duration-500"
        >
          Sort {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
        <select 
          onChange={handleGuestFilter} 
          value={guestFilter} 
          className="p-2 border rounded"
        >
          <option value="">All</option>
          {allGuests.map(guest => (
            <option key={guest} value={guest}>{guest}</option>
          ))}
        </select>
      </div>
      <div className="mr-24 ml-24 mt-10 flex flex-col">
        {filteredAndSortedPodcasts.slice(0, displayCount).map((podcast) => (
          <PodcastBox key={podcast.id} podcast={podcast} />
        ))}
      </div>
      {displayCount < filteredAndSortedPodcasts.length && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={loadMore}
            className="bg-SecondaryRed text-white font-bold py-2 px-4 rounded hover:bg-MainRed duration-500"
          >
            More Episodes
          </button>
        </div>
      )}
    </section>
  );
}

export default PodcastList;