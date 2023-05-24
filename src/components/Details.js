import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaChevronDown, FaChevronUp, FaBitcoin } from 'react-icons/fa';
import { GoChevronLeft } from 'react-icons';
import '../styles/details.css';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artwork } = artwork.artist_display;

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
        <GoChevronLeft size={32} />
      </div>
      <div className="header">
        <h4>{artwork.artist_display}</h4>
      </div>

      <div className="details-container" key={artwork.id}>
        <h3 className="details-title">coin details:</h3>
        <div>
          <p className="market-cap details">
            market cap: $
            {Number(artwork.market_cap_usd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="volume details">
            volume(24h): $
            {Number(artwork.volume24a).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="total-supply details">
            total supply:
            {' '}
            {Number(artwork.tsupply).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="change details">
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
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
