import { useState } from "react";
import { 
    HStack,
    Button,
    FormControl, 
    Input,
    Icon 
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        if (inputValue === "" || inputValue.trim() >= 0) {
            alert("Search a gif!");
        }
    
        else {
            e.preventDefault();
            setCategories([inputValue]);
          
            setInputValue("");
        }
    }

    return (
        <HStack 
            justifyContent="center" 
            pb={10}
            w="full" 
        >
            <form onSubmit={handleSubmit}>
                <HStack>
                    <FormControl>
                    <Input
                        isRequired
                        onChange={handleInputChange}
                        placeholder="Search"
                        type="text"
                        value={inputValue}
                        w="full"
                    />
                    </FormControl>
                    <Button type="submit">
                        <Icon as={SearchIcon}/>
                    </Button>
                </HStack>
            </form>
        </HStack>
    )
}

export default SearchInput