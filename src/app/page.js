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
import Logo from "./logo";
// import { ColorModeButton } from "@/components/ui/color-mode";

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
      <Flex justifyContent="space-between">
        <Image src="logo.png" height="24px"></Image>

        <HStack fontSize="14px">
          <a
            href="https://platform.deepseek.com/"
            style={{
              borderBottom: "1px solid black",
              color: "#475569",
              fontWeight: "bold",
            }}
          >
            API Platform ↗
          </a>

          <a
            href="https://www.deepseek.com/zh"
            style={{ color: "#94a3b8", margin: "0 10px" }}
          >
            中文
          </a>
        </HStack>
      </Flex>
      <VStack marginTop="89px">
        <a style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "0px" }}>
          🎉 DeepSeek-R1 upgraded with deeper insights and stronger reasoning,
          now live on web, app, and API. Click for details.
        </a>
        <Logo />
        <p style={{ fontSize: "30px", color: "#475569", fontWeight: "bold" }}>
          Into the unknown
        </p>

        <Flex gap="30px" margin="47px" wrap="wrap" justify="center">
          <Link
            href="https://chat.deepseek.com/"
            background="white"
            height="135px"
            width="370px"
            variant="plain"
            rounded="2xl"
            style={{
              textDecoration: "none",
              boxShadow:
                "0 0 0 1px #f1f5f9, 0 2px 4px rgba(0, 0, 0, .05), 0 12px 24px rgba(0, 0, 0, .05)",
              padding: "26px 33px",
            }}
          >
            <Flex
              direction="column"
              justify="space-between"
              style={{ height: "100%" }}
            >
              <h1
                style={{
                  color: "#4d6bfe",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Start Now
              </h1>
              <p style={{ color: "#64748b", fontSize: "15px" }}>
                Free access to DeepSeek-V3 and R1.
                <br />
                Experience the Intelligent model.
              </p>
            </Flex>
          </Link>
          <Link
            background="white"
            height="135px"
            width="370px"
            variant="plain"
            rounded="2xl"
            style={{
              textDecoration: "none",
              boxShadow:
                "0 0 0 1px #f1f5f9, 0 2px 4px rgba(0, 0, 0, .05), 0 12px 24px rgba(0, 0, 0, .05)",
              padding: "26px 33px",
            }}
          >
            <Flex
              direction="column"
              justify="space-between"
              style={{ height: "100%" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h1
                style={{
                  color: "#4d6bfe",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Get DeepSeek App
              </h1>
              <p style={{ color: "#64748b", fontSize: "15px" }}>
                Chat on the go with DeepSeek-V3
                <br />
                Your free all-in-one AI tool
              </p>
            </Flex>
          </Link>
        </Flex>
      </VStack>
      {hovered && (
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
      )}
    </Box>
    <h1 style={{textAlign: "center", marginTop: "30px", fontSize: "20px", color: "gray"}}>Footer</h1>
    </Box>
  );
}
