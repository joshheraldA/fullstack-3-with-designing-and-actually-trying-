const body = document.querySelector('.body')

async function getShoes() {
    try {
        const response = await fetch('/shoes')
        if(!response.ok) {
            console.log(`Status 404! Something went wrong`)
        }

        const dataResponse= await response.json()
        const { data } = dataResponse;

        console.log(data)
        const contents = data.map(shoe => {
            return `
            <a href=#>    
                <div class="card">
                    <img src=${shoe['image_url']}></img>
                    <p>${shoe['name']}</p>
                    <p>${shoe['market_price']}</p>    
                </div>        
            </a>
                `
        }).join('')

        body.innerHTML = contents;

    } catch (err) {
        throw new Error(`there was an error: ${err}`)
    }

}

getShoes()