const body = document.querySelector('.main-body')

import { checkFileAndAppend } from "./checkFile.js"


async function getShoes() {
    try {
        const response = await fetch('/shoes')
        if(!response.ok) {
            console.log(`Status 404! Something went wrong`)
        }

        const dataResponse= await response.json()
        const { data } = dataResponse;
    
        const contents = data.map(async(shoe) => {
            const image = await checkFileAndAppend(shoe['image_url'])
            return `
            <a href="./page.html?id=${shoe['id']}">    
                <div class="card">
                    <img src=${image} alt="a picture of ${shoe['name']}"></img>
                    <p>${shoe['name']}</p>
                    <p id="price">${shoe['market_price']}</p>    
                </div>        
            </a>
                `
        })
        const htmlArray = await Promise.all(contents)
        body.innerHTML = htmlArray.join('');

    } catch (err) {
        throw new Error(`there was an error: ${err}`)
    }
}

getShoes();

