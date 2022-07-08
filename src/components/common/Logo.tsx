import { Box, Image, Text } from "@chakra-ui/react"
import React from "react"

export const Logo: React.FC = () => (
  <Box w="80px" color={["white", "white", "primary.500", "primary.500"]}>
    <Text fontSize="lg" fontWeight="bold">
      <Image
        src={`https://raw.githubusercontent.com/xoniaapp/app/main/logo.png`}
      />
    </Text>
  </Box>
)
