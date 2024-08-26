import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./copy-component.css";

const CopyComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/screen-02");
  }, [navigate]);

  return (
    <div className={`copy-component ${className}`}>
      <div className="heading-container">
        <h1 className="sign-up-heading">Sign In</h1>
        <div className="subheading">Join the Community!</div>
      </div>
      <form className="form">
        <div className="input">
          <div className="input-form">
            <div className="text-container">
              <div className="placeholder-text">Enter your email</div>
            </div>
          </div>
          <div className="input-form">
            <div className="text-container">
              <div className="placeholder-text1">Enter your password</div>
            </div>
          </div>
        </div>
        <div className="button" onClick={onButtonContainerClick}>
          <div className="text-container2">
            <div className="cta">Sign in with Email</div>
          </div>
        </div>
      </form>
      <div className="separator">
        <div className="line-wrapper">
          <div className="line" />
        </div>
        <div className="or">or</div>
        <div className="line-wrapper">
          <div className="line" />
        </div>
      </div>
      <div className="by-continuing-you">Create New Account</div>
    </div>
  );
};

CopyComponent.propTypes = {
  className: PropTypes.string,
};

export default CopyComponent;
