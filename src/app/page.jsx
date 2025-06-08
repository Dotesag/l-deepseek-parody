"use client";
import { useState } from "react";

import {
  Box,
  Image,
  Link,
  HStack,
  Flex,
  VStack,
  Button,
  QrCode,
} from "@chakra-ui/react";
import Header from "@/components/mainpage/header";
import Main from "@/components/mainpage/main";
import QRCode from "@/components/mainpage/qrcode";
import Footer from "@/components/mainpage/footer";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box>
      <Box
        bgImage="url(bg.webp)"
        bgSize="100% 100%"
        height="690px"
        padding="15px"
        bgAttachment="scroll"
      >
        <Header />
        <Main setHovered={setHovered} />
        <QRCode hovered={hovered} />
      </Box>
      <Footer />
    </Box>
  );
}
