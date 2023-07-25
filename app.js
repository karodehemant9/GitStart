//Query Selector

let listItem2 = document.querySelector('.list-group-item:nth-child(2)');
console.log(listItem2)
listItem2.style.backgroundColor = 'green';

let listItem3 = document.querySelector('.list-group-item:nth-child(3)');
listItem3.style.display = 'none'


//Query Selector All

let listItems = document.querySelectorAll('.list-group-item');
console.log(listItems)

listItems[1].style.color = 'white'

for(let i = 0;i<listItems.length;i++)
{
    if(i%2 != 0)
    {
        listItems[i].style.backgroundColor = 'green'
    }
}
