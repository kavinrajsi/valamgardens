import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "#fecf8b",
        }}
      >
        <div
          style={{
            width: 104,
            height: 140,
            background: "#8f4b41",
            borderRadius: "999px 999px 6px 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 78,
            fontWeight: 900,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            marginBottom: 14,
          }}
        >
          V
        </div>
      </div>
    ),
    { ...size }
  );
}
