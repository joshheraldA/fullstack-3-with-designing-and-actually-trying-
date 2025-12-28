const body = document.querySelector('.main-body')

const COLORS = ['355070', '6d597a', 'b56576', 'e56b6f', 'eaac8b']

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

async function getBrand() {
    try {
        const response = await fetch('/brand')
        if(!response.ok) {
            console.err(`There was an error with a status code: ${response.status}`)
        }

        const jsonData = await response.json()
        const { data } = jsonData
        let count = 1;

        const contents = data.map(brand => {
            return `<button class="brand-name" id=id${count++} onclick="alert('hello')">
                ${brand}
            </button>
            `
        }).join("")

        document.querySelector(".wrapper").innerHTML = contents
        count--;
        
        for(let i = 1; i < count + 1; i++) {
            const button = document.querySelector(`#id${i}`)
            button.style.backgroundColor = `#${COLORS[(i) % 5]}`
            const delayValue = (30 / count) * (count - i) * -1;

            button.style.animationDelay = `${delayValue}s`;  
        }


    } catch(err) {
        throw new Error(err)
    }
}

getBrand();
getShoes();

