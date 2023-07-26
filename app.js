// USER FORM SCRIPT
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '' || phoneInput.valur === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    //storing User object in local storage
    let User = {
        name : nameInput.value,
        email : emailInput.value,
        contact_no : phoneInput.value
    };

    let serializedUser = JSON.stringify(User);
    localStorage.setItem(emailInput.value ,serializedUser);
    

    let deserializedUser = JSON.parse(localStorage.getItem(emailInput.value));
    console.log(deserializedUser);

    showUserOnScreen(User);


    

    // Clear fields
   
  }
}

function showUserOnScreen(User)
{
    // Create new list item with user
    const newli = document.createElement('li');

    // Add text node with input values
    newli.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${phoneInput.value}`));

    const deleteBtn = document.createElement('input');
    deleteBtn.setAttribute('type','button');
    deleteBtn.setAttribute('value','Delete');
    deleteBtn.id = 'deleteButton';

    

    newli.appendChild(deleteBtn);

    // Append to ul
    userList.appendChild(newli);

    deleteButton.onclick = () => {
        deleteButton.parentElement.remove();
        localStorage.removeItem(User.email);
     };

}




