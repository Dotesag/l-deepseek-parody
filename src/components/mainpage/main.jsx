import { Flex, VStack, Link } from "@chakra-ui/react";
import Logo from "@/components/mainpage/logo";

export default function Main({ setHovered }) {
  return (
    <VStack marginTop="89px">
      <a style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "0px" }}>
        🎉 DeepSeek-R1 upgraded with deeper insights and stronger reasoning, now
        live on web, app, and API. Click for details.
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
  );
}
