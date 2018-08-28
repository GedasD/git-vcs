console.log("pavyko!");
//1. getElementById('id') pagal id
var pagalId = document.getElementById('pirmas');
//2. GetElementsByClassName('className') pagal ClassName
var pagalClass = document.getElementsByClassName('orange');
//3. getElementByTagName('tagName') pagal TagName
var pagalTag = document.getElementsByTagName('li');
//4. querySelectorAll('css-selector');
//Naudojame css selectorius
//Grazinamas masyvas
var suCss = document.querySelectorAll('ul:first-child li:nth-child(4)');
// var suCss = document.querySelectorAll('.orange');
// var suCss = document.querySelectorAll('#pirmas');

var i = 0;
var orange = document.querySelectorAll('.orange');
for(; i < orange.length; i++)
{
    orange[i].innerHTML = "<h2>Oranzinis"+i+"</h2>";
}

var neOrandziniai = document.querySelectorAll('ul:first-child > :not(.orange)');
console.log(neOrandziniai);

for(var k = 0; k < neOrandziniai.length; k++)
{
    neOrandziniai[k].className += " big-text";
    neOrandziniai[k].className += " orange";
    neOrandziniai[k].innerHTML = "<i>"+neOrandziniai[k].innerHTML+"</i>";
}

var menu = document.querySelectorAll('.menu');

for(var j = 0; j < menu.length; j++)
{
    menu[j].addEventListener('click', function()
    {
        this.innerHTML += " Paspaustas";
        this.nextElementSibling.classList.toggle('show');
    });
}


// console.log(pagalId);
// console.log(pagalClass);
// console.log(pagalTag);
// console.log(suCss);

