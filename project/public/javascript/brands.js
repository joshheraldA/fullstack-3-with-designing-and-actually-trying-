export async function obtainBrands() {
    try {
        const response = await fetch('/brand')
        if(!response.ok) {
            console.log(`Something went wrong with a status code: ${response.status}`)
        }

        const jsonData = response.json()

        const { data } = jsonData
        
        console.log(data)

    } catch(err) {
        console.error(err)
    }
}