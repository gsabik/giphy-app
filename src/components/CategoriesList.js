import React,  {useState } from "react"
import { Container, VStack, ListItem, UnorderedList } from "@chakra-ui/react"
import AddCategory from "./AddCategory";

const CategoriesList = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z", "Breaking Bad", "Prison Break"]);
  
  return (
    <Container w="container.xl" p={6}>
      <VStack w="full" spacing={6}>
        <AddCategory 
          setCategories={setCategories}
        />
        <UnorderedList>
        {
          categories.map(category => {
            return <ListItem key={category}>{category}</ListItem>
          })
        }
        </UnorderedList>
      </VStack>
    </Container>
  )
}

export default CategoriesList