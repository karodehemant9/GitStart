//Making the title have a black border
let headerTitle = document.getElementById('header-title');
let mainHeader = document.getElementById('main-header');
headerTitle.style.border = 'solid 3px #000'
mainHeader.style.border = 'solid 3px #000'

//making ADD ITEM bold and change the font color to green
let lists = document.getElementsByClassName('title');
lists[0].style.fontWeight = 'bold'
lists[0].style.color = 'green'


let items = document.getElementsByClassName('list-group-item');
console.log(items)
items[2].style.backgroundColor = 'green'


let li = document.getElementsByTagName('li')

for(let i = 0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold'
    li[i].style.backgroundColor = '#f4f4f4'
}
