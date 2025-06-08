import { Flex, Image, HStack } from "@chakra-ui/react";

export default function Header() {
  return (
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
  );
}
