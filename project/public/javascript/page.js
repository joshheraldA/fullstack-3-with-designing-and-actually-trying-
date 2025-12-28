const params = new URLSearchParams(window.location.search)
const id = params.get('id')

import { checkFileAndAppend } from "./checkFile.js"

async function fetchShoeData() {
    try {
        // fetch the shoes 
        const response = await fetch('/shoes')
        console.log('supPOSE TO HAPPEN SECOND')
        if(!response.ok) {
            console.log(`There was error with a status code: ${response.status}`)
        }

        const jsonResponse = await response.json()
        
        const { data } = jsonResponse;
        

        const targetShoe = data.find(shoe => shoe['id'] === id)
        const imgFunction = async(targetShoe) => {
            if(targetShoe) {
                return await checkFileAndAppend(targetShoe['image_url'])
            } else {
                throw new Error('There is no shoes')
            }
        } 
        const img = await imgFunction(targetShoe)

        rendering(img, targetShoe)

    } catch(err) {
        throw new Error(`there was en error: ${err}`)
    }

}

function rendering(img, data) {
    console.log(img)
    document.getElementById('picture-card').src = img

    const placeholder = document.querySelector(".placeholder");
    placeholder.innerHTML = `
        <div class="header-container">
            <img src="../asset/profile.jpg" class="profile-picture"></img>
            <p id="title-shoe">${data['name']}</p>
        </div>
        <hr>

        <div class="details">
            <div>
                <p> BRAND </p>
                <p> ${data['brand']}</p>
            </div>
            <div id="price-container">
                <p class="price"> PRICES </p>
                <p class="price" id="price-end"> ${data['market_price']} </p>
            </div>
            <div> 
                <p> STOCKS </p>
                <p> ${data['stock']} units</p>
            </div>

        </div>
        
    `
}

fetchShoeData()
