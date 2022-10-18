const btn = document.getElementById('add-item-input')
const inputItem = document.getElementById('item-input')
const list = document.getElementById('list') 

// Global variable
const shoppingList = []

// Event
btn.addEventListener('click', () => {
   if (shoppingList.includes(inputItem.value)){
       console.log('no duplicates')
   }  else {
    shoppingList.push(inputItem.value)
    render() 
}
   inputItem.value = ''
});

function render() {
       let html = ''
    for (let item of shoppingList) {
          html += `<li class="list-item">${item}</li>`
       }
         list.innerHTML = html
    }




