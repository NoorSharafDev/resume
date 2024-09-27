import { Colors } from "../constants/Colors";
const { primary, secondary } = Colors;
export default function Footer() {
  return (
    <div
      style={{
        background: primary,
        width: "100%",
        padding: "70px 0px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: secondary }}>
        {"<"} Noor Sharaf {"/ >"}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <a href="/" style={styles.footerLinks}>
          Home
        </a>
        <a href="/cv" style={styles.footerLinks}>
          CV
        </a>
        <a href="/portfolio" style={styles.footerLinks}>
          Portfolio
        </a>
        <a href="/about" style={styles.footerLinks}>
          About
        </a>
      </div>
      <hr style={{ margin: 70, border: "1px solid white" }} />
      <h6 style={{ color: secondary }}>Made with ❤️ and 🎶</h6>
    </div>
  );
}

const styles: any = {
  footerLinks: {
    textDecoration: "none",
    color: secondary,
  },
};
