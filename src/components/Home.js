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

  const filterArtworks = artworks.filter((artwork) => artwork.title
    .toLowerCase()
    .includes(searchArtwork.toLocaleLowerCase()));

  if (isLoading) {
    return <h5>Artworks Loading...</h5>;
  }

  const handleClickedArtwork = (artwork) => {
    navigate(`/details/${artwork.title.toLowerCase()}`, { state: { artwork } });
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
      <table className="artwork-wrapper">
        <tbody>
          {filterArtworks.map((artwork) => (
            <tr
              className="flex each-artwork"
              key={artwork.id}
              onClick={() => {
                handleClickedArtwork(artwork);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleClickedArtwork(artwork);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="right-arrow">
                <button
                  style={{ color: 'white' }}
                  type="button"
                  aria-label="Go back"
                >
                  <BsArrowRightCircle />
                </button>
              </div>
              <p>{artwork.title}</p>
              <p>{artwork.date_display}</p>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
