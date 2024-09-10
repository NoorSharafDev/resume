import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import BarLoader from "react-spinners/BarLoader";

export default function Homepage() {
  const [playVideo, setPlayVideo] = useState<boolean>(false);

  const handleCanPlay = () => {
    setPlayVideo(true);
  };

  return (
    <>
      <div style={{ maxWidth: "100%", width: "100%" }}>
        <div
          style={{
            marginTop: 0,
            marginRight: 12,
            marginLeft: 12,
            padding: 0,
            zIndex: 4,
            position: "absolute",
            width: "-webkit-fill-available",
          }}
        >
          <NavigationBar />
          {/* <BarLoader color="red" width={150} /> */}
        </div>
        <div
          style={{
            width: "100%",
            marginTop: 0,
            padding: 0,
            zIndex: 1,
            position: "absolute",
          }}
        >
          <video
            style={{ width: "100%", height: "max-content" }}
            autoPlay
            loop
            muted
            onCanPlay={handleCanPlay}
          >
            <source src="/videos/man_programming.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
