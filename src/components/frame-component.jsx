import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({
  className = "",
  propBackgroundColor,
  frame22,
  propHeight,
  propWidth,
  profile,
  onFrameContainerClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const navigate = useNavigate();

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/screen-03");
  }, [navigate]);

  return (
    <div
      className={`profiles-parent ${className}`}
      onClick={onFrameContainerClick}
      style={frameDivStyle}
    >
      <div className="profiles">
        <img
          className="profiles-child"
          loading="lazy"
          alt=""
          src={frame22}
          style={frameIconStyle}
        />
      </div>
      <b className="profile">{profile}</b>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame22: PropTypes.string,
  profile: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default FrameComponent;
