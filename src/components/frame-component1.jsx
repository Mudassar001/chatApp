import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`chat-parent2 ${className}`}>
      <img className="chat-icon" loading="lazy" alt="" src="/chat.svg" />
      <div className="melon-musk-parent">
        <h2 className="melon-musk">Melon Musk</h2>
        <img
          className="clarityedit-solid-icon"
          loading="lazy"
          alt=""
          src="/clarityeditsolid.svg"
        />
      </div>
      <div className="frame-child11" />
      <div className="frame-parent11">
        <div className="about-parent">
          <a className="about">About</a>
          <img
            className="clarityedit-solid-icon1"
            loading="lazy"
            alt=""
            src="/clarityeditsolid-1.svg"
          />
        </div>
        <div className="i-am-a">I am a student from Btech CSE hahahah</div>
      </div>
      <div className="frame-child11" />
      <div className="frame-parent12">
        <div className="about-parent">
          <a className="email">Email</a>
          <img
            className="clarityedit-solid-icon1"
            loading="lazy"
            alt=""
            src="/clarityeditsolid-1.svg"
          />
        </div>
        <div className="btechgmailcom">BTECH@gmail.com</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
