import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Veank Agency — Performance Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f0f0f",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "#eab308", fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Veank
          </span>
          <span style={{ color: "#f5f5f4", fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Agency
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <span
            style={{
              color: "#f5f5f4",
              fontSize: "96px",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            WE RUN ADS
          </span>
          <span
            style={{
              color: "#f5f5f4",
              fontSize: "96px",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            THAT MAKE
          </span>
          <span
            style={{
              color: "#eab308",
              fontSize: "96px",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            MONEY.
          </span>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span style={{ color: "#a3a3a3", fontSize: "18px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Google Ads · Meta Ads · TikTok Ads · SEO · Social
          </span>
          <span style={{ color: "#eab308", fontSize: "18px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            agency.veank.com
          </span>
        </div>

        {/* Yellow left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "8px",
            height: "100%",
            backgroundColor: "#eab308",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
