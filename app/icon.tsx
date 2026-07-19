import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#E8E6E1",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: -1.2,
            color: "#141414",
            lineHeight: 1,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          HAS
        </div>
        <div
          style={{
            width: 16,
            height: 2,
            marginTop: 3,
            background: "#2F5D50",
            borderRadius: 1,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
