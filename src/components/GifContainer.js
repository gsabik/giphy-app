import React, { useState, useEffect } from "react";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import searchGifs from "../helpers/searchGifs";
import Loader from "./Loader";
import GifItem from "./GifItem";

const GifGrid = ({ category} ) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);

        searchGifs(category)
        .then(setGifs)
        .finally( () => {
            setLoading(false)
        })
    }, [category]);

    return (
        <VStack w="full" spacing={6}>
            <Heading>Results of: {category}</Heading>
            <Flex w="full" flexDirection="row" flexWrap="wrap" justifyContent="center">
                {
                    loading
                    ?
                    <Loader/>
                    :
                    gifs.map( gif => {
                        return(
                            <GifItem
                                key={gif.id}
                                {...gif}
                            />
                        )
                    })
                }
            </Flex>
        </VStack>
    )
}

export default GifGrid