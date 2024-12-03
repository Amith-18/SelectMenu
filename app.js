

var selectField = document.getElementById('selectField');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName('options');
var list = document.getElementById('list');
let arrow = document.getElementById('arrow');


list.classList.add('hide');


selectField.addEventListener('click', () => {
    list.classList.toggle('hide');
    arrow.classList.toggle('rotate');
    
});

for(Option of options){
    Option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.add('hide');
        arrow.classList.remove('rotate');
    }
};



// for (const option of options) {
//     option.onclick = function (event) {
//         selectText.innerHTML = event.target.innerText;
//     };
// }
