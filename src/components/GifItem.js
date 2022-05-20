import { 
    VStack,
    Image, 
    Text, 
    HStack 
} from "@chakra-ui/react"

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
            <HStack spacing={4}>
                <Text
                    fontSize="md" 
                    fontWeight="500"
                >{title}
                </Text>
            </HStack>
        </VStack>
    )
}

export default GifItem