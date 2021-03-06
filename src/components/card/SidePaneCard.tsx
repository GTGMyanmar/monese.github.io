import UnstyledLink from '../links/UnstyledLink';

export default function SidePaneCard() {
  const dummyData = {
    title: 'Spyder-Man - Far From Home',
    imdbRating: 8.5,
    releaseYear: 2020,
    poster:
      '/images/posters/movies/spyder-man-far-from-home/spyder-man-far-from-home-small.png',
    route: '/movies/spyder-man-far-from-home',
  };

  return (
    <UnstyledLink href={dummyData.route} className='text-mnWhite block ml-4'>
      <div className='flex space-x-2'>
        <img src={dummyData.poster} width={110} height={170} alt={''} />
        <div className='pt-2'>
          <p>
            {dummyData.title} ({dummyData.releaseYear})
          </p>
          <p>IMDb {dummyData.imdbRating}</p>
        </div>
      </div>
    </UnstyledLink>
  );
}
