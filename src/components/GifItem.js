import { VStack, Image, Text } from "@chakra-ui/react"

const GifItem = ({ url, title }) => {
    return (
        <VStack
            alignContent="center"
            m={2}
            overflow="hidden"
            p={4}
            spacing={6} 
        >
            <Image
                src={url} 
                maxH="15rem"
            />
            <Text
                fontSize="lg" 
                fontWeight="500"
            >{title}
            </Text>
        </VStack>
    )
}

export default GifItem