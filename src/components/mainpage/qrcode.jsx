import { Box, QrCode } from "@chakra-ui/react";

export default function QRCode({ hovered }) {
  if (!hovered) return null;
  return (
    <Box
      background="white"
      style={{
        padding: "10px",
        borderRadius: "12px",
        boxShadow:
          "0 0 0 1px #f1f5f9, 0 2px 4px rgba(0, 0, 0, .05), 0 12px 24px rgba(0, 0, 0, .05)",

        position: "absolute",
        zIndex: "0",
        left: "55%",
        top: "540px",
      }}
    >
      <QrCode.Root value="https://download.deepseek.com/app/" size="xl">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <p
        style={{
          fontSize: "14px",
          textAlign: "center",
          color: "#475569",
          fontWeight: "bold",
          marginTop: "5px",
        }}
      >
        Scan to get DeepSeek App
      </p>
    </Box>
  );
}
