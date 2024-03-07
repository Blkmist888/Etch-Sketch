


const container= document.getElementById('container')
container.style.display='flex'
container.style.flexWrap='wrap'
container.style.backgroundColor='blue'
container.style.height='512px'
container.style.width='512px'


const rows= 16
const columns= 16

for (let index = 0; index < rows*columns; index++) {
 const createGrid= document.createElement('div')
createGrid.style.boxSizing='border-box'
createGrid.style.backgroundColor='white'
createGrid.style.height=`32px`
createGrid.style.width=`32px`
createGrid.style.border=' 1px solid black'
container.appendChild(createGrid)
createGrid.addEventListener('mouseover', event =>{createGrid.style.backgroundColor='black'})
}

