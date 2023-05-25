import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaPaintBrush } from 'react-icons/fa';
import { ImFilePicture } from 'react-icons/im';
import { MdOutlinePlace } from 'react-icons/md';
import { GiResize } from 'react-icons/gi';
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
        className="flex details-wrapper"
        key={artwork.id}
      >
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
          <FaRegArrowAltCircleLeft size={20} />
        </div>

        <h3 className="details-title">Artworks Details</h3>
        <div className="stats">
          <p className="flex date_display">
            <ImFilePicture size={25} />
            Date:
            {artwork.date_display}
          </p>

          <p className="flex place_of_origin">
            <MdOutlinePlace size={25} style={{ backgroundColor: 'transparent' }} />
            Place of Origin:
            {artwork.place_of_origin}
          </p>
          <p className="flex dimensions">
            <GiResize size={25} />
            Dimensions:
            {artwork.dimensions}
          </p>
          <p className="flex medium_used">
            <FaPaintBrush size={25} />
            Medium Used:
            {artwork.medium_display}
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
