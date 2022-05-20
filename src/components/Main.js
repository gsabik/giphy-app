import React, { useState } from "react";
import { 
    Container,
    Flex, 
    Center, 
    Heading 
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import GifContainer from "./GifContainer";

const Main = () => {
    const [categories, setCategories] = useState("");

    if (categories === "") {
        return (
            <Container maxW="container.xl" p={6}>
            <SearchInput 
                setCategories={setCategories}
            />
            <Center h="70vh">
                <Heading>Search a gif!</Heading>
            </Center>            
        </Container>
        )
    }
  
    return (
        <Container maxW="container.xl" p={6}>
            <SearchInput 
                setCategories={setCategories}
            />
            <Flex w="full">
            {
                categories.map(category => {
                return (
                    <GifContainer
                        key={category} 
                        category={category}
                    />
                )
                })
            }
            </Flex>
        </Container>
    )
}

export default Main
