
const recipes = 
[
  {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies",
      "time": "30 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Chicken Grill",
      "imageSrc": "https://source.unsplash.com/random?chicken",
      "time": "45 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  }
]


// Function to display the recipes
function displayRecipes() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    const image = document.createElement("img");
    image.src = recipe.imageSrc;
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = recipe.name;
    card.appendChild(name);

    const type = document.createElement("p");
    type.textContent = recipe.type === "veg" ? "Vegetarian" : "Non-Vegetarian";
    card.appendChild(type);

    const time = document.createElement("p");
    time.textContent = `Time: ${recipe.time}`;
    card.appendChild(time);

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${recipe.rating}`;
    card.appendChild(rating);

   // Check if the recipe is liked and display the red heart icon
  
   const likeButton = document.createElement("button");
   likeButton.classList.add("like-button");
   likeButton.dataset.index = index;
   likeButton.textContent = recipe.isLiked ? "Liked ❤" : "Like";
   card.appendChild(likeButton);

   container.appendChild(card);
 });
}
  
// Function to implement the "like" feature with Font Awesome icons
function toggleLike(recipeIndex) {
  recipes[recipeIndex].isLiked = !recipes[recipeIndex].isLiked;
  displayRecipes(recipes);

  const likeButton = document.querySelectorAll(".like-button")[recipeIndex];
  if (recipes[recipeIndex].isLiked) {
    likeButton.innerHTML = '<i class="fas fa-heart"></i> Liked';
  } else {
    likeButton.innerHTML = '<i class="far fa-heart"></i> Like';
  }
}

// Function to implement the search functionality
function searchRecipes(query) {
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );
  displayFilteredRecipes(filteredRecipes);
}

// Function to implement the toggle recipe type functionality
function filterRecipesByType(type) {
  if (type === "all") {
    displayRecipes();
  } else {
    const filteredRecipes = recipes.filter(recipe => recipe.type === type);
    displayFilteredRecipes(filteredRecipes);
  }
}

// Function to implement the filter by rating functionality
function filterRecipesByRating(ratingFilter) {
  let filteredRecipes = [];
  if (ratingFilter === "above-4.5") {
    filteredRecipes = recipes.filter(recipe => recipe.rating > 4.5);
  } else if (ratingFilter === "below-4.0") {
    filteredRecipes = recipes.filter(recipe => recipe.rating < 4.0);
  }
  displayFilteredRecipes(filteredRecipes);
}

// Function to display filtered recipes
function displayFilteredRecipes(filteredRecipes) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  filteredRecipes.forEach((recipe, index) => {
    const card = createRecipeCard(recipe, index);
    container.appendChild(card);
  });
}


// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  displayRecipes();

  const likeButtons = document.querySelectorAll(".like-button");
  likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => toggleLike(index));
  });


  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value;
    searchRecipes(searchQuery);
    
  });

  const toggleButtons = document.querySelectorAll(".toggle-button");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const type = event.target.dataset.type;
      filterRecipesByType(type);
    });
  });

  const ratingFilter = document.querySelectorAll('input[name="rating-filter"]');
  ratingFilter.forEach((filter) => {
    filter.addEventListener("change", (event) => {
      const ratingFilter = event.target.value;
      filterRecipesByRating(ratingFilter);
    });
  });
});
