import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/frame-component";
import Chat1 from "../components/chat1";
import Chat from "../components/chat";
import "./screen2.css";

const Screen2 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/screen-03");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/screen-04");
  }, [navigate]);

  const onFrameContainerClick3 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="screen-02">
      <main className="frame-parent">
        <div className="hero-content-parent">
          <div className="hero-content">
            <div
              className="catchy-and-short-hero-headline-container"
              onClick={onFrameContainerClick3}
            >
              <div className="catchy-and-short4">b</div>
            </div>
          </div>
          <div className="frame-group">
            <FrameComponent
              frame22="/frame-22@2x.png"
              profile="Profile"
              onFrameContainerClick={onFrameContainerClick}
            />
            <FrameComponent
              propBackgroundColor="rgba(245, 245, 247, 0.2)"
              frame22="/frame-22-1.svg"
              propHeight="32px"
              propWidth="32px"
              profile="Chats"
              onFrameContainerClick={onFrameContainerClick1}
            />
            <FrameComponent
              propBackgroundColor="unset"
              frame22="/frame-22-2@2x.png"
              propHeight="32px"
              propWidth="32px"
              profile="Setting"
              onFrameContainerClick={onFrameContainerClick2}
            />
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-container">
            <div className="bxsearch-parent">
              <img className="bxsearch-icon" alt="" src="/bxsearch.svg" />
              <a className="search">Search</a>
            </div>
            <div className="frame-div">
              <div className="chats-parent">
                <a className="chats">Chats</a>
                <div className="chat-parent">
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                  <div className="second-chat-separator" />
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                  <div className="second-chat-separator" />
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                  <div className="second-chat-separator" />
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                  <div className="second-chat-separator" />
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                  <div className="second-chat-separator" />
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                </div>
              </div>
              <div className="chats-parent">
                <h2 className="groups">Groups</h2>
                <div className="chat-group">
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                  <div className="second-chat-separator" />
                  <Chat1
                    showEllipseIcon
                    propMinWidth="240px"
                    friendsForever="Friends Forever"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    today952pm="Today, 9.52pm"
                    propMinWidth2="105px"
                    propHeight="unset"
                    propWidth="unset"
                    showFrameDiv
                    propAlignSelf="stretch"
                    propWidth1="unset"
                    propHeight1="unset"
                    propWidth2="unset"
                    propMinWidth3="93px"
                    propDisplay1="inline-block"
                  />
                  <div className="second-chat-separator" />
                  <Chat1
                    showEllipseIcon
                    friendsForever="Friends Forever"
                    today952pm="Today, 9.52pm"
                    showFrameDiv
                  />
                  <div className="second-chat-separator" />
                  <div className="ellipse-parent">
                    <img
                      className="ellipse-icon"
                      alt=""
                      src="/ellipse-4@2x.png"
                    />
                    <div className="frame-parent1">
                      <div className="mera-gang-parent">
                        <div className="mera-gang">Mera Gang</div>
                        <div className="yesterday-1231pm">
                          Yesterday, 12.31pm
                        </div>
                      </div>
                      <div className="kyuuuuu-parent">
                        <div className="kyuuuuu">Kyuuuuu???!</div>
                        <img className="vector-icon" alt="" src="/vector.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="second-chat-separator" />
                  <div className="ellipse-parent">
                    <img
                      className="ellipse-icon"
                      alt=""
                      src="/ellipse-4@2x.png"
                    />
                    <div className="frame-parent1">
                      <div className="mera-gang-parent">
                        <div className="mera-gang">Mera Gang</div>
                        <div className="yesterday-1231pm">
                          Yesterday, 12.31pm
                        </div>
                      </div>
                      <div className="kyuuuuu-wrapper">
                        <div className="kyuuuuu1">Kyuuuuu???!</div>
                      </div>
                    </div>
                  </div>
                  <div className="second-chat-separator" />
                  <div className="ellipse-parent">
                    <img
                      className="ellipse-icon"
                      alt=""
                      src="/ellipse-4@2x.png"
                    />
                    <div className="frame-parent1">
                      <div className="mera-gang-parent">
                        <div className="mera-gang">Mera Gang</div>
                        <div className="yesterday-1231pm">
                          Yesterday, 12.31pm
                        </div>
                      </div>
                      <div className="kyuuuuu-parent">
                        <div className="kyuuuuu">Kyuuuuu???!</div>
                        <img className="vector-icon" alt="" src="/vector.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-container">
          <Chat />
          <div className="frame-wrapper1">
            <div
              className="first-message-parent"
              data-scroll-to="frameContainer"
            >
              <div className="first-message">
                <div className="today-830pm">Today, 8.30pm</div>
                <div className="first-message-content">
                  <div className="hey-there">Hey There!</div>
                </div>
                <div className="first-message-content">
                  <a className="how-are-you">How are you?</a>
                </div>
              </div>
              <div className="previous-message">
                <div className="today-834pm">Today, 8.34pm</div>
                <div className="user-message">
                  <div className="message-content">
                    <div className="message-bubble">
                      <div className="user-message-content-parent">
                        <div className="user-message-content">
                          <div className="response-greeting-content">
                            <div className="hello">Hello!</div>
                          </div>
                          <div className="user-message-content-child" />
                        </div>
                        <div className="user-message-content">
                          <div className="i-am-fine-and-how-are-you-wrapper">
                            <div className="i-am-fine">
                              I am fine and how are you?
                            </div>
                          </div>
                          <div className="user-message-content-child" />
                        </div>
                      </div>
                      <div className="repeated-message">
                        <div className="today-834pm1">Today, 8.34pm</div>
                        <div className="user-message-content2">
                          <div className="response-greeting-content">
                            <div className="hello">Hello!</div>
                          </div>
                          <div className="user-message-content-inner" />
                        </div>
                        <div className="user-message-content2">
                          <div className="i-am-fine-and-how-are-you-wrapper">
                            <div className="i-am-fine">
                              I am fine and how are you?
                            </div>
                          </div>
                          <div className="user-message-content-inner" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="repeated-conversation">
                    <div className="greeting-message">
                      <div className="today-830pm">Today, 8.30pm</div>
                      <div className="first-message-content">
                        <div className="hey-there">Hey There!</div>
                      </div>
                      <div className="first-message-content">
                        <div className="how-are-you1">How are you?</div>
                      </div>
                    </div>
                    <div className="previous-message1">
                      <div className="today-834pm">Today, 8.30pm</div>
                      <div className="fourth-response-content">
                        <div className="hey-there">Hey There!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-child4" />
              <div className="frame-child5" />
              <div className="frame-child6" />
              <div className="frame-child7" />
              <div className="frame-child8" />
              <div className="frame-child9" />
              <div className="conversation-history">
                <div className="previous-user-message">
                  <div className="response-message">
                    <div className="message-content1">
                      <div className="message-input-area">
                        <div className="how-are-you1">How are you?</div>
                      </div>
                      <div className="message-attachment">
                        <div className="message-attachment-options">
                          <div className="attachment-icons">
                            <img
                              className="bxsearch-icon"
                              loading="lazy"
                              alt=""
                              src="/antdesignpaperclipoutlined.svg"
                            />
                            <div className="type-your-message">
                              Type your message here...
                            </div>
                          </div>
                          <div className="message-actions">
                            <img
                              className="fluentemoji-laugh-16-regular-icon"
                              loading="lazy"
                              alt=""
                              src="/fluentemojilaugh16regular.svg"
                            />
                            <img
                              className="fluentemoji-laugh-16-regular-icon"
                              loading="lazy"
                              alt=""
                              src="/fluentcamera24regular.svg"
                            />
                          </div>
                        </div>
                        <div className="microphone-button">
                          <img
                            className="bxsearch-icon"
                            loading="lazy"
                            alt=""
                            src="/bimicfill.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="today-834pm2">Today, 8.34pm</div>
                  </div>
                  <div className="conversation-timestamp-inner">
                    <div className="response-list-details">
                      <div className="hello2">Hello!</div>
                    </div>
                  </div>
                  <div className="conversation-timestamp-child">
                    <div className="i-am-fine-and-how-are-you-frame">
                      <div className="i-am-fine2">
                        I am fine and how are you?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="conversation-timestamp">
                  <div className="today-830pm3">Today, 8.30pm</div>
                  <div className="chat-list-names">
                    <div className="i-am-fine2">Hey There!</div>
                  </div>
                  <div className="chat-list-messages">
                    <div className="i-am-fine2">How are you?</div>
                  </div>
                </div>
                <div className="conversation-timestamp1">
                  <div className="today-834pm2">Today, 8.34pm</div>
                  <div className="conversation-timestamp-inner">
                    <div className="response-list-details">
                      <div className="hello2">Hello!</div>
                    </div>
                  </div>
                  <div className="conversation-timestamp-child">
                    <div className="i-am-fine-and-how-are-you-frame">
                      <div className="i-am-fine2">
                        I am fine and how are you?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="conversation-timestamp">
                  <div className="today-830pm3">Today, 8.30pm</div>
                  <div className="chat-list-names">
                    <div className="i-am-fine2">Hey There!</div>
                  </div>
                  <div className="chat-list-messages">
                    <div className="i-am-fine2">How are you?</div>
                  </div>
                </div>
                <div className="conversation-timestamp1">
                  <div className="today-834pm2">Today, 8.34pm</div>
                  <div className="conversation-timestamp-inner">
                    <div className="response-list-details">
                      <div className="hello2">Hello!</div>
                    </div>
                  </div>
                  <div className="conversation-timestamp-child">
                    <div className="i-am-fine-and-how-are-you-frame">
                      <div className="i-am-fine2">
                        I am fine and how are you?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Screen2;
