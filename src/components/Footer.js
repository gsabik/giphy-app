import { 
    Flex, 
    Text 
} from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex 
            alignItems="center"
            bgColor="gray.50"
            h="5rem"
            justifyContent="center" 
            w="full" 
        >
            <Text
                fontSize="lg" 
                fontWeight="500"
            >
                Developed by Guido Sabik</Text>
        </Flex>
    )
}

export default Footer