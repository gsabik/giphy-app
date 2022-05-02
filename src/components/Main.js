import React,  {useState } from "react"
import { Container, Flex, VStack } from "@chakra-ui/react"
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const Main = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);
  
  return (
    <Container maxW="container.xl" p={6}>
        <AddCategory 
          setCategories={setCategories}
        />
        <Flex w="full">
          {
            categories.map(category => {
              return <GifGrid key={category} category={category}/>
            })
          }
        </Flex>
    </Container>
  )
}

export default Main