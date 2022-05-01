import React from "react"
import { Flex, Heading } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex w="full" justifyContent="center" p={6}>
            <Heading>Giphy API</Heading>
        </Flex>
    )
}

export default Header