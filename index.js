//DOM Render Functions
function renderOneRecipe(recipes){
    //Bulid Reccipe Card
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML =`
    <div class="content">
        <h4>${recipes.name}</h4>
        <p>
            <span class="cook-time">${recipes.time}</span> CookTime
        </p>
        <p>
        <span id="cooked">${recipes.timesCooked}</span>
        </p>
        <p>${recipes.description}</p>
    </div>
    <div class="button">
      <button id="delete_btn"> Delete </button>
    `
    document.querySelector(`#recipe-list`).appendChild(card);

    card.querySelector('#delete_btn').addEventListener('click', () => {
        card.remove()
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

//Event Listeners
document.querySelector('#recipeForm').addEventListener('submit',handleSubmit);


function handleSubmit(e){
  e.preventDefault()
    let recipe = {
      name:e.target.name.value,
      description:e.target.description.value,
      time:e.target.time.value
    }
  renderOneRecipe(recipe)
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

//Delete Button
