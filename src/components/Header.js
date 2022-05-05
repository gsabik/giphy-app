import React from "react"
import { Flex, Heading, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex
            alignItems="center"
            bgColor="gray.50"
            justifyContent="space-between" 
            p={6}
            w="full" 
        >
            <Heading>Giphy API</Heading>
            <Text fontSize="lg">Favorites</Text>
        </Flex>
    )
}

export default Header