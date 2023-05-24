import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/details.css';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artwork } = location.state;

  const handleBackArrow = () => {
    navigate('/');
  };

  return (
    <>
      <div
        className="goback-arrow"
        onClick={() => { handleBackArrow(); }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleBackArrow();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <FaRegArrowAltCircleLeft size={32} />
      </div>
      <div className="header">
        <h4>{artwork.artist_display}</h4>
      </div>

      <div
        className="details-wrapper"
        key={artwork.id}
      >
        <h3 className="details-title">Artworks Details</h3>
        <div>
          <p className="place_of_origin">
            Place of Origin:
            {artwork.place_of_origin}
          </p>
          <p className="dimensions">
            Dimensions:
            {artwork.dimensions}
          </p>
          <p className="medium_used">
            Medium Used:
            {artwork.medium_display}
          </p>
          <p className="medium_used">
            Medium Used:
            {artwork.category_titles}
          </p>

          {/* <p className="change details">
            1h %:
            {' '}
            {artwork.percent_change_1h < 0 ? (
              <>
                <FaChevronDown style={{ color: 'red' }} />
                <span style={{ color: 'red' }}>
                  {Math.abs(artwork.percent_change_1h)}
                  %
                </span>
              </>
            ) : (
              <>
                <FaChevronUp style={{ color: 'green' }} />
                <span style={{ color: 'green' }}>
                  {artwork.percent_change_1h}
                  %
                </span>
              </>
            )}
          </p>
          <p className="change details">
            24h %:
            {' '}
            {artwork.percent_change_24h < 0 ? (
              <>
                <FaChevronDown style={{ color: 'red' }} />
                <span style={{ color: 'red' }}>
                  {Math.abs(artwork.percent_change_24h)}
                  %
                </span>
              </>
            ) : (
              <>
                <FaChevronUp style={{ color: 'green' }} />
                <span style={{ color: 'green' }}>
                  {artwork.percent_change_24h}
                  %
                </span>
              </>
            )}
          </p>
          <p className="change details">
            7d %:
            {' '}
            {artwork.percent_change_7d < 0 ? (
              <>
                <FaChevronDown style={{ color: 'red' }} />
                <span style={{ color: 'red' }}>
                  {Math.abs(artwork.percent_change_7d)}
                  %
                </span>
              </>
            ) : (
              <>
                <FaChevronUp style={{ color: 'green' }} />
                <span style={{ color: 'green' }}>
                  {artwork.percent_change_7d}
                  %
                </span>
              </>
            )}
          </p>
          <p className="price-btc details">
            price:
            {' '}
            <FaBitcoin />
            {Number(artwork.price_btc).toFixed(2)}
          </p>
          <p className="price-usd details">
            price: $
            {Number(artwork.price_usd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Details;
