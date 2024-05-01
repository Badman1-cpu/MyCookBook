//DOM Render Functions
function renderOneRecipe(recipe){
    //Bulid Reccipe Card
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML =`
    <img src="${recipe.imageUrl}">
    <div class="content">
        <h4>${recipe.name}</h4>
        <p>
            $<span class="cook-time">${recipe.time}</span> CookTime
        <h4>${recipe.description}</h4>
    `
    console.log(card)
}


// Fetch JSON data from URL
fetch('http://localhost:3000/recipes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(recipes => {
    // Define recipeData after fetching JSON data
    const recipeData = recipes.data;
    Initialize => {
      recipeData.forEach(recipe => renderOneRecipe(recipe))
  }
    // Call Initialize function with fetched data
    Initialize();
  })