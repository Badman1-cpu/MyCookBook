//DOM Render Functions
function renderOneRecipe(recipe){
    //Bulid Reccipe Card
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML =`
    <img src="${recipe.imageUrl}">
    <div class="content">
        <h4>${recipe.recipeName}
    `
}




//Initial Render
function Initialize(){
    recipeData.forEach(recipe => renderOneRecipe(recipe))
}