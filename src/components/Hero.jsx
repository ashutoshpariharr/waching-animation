import Lottie from 'react-lottie';
import animationData from "../assets/lottie file/animationData.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function Hero() {
  return (
    <>
    <div className="container">
      <div className="right-hero">
        <h1>
         Revitalize Your <br /> Clothes with Expert <br />
         <span>Laundary Services!</span>
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Deleniti natus quos aliquam excepturi dicta quia laudantium <br /> fugiat, quas repudiandae cum possimus ipsam maxime, tempore <br /> nobis consequatur expedita saepe esse hic.
        </p>
        {/* <button>Book Service Today!</button> */}
        <button className="middleText-btn">Book Service Today!</button>
      </div>
      <div className="left-hero">
        <Lottie options={defaultOptions} />
      </div>

    </div>
      </>
  );
}

export default Hero;
