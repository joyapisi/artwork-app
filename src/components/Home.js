import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { fetchArtworks } from '../redux/home/homeSlice';
// import Details from './Details';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { artworks, isLoading } = useSelector((store) => store.Artworks);
  const [searchArtwork, setSearchArtwork] = useState('');
  // const [clickedArtwork, setclickedArtwork] = useState(null);

  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  const filterArtworks = artworks.filter((Artwork) => Artwork.artist_display
    .toLowerCase()
    .includes(searchArtwork.toLocaleLowerCase()));

  if (isLoading) {
    return <h5>Artworks Loading...</h5>;
  }

  const handleClickedArtwork = (Artwork) => {
    navigate(`/Details/${Artwork.title.toLowerCase()}`, { state: { Artwork } });
  };

  return (
    <>
      <h1 className="title">Art institute of Chicago</h1>
      <form className="flex logo-header">
        <label htmlFor="search-artwork">
          <input
            type="search"
            value={searchArtwork}
            name="q"
            placeholder="Search Artwork"
            onChange={(e) => setSearchArtwork(e.target.value)}
          />
          <input type="submit" />
        </label>
      </form>

      <div className="artwork-container">
        {filterArtworks.map((Artwork) => (
          <div
            className="Artwork-card"
            key={Artwork.id}
            onClick={() => { handleClickedArtwork(Artwork); }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleClickedArtwork(Artwork);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <h2 className="symbol">{Artwork.symbol}</h2>
            <p className="change">
              {Artwork.percent_change_1h < 0 ? (
                <>
                  <FaChevronCircleLeft style={{ color: 'red' }} />
                  <span style={{ color: 'red' }}>
                    {Math.abs(Artwork.percent_change_1h)}
                    %
                  </span>
                </>
              ) : (
                <>
                  <BsArrowRightCircle style={{ color: 'green' }} />
                  <span style={{ color: 'green' }}>
                    {Artwork.percent_change_1h}
                    %
                  </span>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
