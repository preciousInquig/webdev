const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
const ul = document.getElementById('fruit-list');

for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement('li');
  li.innerText = fruits[i];
  ul.appendChild(li);
}
