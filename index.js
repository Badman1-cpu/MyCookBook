//DOM Render Functions
function renderOneRecipe(recipes){
    //Bulid Reccipe Card
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML =`
    <div class="content">
        <h4>${recipes.name}</h4>
        <p>
            <p class="cook-time">${recipes.time}</p> CookTime
        </p>
        <p>${recipes.description}</p>
        <span class="times cooked" >${recipes.cooked}</span>
    </div>
    <div class="button">
      <button id="like"> Cooked </button>
      <button id="delete_btn"> Delete </button>
    `
    card.querySelector('#like').addEventListener('click', () =>{
      recipes.cooked+= 1
      card.querySelector('span').textContent= recipes.cooked
      updateRecipe(recipe)
    })
    document.querySelector(`#recipe-list`).appendChild(card);

    card.querySelector('#delete_btn').addEventListener('click', () => {        
      card.remove()
      deleteRecipe(recipes.id)
    })
}


// Fetch JSON data from URL
function getAllRecipes(){
  fetch('http://localhost:3000/recipes')
  .then(response => response.json())
  .then(recipes => recipes.forEach(recipes => renderOneRecipe(recipes)))
  console.log(`before fetch retunrs`)
}

//Initial render
//Get data and render my recipes to the dom
  function initialize(){
    getAllRecipes()
    console.log(`after get all recipes`)
  }
  initialize()

//Add Recipe to Recipe-list
//
//Event Listeners
document.querySelector('#recipeForm').addEventListener('submit',recipe);

//Ajax call so that data is in the javascript file and not just inb the json server, do i delete the fetch data and everything after that or leave as a fail safe?
/*const recipes = $.getJSON("db.json", function(data){
});
*/
//Define recipe for jks globally
let recipe = 
function handleSubmit(e){
  e.preventDefault()
      recipe = {
      name:e.target.name.value,
      description:e.target.description.value,
      time:e.target.time.value,
      cooked: 0  }
  addRecipe(recipe)
}


//Handle Submit
function addRecipe(recipe){
  fetch('http://localhost:3000/recipes',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
  })
  .then(res => res.json())
  .then(recipe => renderOneRecipe(recipe))
}
//Handles Delete
function deleteRecipe(id){
  fetch(`http://localhost:3000/recipes/${id}`, {
    method:'DELETE',
    headers:{
      'Content-Type':'application/json'
}
  })
  .then(res => res.json())
  .then(recipes => console.log(recipes))

}
//Hnadles update
function updateRecipe(recipe){
  fetch(`http://localhost:3000/recipes/${recipe.id}`,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(recipe)
  })
  .then(res => res.json())
  .then(recipe => console.log(recipe))
}


//let card = "string"
//function tayler(card) {
  //console.log(card)
 // let card = 1
  //console.log(card)
//}
