export async function checkFileAndAppend(img_url) {
    try {
        const image = await checkFile(img_url)
        return image

    } catch(err) {
        return `../asset/error.jpg`
    }

}

function checkFile(img_url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(img_url)
        image.onerror = () => reject('project/public/asset/error.jpg')
        image.src = img_url
    })
}