import React, { useState } from "react"
import { Button, FormControl, HStack, Input } from "@chakra-ui/react"

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    if (inputValue === "") {
      alert("Debe escribir una categoria");
    }

    else {
      e.preventDefault();
      setCategories(cats => [...cats, inputValue]);
      
      // Despues de añadir una categoria, seteo mi input con un string vacio
      setInputValue("");
    }

  }
  
  return (
      <HStack w="full" justifyContent="center" pb={10}>
        <form onSubmit={handleSubmit}>
          <HStack>
            <FormControl>
              <Input
                w="full"
                placeholder="Add category"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button type="submit">Add</Button>
          </HStack>
        </form>
      </HStack>
  )
}

export default AddCategory