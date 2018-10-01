(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let main = document.querySelector('main')
for(let i = 0; i < 400; i++){
    let pix = document.createElement('div')
    main.appendChild(pix)
}



// main.addEventListener('click', (e) => paint(e))

main.addEventListener('mouseover', (e) => paint2(e))

function paint2(e){
    let color = document.getElementById('color').value
    if(mouseDown === 1){
        event.target.style.backgroundColor = color
    }

}

mouseDown = 0;
document.querySelector('body').addEventListener('mousedown', () => {
    mouseDown = 1})
document.querySelector('body').addEventListener('mouseup', () => {
mouseDown = 0})

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
    console.log(content) 
    if(content === null){
        let b = document.createElement('b')
        b.textContent = 'nothing to load'
        document.querySelector('body').appendChild(b)
        return false
    }
    else{ main.innerHTML = content}
}
},{}]},{},[1]);
