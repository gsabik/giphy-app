import { GridItem, Text, Image, VStack } from "@chakra-ui/react"
import React from "react"

const GifGridItem = ({url, title}) => {

  return (
    <GridItem>
      <VStack spacing={6}>
        <Text>{title}</Text>
        <Image
          w="full"
          h="full"
          src={url}
        />
      </VStack>
    </GridItem>
  )
}

export default GifGridItem