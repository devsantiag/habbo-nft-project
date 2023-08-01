
const button_show_preview_content = document.getElementById('button_preview_content_element')
const button_galeria_next = document.getElementById('button_spin_roulette')
let imageElement = document.getElementById('src_script_image');

const openSea_storage_nft_habbo = [
    'https://i.seadn.io/gcs/files/0736f3b9a043065bbf8461c8da40bed8.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/b4299848ea73ff546f67ef7de6e0e46c.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/5351d4b0e26a5aa057b5737e435d4a2b.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/6d6ee511cfaf4f3be3730a7eddc65a81.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/d6fcc0bb103d1ec1e92405974aba7dab.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/982948a4f02e1a3aa0d97100223f3532.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/9c5fbb8c73853da0a75fbc9b465e87a3.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/e6c2e4d83fd7469f12836f437a6e2d4d.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/9d18a059e244757bb6ebc1bf568d35d8.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/7a52974a69f7d9b4545604a6f30f4239.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/973616b19bc63f8eabb9fcd1a62f1785.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/9cd387cc25d0ac94d330c0798f9500ff.png?auto=format&dpr=1&w=384',
    'https://i.seadn.io/gcs/files/fd0e36474cfb57a53aeab4acf1785d82.png?auto=format&dpr=1&w=384',
];

imageElement.src = openSea_storage_nft_habbo[0]

let currentImageIndexRoulete = 0

button_galeria_next.addEventListener('click', () => {

    let intervalValue = 0

    let rotationInitial = setInterval(() => {
        const randomStorageOpenSeaArray = Math.floor(Math.random() * openSea_storage_nft_habbo.length)
        imageElement.src = openSea_storage_nft_habbo[randomStorageOpenSeaArray]

        intervalValue++

        if(intervalValue === 150) {
            clearInterval(rotationInitial)     
            rotationInitial = Math.random(Math.max(), 0)
        }
    }, 60)
})

let currentImageIndex = 0

button_show_preview_content.addEventListener('click', () => {
    currentImageIndex++
    setInterval(() => {
        if (currentImageIndex >= openSea_storage_nft_habbo.length) {
            currentImageIndex = 0
        }
        imageElement.src = openSea_storage_nft_habbo[currentImageIndex]
    }, 20);
})