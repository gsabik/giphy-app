import React from "react"
import { Flex, Heading } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex 
            justifyContent="center" 
            p={6}
            w="full" 
        >
            <Heading>Giphy API</Heading>
        </Flex>
    )
}

export default Header