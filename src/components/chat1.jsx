import { useMemo } from "react";
import PropTypes from "prop-types";
import "./chat1.css";

const Chat1 = ({
  className = "",
  showEllipseIcon,
  propMinWidth,
  friendsForever,
  propTextDecoration,
  propDisplay,
  propMinWidth1,
  today952pm,
  propMinWidth2,
  propHeight,
  propWidth,
  showFrameDiv,
  propAlignSelf,
  propWidth1,
  propHeight1,
  propWidth2,
  propMinWidth3,
  propDisplay1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const friendsForeverStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propTextDecoration, propDisplay, propMinWidth1]);

  const today952pmStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      height: propHeight,
      width: propWidth,
    };
  }, [propMinWidth2, propHeight, propWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  const hahahahahStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth2,
      minWidth: propMinWidth3,
      display: propDisplay1,
    };
  }, [propHeight1, propWidth2, propMinWidth3, propDisplay1]);

  return (
    <div className={`chat1 ${className}`}>
      {showEllipseIcon && (
        <img
          className="chat-item"
          loading="lazy"
          alt=""
          src="/ellipse-3@2x.png"
        />
      )}
      <div className="frame-parent9" style={frameDiv1Style}>
        <div className="friends-forever-parent">
          <div className="friends-forever1" style={friendsForeverStyle}>
            {friendsForever}
          </div>
          <div className="today-952pm1" style={today952pmStyle}>
            {today952pm}
          </div>
        </div>
        {showFrameDiv && (
          <div className="hahahahah-group" style={frameDiv2Style}>
            <div className="hahahahah1" style={hahahahahStyle}>
              Hahahahah!
            </div>
            <img className="vector-icon3" alt="" src="/vector.svg" />
          </div>
        )}
      </div>
    </div>
  );
};

Chat1.propTypes = {
  className: PropTypes.string,
  showEllipseIcon: PropTypes.bool,
  friendsForever: PropTypes.string,
  today952pm: PropTypes.string,
  showFrameDiv: PropTypes.bool,

  /** Style props */
  propMinWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propDisplay1: PropTypes.any,
};

export default Chat1;
