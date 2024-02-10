function createGrid(){
const container = document.getElementById('containerDiv')
for (let index = 0; index < 16; index++) {
  const divCreate= document.createElement('div')
   console.log("divs Created (:")
   container.appendChild(divCreate)
}
}