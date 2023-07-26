let form  = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

//fiter event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e)
{
    e.preventDefault();

    //get input value()
    let newItem = document.getElementById('item').value;
    let description = document.getElementById('description').value;


    //create new li element
    let li = document.createElement('li');

    //add class
    li.className = 'list-group-item';


    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+description));




    //create delete button element
    let deleteButton = document.createElement('button');

    //add class to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    //delete button text node
    deleteButton.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteButton);



    let editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm float-right edit';
    let newButtonText = document.createTextNode('Edit');
    editButton.appendChild(newButtonText);
    li.appendChild(editButton);



    //append li to list
    itemList.appendChild(li);

     
} 


//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

//filter items
function filterItems(e)
{
    //converting to lower case
    let text = e.target.value.toLowerCase();
    //get list items
    let items = itemList.getElementsByTagName('li');

    //covert collection to an array
    Array.from(items).forEach(function(item)
    {
        let allNodes = item.childNodes;
        let itemName1 = allNodes[0].textContent;
        let itemName2 = allNodes[1].textContent; 
        if(itemName1.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });

}


let allItems = document.getElementsByTagName('li');


for(let i = 0;i<allItems.length;i++)
{
    let editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm float-right edit';
    let newButtonText = document.createTextNode('Edit');
    editButton.appendChild(newButtonText);
    allItems[i].appendChild(editButton);
}