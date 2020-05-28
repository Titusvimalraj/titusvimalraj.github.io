const recipeNameInput = document.querySelector('#input-recipe-name');
const recipeRatingInput = document.querySelector('#input-recipe-rating');
const addBtn = document.querySelector('#btn-add');
const recipeList = document.querySelector('#recipe-list');


addBtn.addEventListener('click', () => {
  const enteredrecipeName = recipeNameInput.value;
  const enteredrecipeRating = recipeRatingInput.value;

  if (
    enteredrecipeName.trim().length <= 0 ||
    enteredrecipeRating.trim().length <= 0 ||
    enteredrecipeRating < 1 ||
    enteredrecipeRating > 5
  ) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid inputs';
    alert.message = 'Please enter a valid reason and amount!';
    alert.buttons = ['Okay'];
    document.body.appendChild(alert);
    return alert.present();    
  }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<strong>${enteredrecipeName}:</strong>&nbsp;${enteredrecipeRating}/5`;

  recipeList.appendChild(newItem);

  recipeNameInput.value = '';
  recipeRatingInput.value = '';
});
