import { VStack, Image } from "@chakra-ui/react"

const GifItem = ({ url }) => {
    return (
        <VStack spacing={6} p={4} alignItems="center">
            <Image src={url}/>
        </VStack>
    )
}

export default GifItem