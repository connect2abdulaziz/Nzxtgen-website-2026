import { useRef, useState, useEffect } from "react";
import "./CurrentPromotions.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const CurrentPromotions = () => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true); // Add this line

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPromotions(items);
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
      setLoading(false); // Set loading to false after fetch
    };
    fetchPromotions();
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      const cardElement = cardRef.current;
      const style = window.getComputedStyle(cardElement);
      const margin =
        parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      const fullCardWidth = cardElement.offsetWidth + margin;
      setCardWidth(fullCardWidth);
    }
  }, [promotions]);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  const openModal = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="current-promotions">
      <div className="promotions-header">
        <h2>CURRENT PROMOTIONS</h2>
      </div>

      <button className="slider-arrow left-arrow" onClick={slideLeft}>
        &#9664;
      </button>
      <button className="slider-arrow right-arrow" onClick={slideRight}>
        &#9654;
      </button>

      <div className="promotions-slider" ref={sliderRef}>
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <div className="slider-item skeleton" key={idx}>
                <div className="item-image skeleton-img" />
                <div className="item-details">
                  <div className="item-name skeleton-text" />
                  <div className="item-price skeleton-text" />
                  <div className="skeleton-btn" />
                </div>
              </div>
            ))
          : promotions.map((item, index) => (
              <div
                className="slider-item"
                key={item.id}
                ref={index === 0 ? cardRef : null}
              >
                <div className="item-image">
                  <img src={item.img} alt={item.name} loading="lazy" decoding="async" />
                </div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${item.price}</div>
                  <button
                    className="view-details-btn"
                    onClick={() => openModal(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
      </div>

      <div className="terms">
        <p>Terms & Conditions Apply</p>
      </div>

      {isModalOpen && modalItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={modalItem.img} alt={modalItem.name} />
              </div>
              <div className="modal-info">
                <h2 className="modal-title">{modalItem.name}</h2>
                <h4>Package Includes:</h4>
                <ul className="package-list">
                  {modalItem.packageIncludes?.map((pkg, idx) => (
                    <li key={idx}>{pkg}</li>
                  ))}
                </ul>
                <h4>Features:</h4>
                <ul className="feature-list">
                  {modalItem.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="modal-price">${modalItem.price}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentPromotions;
