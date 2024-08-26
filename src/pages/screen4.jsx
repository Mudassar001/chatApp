import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/frame-component";
import Chat1 from "../components/chat1";
import "./screen4.css";

const Screen4 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/screen-03");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/screen-02");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="screen-04">
      <main className="frame-main">
        <div className="frame-parent4">
          <div className="frame-wrapper2">
            <div
              className="catchy-and-short-hero-headline-frame"
              onClick={onFrameContainerClick2}
            >
              <div className="catchy-and-short5">b</div>
            </div>
          </div>
          <nav className="frame-nav">
            <FrameComponent
              propBackgroundColor="#825fe4"
              frame22="/frame-22@2x.png"
              propHeight="48px"
              propWidth="48px"
              profile="Profile"
              onFrameContainerClick={onFrameContainerClick}
            />
            <FrameComponent
              propBackgroundColor="#825fe4"
              frame22="/frame-22-11.svg"
              propHeight="32px"
              propWidth="32px"
              profile="Chats"
              onFrameContainerClick={onFrameContainerClick1}
            />
            <FrameComponent
              propBackgroundColor="rgba(245, 245, 247, 0.2)"
              frame22="/frame-22-21@2x.png"
              propHeight="32px"
              propWidth="32px"
              profile="Setting"
            />
          </nav>
        </div>
        <section className="frame-section">
          <div className="frame-parent5">
            <div className="bxsearch-group">
              <img className="bxsearch-icon1" alt="" src="/bxsearch.svg" />
              <a className="search-setting">Search Setting</a>
            </div>
            <div className="frame-wrapper3">
              <div className="general-parent">
                <a className="general">General</a>
                <div className="chat-parent1">
                  <div className="chat">
                    <img
                      className="chat-child"
                      alt=""
                      src="/ellipse-3@2x.png"
                    />
                    <div className="frame-parent6">
                      <div className="friends-forever-wrapper">
                        <a className="friends-forever">Language</a>
                      </div>
                      <div className="hahahahah-parent">
                        <div className="hahahahah">Hahahahah!</div>
                        <img
                          className="vector-icon2"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <div className="today-952pm-parent">
                      <a className="today-952pm">English</a>
                      <img
                        className="status-icon"
                        alt=""
                        src="/status-icon.svg"
                      />
                    </div>
                  </div>
                  <div className="chat-list-divider" />
                  <Chat1
                    showEllipseIcon={false}
                    propMinWidth="unset"
                    friendsForever="Privacy"
                    propTextDecoration="none"
                    propDisplay="inline-block"
                    propMinWidth1="67px"
                    propMinWidth2="unset"
                    propHeight="19px"
                    propWidth="0px"
                    showFrameDiv={false}
                    propAlignSelf="unset"
                    propWidth1="416px"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="unset"
                    propDisplay1="unset"
                  />
                  <div className="chat-list-divider" />
                  <Chat1
                    showEllipseIcon={false}
                    propMinWidth="unset"
                    friendsForever="Chat"
                    propTextDecoration="unset"
                    propDisplay="inline-block"
                    propMinWidth1="42px"
                    propMinWidth2="unset"
                    propHeight="19px"
                    propWidth="0px"
                    showFrameDiv={false}
                    propAlignSelf="unset"
                    propWidth1="416px"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="unset"
                    propDisplay1="unset"
                  />
                  <div className="chat-list-divider" />
                  <Chat1
                    showEllipseIcon={false}
                    propMinWidth="unset"
                    friendsForever="Backup"
                    propTextDecoration="unset"
                    propDisplay="inline-block"
                    propMinWidth1="66px"
                    today952pm="ON"
                    propMinWidth2="23px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv={false}
                    propAlignSelf="unset"
                    propWidth1="416px"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="unset"
                    propDisplay1="unset"
                  />
                  <div className="chat-list-divider" />
                  <Chat1
                    showEllipseIcon={false}
                    propMinWidth="unset"
                    friendsForever="Notification"
                    propTextDecoration="unset"
                    propDisplay="inline-block"
                    propMinWidth1="106px"
                    today952pm="ON"
                    propMinWidth2="23px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv={false}
                    propAlignSelf="unset"
                    propWidth1="416px"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="unset"
                    propDisplay1="unset"
                  />
                  <div className="chat-list-divider" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Screen4;
