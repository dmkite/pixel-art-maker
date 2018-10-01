//create 20x20 canvas
let main = document.querySelector('main')
for(let i = 0; i < 400; i++){
    let pix = document.createElement('div')
    main.appendChild(pix)
}

//drag paintbrush
main.addEventListener('mouseover', (e) => paint2(e))

function paint2(e){
    let color = document.getElementById('color').value
    if(mouseDown === 1){
        event.target.style.backgroundColor = color
    }   
}

mouseDown = 0;
document.querySelector('body').addEventListener('mousedown', () => mouseDown = 1)
document.querySelector('body').addEventListener('mouseup', () => mouseDown = 0)


//save and load feature
let saveButton = document.getElementById('save')
let loadButton = document.getElementById('load')

saveButton.addEventListener('click', save)
loadButton.addEventListener('click', load)

function save(){
    let b = document.createElement('b')
    b.textContent = `Last saved ${Date()}`
    document.querySelector('body').appendChild(b)
    let saveData = main.innerHTML
    localStorage.setItem('saveFile', saveData)
}

function load(){
    let content = localStorage.getItem('saveFile')
    
    if(content === null){
        let b = document.createElement('b')
        b.textContent = 'nothing to load'
        document.querySelector('body').appendChild(b)
        return false
    }
    else{ main.innerHTML = content}
}

