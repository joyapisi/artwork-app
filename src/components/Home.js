import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { fetchArtworks } from '../redux/home/homeSlice';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();
  const { artworks, isLoading } = useSelector((store) => store.artworks);
  const [searchArtwork, setSearchArtwork] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  const filterArtworks = artworks.filter((artwork) => artwork.artist_display
    .toLowerCase()
    .includes(searchArtwork.toLocaleLowerCase()));

  if (isLoading) {
    return <h5>Artworks Loading...</h5>;
  }

  const handleClickedArtwork = (artwork) => {
    navigate(`/Details/${artwork.title.toLowerCase()}`, { state: { artwork } });
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

      <div>
        {artworks.map((artwork) => (
          <div key={artwork.id}>
            <h2>{artwork.title}</h2>
            <h2>{artwork.artist_display}</h2>
            <h2>{artwork.dimensions}</h2>
            <h2>{artwork.date_display}</h2>
            <h2>{artwork.place_of_origin}</h2>
          </div>
        ))}
        {filterArtworks.map((artwork) => (
          <div
            className="Artwork-card"
            key={artwork.id}
            onClick={() => { handleClickedArtwork(artwork); }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleClickedArtwork(artwork);
              }
            }}
            role="button"
            tabIndex={0}
          >

            <h2 className="symbol">{artwork.symbol}</h2>
            <p className="change">
              {artwork.percent_change_1h < 0 ? (
                <>
                  <FaChevronCircleLeft style={{ color: 'red' }} />
                  <span style={{ color: 'red' }}>
                    {Math.abs(artwork.percent_change_1h)}
                    %
                  </span>
                </>
              ) : (
                <>
                  <BsArrowRightCircle style={{ color: 'green' }} />
                  <span style={{ color: 'green' }}>
                    {artwork.percent_change_1h}
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
