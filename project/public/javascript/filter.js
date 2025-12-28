import { checkFileAndAppend } from './checkFile.js'

const body = document.querySelector('.main-body')

export async function filterFunction(brand) {
    try {
        console.log(brand)
        const response = await fetch(`/shoes/${brand}`)
        if(!response.ok) {
            console.err(`There was an error with a status code: ${response.status}`)
        }

        const jsonData = await response.json()
        const { data } = jsonData

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

    } catch(err) {
        throw new Error(err)
    }
}

