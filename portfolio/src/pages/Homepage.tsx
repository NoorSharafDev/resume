import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import companies from "../assets/companies_logos.png";
import world from "../assets/world.png";
import responsive from "../assets/responsive.gif";
import clean from "../assets/clean_code.gif";
import javascript from "../assets/javascript.webp";
import django from "../assets/django.webp";
import express from "../assets/express.png";
import css from "../assets/css.webp";
import html from "../assets/html.png";
import java from "../assets/java.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import react from "../assets/react.webp";
import ruby from "../assets/ruby.png";
import spring from "../assets/spring.svg";
import { Colors } from "../../src/constants/Colors";
import Footer from "../components/Footer";

const { primary } = Colors;

export default function Homepage() {
  const [playVideo, setPlayVideo] = useState<boolean>(false);

  const handleCanPlay = () => {
    setPlayVideo(true);
  };

  const handleContextMenu = (e: Event) => {
    e.preventDefault();
  };

  return (
    <>
      <div style={{ display: "block" }}>
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
            <div className="navigationContainer">
              <NavigationBar />
            </div>
          </div>
          <div
            // className="videoContainer"
            style={{
              width: "100%",
              marginTop: 0,
              padding: 0,
              zIndex: 1,
              height: "100vh",
            }}
          >
            <video
              style={{
                width: "100%",
                height: "100vh",
                minWidth: "min-content",
              }}
              autoPlay
              loop
              muted
              onCanPlay={handleCanPlay}
              // onContextMenu={handleContextMenu}
            >
              <source src="/videos/man_programming.mp4" type="video/mp4" />
            </video>
          </div>
          {/* <h1
          style={{
            width: "100%",
            marginTop: "25%",
            padding: 0,
            // zIndex: 1,
            position: "absolute",
          }}
        >
          Welcome to Noor Sharaf's Portfolio, Take a seat!
        </h1> */}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "block",
          margin: "0 auto",
          height: "100vh",
        }}
      >
        <h1 style={{ fontSize: 50, marginBottom: "5%" }}>
          Experience and Skills
        </h1>
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "7%",
              paddingLeft: "7%",
            }}
          >
            <div style={{ display: "block" }}>
              <h1>Experience</h1>
              <h4>
                My background includes serving as an instructor associate in
                software engineering at General Assembly, alongside roles as a
                mobile and web app developer at Saluber MD and an animator at
                Cinqo media.
              </h4>
            </div>

            <img src={companies} style={{ width: "30%", padding: "3%" }} />
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "7%",
              paddingLeft: "7%",
            }}
          >
            <div style={{ display: "block" }}>
              <h1>Skills</h1>
              <h4>
                Beyond my development capabilities, I am also proficient in UI
                and UX design, videography, and animation, areas that I studied
                extensively during my web media degree and continue to refine.
              </h4>
            </div>
            <img src={world} style={{ width: "20%", padding: "3%" }} />
          </div>
        </div>
      </div>
      {/* the sliders part */}
      <div style={{ border: "black 1px solid", overflow: "hidden" }}>
        <div className="slider">
          <h1>Full Stack Developer</h1>
          <h1>Mobile App Developer</h1>
          <h1>Web App Developer</h1>
          <h1>UI/UX designer</h1>
          <h1>Animator</h1>
          <h1>Videographer</h1>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "block",
          margin: "0 auto",
          height: "100vh",
        }}
      >
        <h1 style={{ fontSize: 50, marginBottom: "5%" }}>
          Former employement roles
        </h1>
        <div
          style={{
            display: "flex",
            paddingRight: "7%",
            paddingLeft: "7%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ul style={{ textAlign: "left", fontSize: "20px" }}>
            <li>Api</li>
            <li>Styling</li>
            <li>UI/UX Design</li>
            <li>Bluetooth Connection</li>
            <li>Use of Libraries</li>
            <li>Optimization</li>
            <li>Refactoring</li>
            <li>Responsive design</li>
            <li>Documentation</li>
            <li>Testing</li>
            <li>Database</li>
            <li>SQL</li>
          </ul>
          <img src={responsive} />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "block",
          margin: "0 auto",
          height: "100vh",
        }}
      >
        <h1 style={{ fontSize: 50, marginBottom: "5%" }}>Coding habits</h1>
        <div
          style={{
            display: "flex",
            paddingRight: "7%",
            paddingLeft: "7%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ul
            style={{ textAlign: "left", fontSize: "20px", listStyle: "none" }}
          >
            <li>Clean code</li>
            <li>Documenting code</li>
            <li>DRY principle</li>
            <li>High performance code</li>
            <li>Resolving merge conflicts</li>
            <li>Testing</li>
          </ul>
          <img src={clean} />
        </div>
      </div>
      {/* the overflow x auto allows me to only be able to scroll in one section horizontally  */}
      <div
        style={{
          width: "100%",
          height: "25vh",
          display: "flex",
          overflowX: "auto",
          whiteSpace: "noWrap",
          gap: 40,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <div style={styles.languageContainer}>
          <img
            src={javascript}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Javascript</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={react}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>React</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={node}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Node</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={express}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Express</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={ruby}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Ruby</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={java}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Java</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={spring}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Spring</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={php}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Php</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={python}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Python</h3>
        </div>{" "}
        <div style={styles.languageContainer}>
          <img
            src={django}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>Django</h3>
        </div>{" "}
        <div style={styles.languageContainer}>
          <img
            src={html}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>HTML</h3>
        </div>
        <div style={styles.languageContainer}>
          <img
            src={css}
            width={160}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h3>CSS</h3>
        </div>
      </div>
      <div style={{ display: "block", textAlign: "center", padding: "10%" }}>
        <h1> I see you're still scrolling</h1>
        <h3>Learn more about me</h3>
        <a
          href="/"
          style={{
            textDecoration: "none",
            background: primary,
            paddingRight: "70px",
            paddingLeft: "70px",
            paddingTop: "10px",
            color: "white",
            paddingBottom: "10px",
            borderRadius: 30,
          }}
        >
          CV
        </a>
      </div>
      <Footer />
    </>
  );
}

const styles: any = {
  languageContainer: {
    width: "20%",
    textAlign: "center",
  },
};
