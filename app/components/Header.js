import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className="relative bg-MainRed p-10 flex items-center justify-between">
      <div className="flex items-center z-10">
        <Link href="/" className="text-text mr-4 hover:text-MainGold duration-300">
          <h1 className="text-lg ml-2 mb-5 font-bold">Steak&Eggs Podcast</h1>
        </Link>
      </div>
      <div className="mr-10 mb-5 z-10">
        <Link href="/" className="text-text mr-4 font-semibold hover:text-MainGold duration-200">
          Home
        </Link>
        <Link href="/Episodes" className="text-text mr-4 font-semibold hover:text-MainGold duration-200">
          Episodes
        </Link>
        <Link href="/Contact" className="text-text mr-4 font-semibold hover:text-MainGold duration-200">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;