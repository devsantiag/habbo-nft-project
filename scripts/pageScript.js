const buttonSpinGaleriaPhotos = document.getElementById('button_spin_roulette')
let imageElement = document.getElementById('src_script_image');
const buttonShowPreviewGaleria = document.getElementById('button_preview_content_element')
let containerScriptGaleria = document.getElementById('countainer_images_nft')

// warehouse of habbo nft images
const openSeaStorageImageHabboNft = [
    'https://i.seadn.io/gcs/files/fd0e36474cfb57a53aeab4acf1785d82.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/83c39ec8b6d7eeb0359a4a770b8d6c8e.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/4e081187998e8c1f60d1926c72f4ffee.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/390b3589c9bca32dfef09ffe5b23d429.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/3f35bc4e5171750c4a8764abeaa99b39.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/7dfffda22fbe2c3791c2f83d122c4e98.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/7dfffda22fbe2c3791c2f83d122c4e98.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/7dfffda22fbe2c3791c2f83d122c4e98.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/7dfffda22fbe2c3791c2f83d122c4e98.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/7dfffda22fbe2c3791c2f83d122c4e98.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/8ac2b20176465df7d3d19c755d6e957e.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/a5f1daafe3f44556914dd6d332c18ca4.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/88ff6e907caa8352b46eb8808d1f5f7f.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/1545bc646f802058737bb6443d2a7622.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/8598f852eee4e743634cea3add9f46a4.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/1545bc646f802058737bb6443d2a7622.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/8598f852eee4e743634cea3add9f46a4.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/1545bc646f802058737bb6443d2a7622.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/8598f852eee4e743634cea3add9f46a4.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/14b119d17a5182964ea8b97155763ce7.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/14b119d17a5182964ea8b97155763ce7.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/14b119d17a5182964ea8b97155763ce7.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/14b119d17a5182964ea8b97155763ce7.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/14b119d17a5182964ea8b97155763ce7.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/14b119d17a5182964ea8b97155763ce7.png?auto=format&dpr=1&w=384', 
    'https://i.seadn.io/gcs/files/58fbbf4a5eb842b4f6ac1a545b87d738.png?auto=format&dpr=1&w=1000',
];

// initial position of the image that shows to the customer

const randomImage = Math.floor(Math.random() * 10)
imageElement.src = openSeaStorageImageHabboNft[randomImage]

let currentImageIndexRoulete = 0

// roleta de imagens nft
buttonSpinGaleriaPhotos.addEventListener('click', () => {

    buttonSpinGaleriaPhotos.style.cursor = 'not-allowed'
    buttonSpinGaleriaPhotos.disabled = true

    let intervalValue = 0

    let rotationInitial = setInterval(() => {
        const randomStorageOpenSeaArray = Math.floor(Math.random() * openSeaStorageImageHabboNft.length)
        imageElement.src = openSeaStorageImageHabboNft[randomStorageOpenSeaArray]

        intervalValue++

        if (intervalValue === 300) {
            setTimeout(() => {
                buttonSpinGaleriaPhotos.style.cursor = 'pointer'
                buttonSpinGaleriaPhotos.disabled = false
            }, 1000);
            clearInterval(rotationInitial)
        }
    }, 20)
})

// open the nft image gallery
let isPreviewContentOpen = false
buttonShowPreviewGaleria.addEventListener('click', () => {

    buttonShowPreviewGaleria.disabled = true
    isPreviewContentOpen = !isPreviewContentOpen

    if (isPreviewContentOpen) {
        buttonShowPreviewGaleria.textContent = 'Return'
        for (let i = 0; i < openSeaStorageImageHabboNft.length; i++) {
            setTimeout(() => {
                let imgElement = document.createElement('img')
                imgElement.src = openSeaStorageImageHabboNft[i]
                containerScriptGaleria.appendChild(imgElement)
            }, 30 * i);
        }
    } else {
        buttonShowPreviewGaleria.textContent = 'Preview'
        containerScriptGaleria.innerHTML = ''
    }
    buttonShowPreviewGaleria.disabled = false;
});
