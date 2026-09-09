import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 300,
            height: 400,
            background: "#8f4b41",
            borderRadius: "999px 999px 16px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 220,
            fontWeight: 900,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            marginBottom: 40,
          }}
        >
          V
        </div>
      </div>
    ),
    { ...size }
  );
}
