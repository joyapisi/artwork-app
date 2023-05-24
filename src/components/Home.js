import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
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
      <div className="flex header">
        <h3 className="title">Art institute of Chicago</h3>
        <form className="flex">
          <input
            className="search"
            type="search"
            value={searchArtwork}
            name="q"
            placeholder="Search Artwork"
            onChange={(e) => setSearchArtwork(e.target.value)}
          />
          <input className="submt-search" type="submit" />
        </form>
      </div>
      <div className="artwork-wrapper">
        {artworks.map((artwork) => (
          <div
            className="flex each-artwork"
            key={artwork.id}
          >
            <div className="right-arrow">
              <BsArrowRightCircle />
            </div>
            <p>{artwork.title}</p>
            <p>{artwork.date_display}</p>
            {/* <p>{artwork.place_of_origin}</p>
            <p>{artwork.artist_display}</p>
            <p>{artwork.dimensions}</p>
            <p>{artwork.medium_display}</p>
             */}
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

            {/* <h2 className="symbol">{artwork.symbol}</h2>
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
            </p> */}
          </div>
        ))}
      </div>
    </>

  );
}

export default Home;
