const searchGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=1eHM3Rffts7UOH5BjFULW3Y5aJHoEEQU`;
    const res = await fetch (url);
    const { data } = await res.json();

    console.log(data)

    // Con el data.map obtengo solo la información que quiero o preciso, en vez de toda la información predeterminada que viene en "data"
    const gifData = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    return gifData;
}

export default searchGifs