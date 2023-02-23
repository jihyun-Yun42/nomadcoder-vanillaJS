const image = [
  "0.jpg", "1.jpg", "2.jpg"
]
const chosenImage = image[Math.floor(Math.random() * image.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`

// append 맨뒤에 prepend 맨 앞에
document.body.appendChild(bgImage)
