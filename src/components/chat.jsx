import PropTypes from "prop-types";
import "./chat.css";

const Chat = ({ className = "" }) => {
  return (
    <header className={`chat2 ${className}`}>
      <div className="chat-header">
        <img
          className="chat-profile-picture"
          loading="lazy"
          alt=""
          src="/ellipse-3@2x.png"
        />
        <div className="chat-header-info">
          <div className="chat-header-name">
            <div className="friends-forever-container">
              <a className="friends-forever2">Friends Forever</a>
            </div>
            <div className="frame-parent10">
              <div className="ellipse-wrapper">
                <div className="frame-child10" />
              </div>
              <a className="online">{`5 Online `}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-actions">
        <div className="chat-action-icons">
          <img
            className="ciphone-outline-icon"
            loading="lazy"
            alt=""
            src="/ciphoneoutline.svg"
          />
          <img
            className="ciphone-outline-icon"
            loading="lazy"
            alt=""
            src="/fluentvideo16regular.svg"
          />
          <img
            className="ciphone-outline-icon"
            loading="lazy"
            alt=""
            src="/bithreedotsvertical.svg"
          />
        </div>
      </div>
    </header>
  );
};

Chat.propTypes = {
  className: PropTypes.string,
};

export default Chat;
