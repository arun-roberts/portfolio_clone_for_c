import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ImageContext from '../context/ImageContext'

function Modal() {
    const { images } = useContext(ImageContext)
    let history = useHistory();
    let { id } = useParams();
    let image = images[parseInt(id, 10)];

    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <img style={{ width: '100%', height: '100%' }} src={image.url} />
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    );
  }

  export default Modal