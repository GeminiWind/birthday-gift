import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ImageViewer = ({ isOpen, images, onClose }) => {
  const [index, setIndex] = useState(0);

  if (isOpen) {
    return (
      <Lightbox
        mainSrc={images[index]}
        nextSrc={images[(index + 1) % images.length]}
        prevSrc={images[(index + images.length - 1) % images.length]}
        onCloseRequest={onClose}
        onMovePrevRequest={() =>
          setIndex((index + images.length - 1) % images.length)
        }
        onMoveNextRequest={() => setIndex((index + 1) % images.length)}
      />
    );
  }

  return <></>;
};

export default ImageViewer;
