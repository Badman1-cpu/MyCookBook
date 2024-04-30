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
        fetch('http://localhost:3000/recipes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(function (response) {
                    if (response.ok) {
                        console.log('Recipe added successfully!');
                        // Redirect the user or show a success message here
                    } else {
                        console.error('Error adding recipe:', response.statusText);
                        // Handle the error appropriately
                    }
                })
                .catch(function (error) {
                    console.error('Error adding recipe:', error);
                    // Handle network errors or other unexpected issues
                });
            });
        });