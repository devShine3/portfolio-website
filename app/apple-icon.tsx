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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#E8E6E1",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -6,
            color: "#141414",
            lineHeight: 1,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          HAS
        </div>
        <div
          style={{
            width: 72,
            height: 8,
            marginTop: 16,
            background: "#2F5D50",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
