import "../scss/main.scss"
// @ts-ignore
import imageLink from '../assets/be-your-personal-egirl-or-gamer-girl.png.jpeg'

window.onload = () => {
    console.log("image link", imageLink)

    const { body } = document

    const image = new Image()
    image.src = imageLink

    body.appendChild(image)
}