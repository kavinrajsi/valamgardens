import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: gardens designed, built and cared for in Chennai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fff",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 90,
            width: 520,
            height: 700,
            background: "#fecf8b",
            borderRadius: "999px 999px 8px 8px",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 150,
            width: 400,
            height: 600,
            background: "#8f4b41",
            borderRadius: "999px 999px 8px 8px",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 72,
            width: 760,
          }}
        >
          <div style={{ fontSize: 30, color: "#8f4b41", letterSpacing: 2, display: "flex" }}>VALAM GARDENS</div>
          <div
            style={{
              marginTop: 24,
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1,
              color: "#222",
              display: "flex",
            }}
          >
            Grow your space.
          </div>
          <div style={{ marginTop: 32, fontSize: 28, color: "#555", fontFamily: "Arial, sans-serif", display: "flex" }}>
            Office plant rental in Chennai. {site.phoneDisplay}. {site.domain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
