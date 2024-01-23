import { useState } from "react";
import Close from "../../assets/close.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FiExternalLink } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

const ProjectItem = ({
  img,
  title,
  details,
  description,
  languages,
  coverImg,
  previewLink,
  sourceLink,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  return (
    <div className="project__item">
      <img src={coverImg} alt="project image" className="project__img" />

      <div className="project__hover" onClick={toggleModal}>
        <h3 className="project__title">{title}</h3>
      </div>
      {modal && (
        <div className="project__modal">
          <div className="project__modal-content">
            <img
              src={Close}
              alt="close icon"
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <p className="project__description">{description}</p>
            <div className="language">
              {languages.map((language, index) => (
                <p key={index}>#{language}</p>
              ))}
            </div>

            <Carousel showArrows={true} showThumbs={false}>
              {img.map((image, index) => (
                <img
                  src={image}
                  alt={`modalImage${index}`}
                  className="modal__img"
                  key={index}
                />
              ))}
            </Carousel>
            <div className="project__view-btn">
              <button>
                <a href={previewLink} target="_blank" rel="noreferrer">
                  Visit{" "}
                  <span>
                    <FiExternalLink />
                  </span>
                </a>
              </button>
              <button>
                <a href={sourceLink} target="_blank" rel="noreferrer">
                  View Source{" "}
                  <span>
                    <FaEye />
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
