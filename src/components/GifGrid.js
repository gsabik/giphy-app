import React, { useState, useEffect } from "react"
import { Grid, Text } from "@chakra-ui/react"
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}) => {
    const [gifs, setGifs] = useState([]);

    const getGifs = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=Dragon+Ball+Z&api_key=1eHM3Rffts7UOH5BjFULW3Y5aJHoEEQU";
        const res = await fetch (url);
        const {data} = await res.json();

        // Con el data.map obtengo solo la información que quiero o preciso, en vez de toda la información predeterminada que viene en "data"
        const gifData = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
            }
        })

        setGifs(gifData);
    }

    useEffect( () => {
        getGifs();
    }, []);

    return (
        <Grid w="full" templateColumns="repeat(4, 1fr)" gap={10}>
            {
                gifs.map( gif => {
                    return(
                        <GifGridItem
                            key={gif.id}
                            {...gif}
                        />
                    )
                })
            }
        </Grid>
    )
}

export default GifGrid