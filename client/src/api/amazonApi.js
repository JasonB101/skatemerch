import axios from "axios"
import cheerio from "cheerio"

export const getAmazonProduct = async (link) => {
    const html = await axios.get(link);

    let $ = cheerio.load(html.data)
    
    let images = Object.keys(JSON.parse($('.imgTagWrapper').find('img').attr('data-a-dynamic-image')))
    console.log(images)
    return images || [];
}
 //This type of action is for the controller on the backend not the front end. So, fiqure it out in Java