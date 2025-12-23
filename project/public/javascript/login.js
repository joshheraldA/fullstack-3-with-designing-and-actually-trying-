const body = document.querySelector('.main-body')

function checkFile(img_url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(img_url)
        image.onerror = () => reject('project/public/asset/error.jpg')
        image.src = img_url
    })
}

async function checkFileAndAppend(img_url) {
    try {
        const image = await checkFile(img_url)
        return image

    } catch(err) {
        return `../asset/error.jpg`
    }

}


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
            console.log("WhAT HAPPENING")
            return `
            <a href=>    
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
