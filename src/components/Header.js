import React from "react"
import { 
    Flex,
    Heading
} from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex
            alignItems="center"
            bgColor="gray.50"
            justifyContent="center" 
            p={6}
            w="full" 
        >
            <Heading>Giphy API</Heading>
        </Flex>
    )
}

export default Header