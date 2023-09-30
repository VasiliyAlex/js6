let user =  [];

for (let i = 0; i < Infinity; i++) {
let text = prompt('Введите действие (add - добавить; del - удалить) и имя через запятую и пробел')
 if (text == 'stop') { break}
 
let array = text.split(', ')
array[0] == 'add' ? user.push(array[1]) : ' '  ;

if (array[0] == 'del') {
    for(let key in user) {
    user[key] == array[1] ? user.splice(key, 1) : ''}
};
console.log(user);
}
console.log(user);