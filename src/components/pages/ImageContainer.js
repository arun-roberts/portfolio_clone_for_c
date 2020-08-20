import React from "react";
import useIntersectionObserver from "../hooks/use-intersection-observer";
// import "../../styling/image-container.css";

const ImageContainer = props => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    }
  });
return (
    <div
      ref={ref}
      className="image-container"
    >
      <img 
        className="image" 
        loading="lazy" 
        src={props.src} 
        alt={props.alt} 
        height={props.height}
        width={props.width}
      />
      <div 
        className="fadeAway"
        style={{ background: `${ isVisible ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)' }`}}
      ></div>
    </div>
  );
};
export default ImageContainer;