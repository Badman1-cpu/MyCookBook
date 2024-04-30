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




//Initial Render
function Initialize(){
    recipeData.forEach(recipe => renderOneRecipe(recipe))
}