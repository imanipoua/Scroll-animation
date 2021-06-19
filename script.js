const boxes = document.querySelectorAll('.box') //put all box classes into an array


//adding even listener to the scroll event handler for when scrolling happens
//using window since it represents the window in which the script is running and is exposed to js code
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4 //innerHeight returns the interior height of the window in pixels

    //using forEach function to loop through each box
    //getBoundClientRect -> providing info about the size of an element and its position relative to the viewport
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //position at the top of the box

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}