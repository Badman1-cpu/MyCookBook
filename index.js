document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('recipeForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        var recipeName = document.getElementById('recipeName').value;
        var cookTime = document.getElementById('cookTime').value;
        var description = document.getElementById('description').value;

        var data = {
            recipeName: recipeName,
            cookTime: cookTime,
            description: description
        };