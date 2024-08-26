import CopyComponent from "../components/copy-component";
import "./screen1.css";

const Screen1 = () => {
  return (
    <div className="screen-01">
      <div className="illustration">
        <div className="image-parent">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="overlay">
            <h1 className="catchy-and-short">bling</h1>
            <div className="catchy-and-short-hero-headline-wrapper">
              <div className="catchy-and-short1">b</div>
            </div>
            <h1 className="catchy-and-short2">
              Connect with the world effortlessly.
            </h1>
            <h3 className="catchy-and-short3">
              Connect instantly with friends and family across the globe. Share
              your thoughts, moments, and memories seamlessly
            </h3>
          </div>
        </div>
      </div>
      <div className="copy-component-wrapper">
        <CopyComponent />
      </div>
    </div>
  );
};

export default Screen1;
