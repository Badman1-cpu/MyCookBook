//DOM Render Functions
function renderOneRecipe(recipes){
    //Bulid Reccipe Card
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML =`
    <img src="${recipes.imageUrl}">
    <div class="content">
        <h4>${recipes.name}</h4>
        <p>
            $<span class="cook-time">${recipes.time}</span> CookTime
        </p>
        <p>${recipes.description}</p>
    </div>
    <div class="button">
      <button> Like </button>
      <button> Delete </button>
    `
    document.querySelector(`#recipe-list`).appendChild(card)
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
    console.log(`after get all animals`)
  }
initialize()

  //const recipeContainer = document.getElementById('recipe-list');

  //function renderRecipeCard(recipes) {
    // Create elements for the recipe card
    //const card = document.createElement('div');
    //card.classList.add('recipe-card');
    
    //const title = document.createElement('h2');
    //title.textContent = recipes.name;
  
    //const ingredients = document.createElement('ul');
    //recipes.description.forEach(description => {
      //const li = document.createElement('li');
      //li.textContent = description;
      //ingredients.appendChild(li);
    //});
  
    //const instructions = document.createElement('p');
    //instructions.textContent = recipes.time;
  
    // Append elements to the card
    //card.appendChild(name);
    //card.appendChild(description);
    //card.appendChild(time);
  
    // Append the card to the container
    //recipeContainer.appendChild(card);
  //}
  
