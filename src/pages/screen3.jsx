import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import "./screen3.css";

const Screen3 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/screen-02");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/screen-04");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="screen-03">
      <main className="frame-parent7">
        <div className="main-content-parent">
          <div className="main-content">
            <div
              className="catchy-and-short-hero-headline-wrapper1"
              onClick={onFrameContainerClick2}
            >
              <div className="catchy-and-short6">b</div>
            </div>
          </div>
          <nav className="frame-parent8">
            <FrameComponent
              propBackgroundColor="rgba(245, 245, 247, 0.2)"
              frame22="/frame-22@2x.png"
              propHeight="48px"
              propWidth="48px"
              profile="Profile"
            />
            <FrameComponent
              propBackgroundColor="#825fe4"
              frame22="/frame-22-11.svg"
              propHeight="32px"
              propWidth="32px"
              profile="Chats"
              onFrameContainerClick={onFrameContainerClick}
            />
            <FrameComponent
              propBackgroundColor="#825fe4"
              frame22="/frame-22-2@2x.png"
              propHeight="32px"
              propWidth="32px"
              profile="Setting"
              onFrameContainerClick={onFrameContainerClick1}
            />
          </nav>
        </div>
        <section className="frame-wrapper4">
          <FrameComponent1 />
        </section>
      </main>
    </div>
  );
};

export default Screen3;
