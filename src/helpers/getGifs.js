export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=aBcWZTz8fH5GjN9CAmLyIN4d4PQPypI2`

    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            img: img.images.downsized.url
        }
    })

    return gifs
    
}