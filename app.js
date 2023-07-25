//Making the title have a black border
let headerTitle = document.getElementById('header-title');
let mainHeader = document.getElementById('main-header');
headerTitle.style.border = 'solid 3px #000'
mainHeader.style.border = 'solid 3px #000'

//making ADD ITEM bold and change the font color to green
let lists = document.getElementsByClassName('title');
lists[0].style.fontWeight = 'bold'
lists[0].style.color = 'green'




//this getElementsByTagName is working on newly added <li>Item 5</li>
let li = document.getElementsByTagName('li')

for(let i = 0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold'
    li[i].style.backgroundColor = '#f4f4f4'
}

//this getElementsByClassName is not working on newly added <li>Item 5</li>
let items = document.getElementsByClassName('list-group-item');
for(let i = 0;i<li.length;i++)
{
    items[i].style.fontWeight = 'bold'
    items[i].style.backgroundColor = 'green'
}