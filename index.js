//DOM Render Functions
function renderOneRecipe(recipe){
    //Bulid Reccipe Card
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML ='
    <
    '
}




//Initial Render
function Initialize(){
    recipeData.forEach(recipe => renderOneRecipe(recipe))
}