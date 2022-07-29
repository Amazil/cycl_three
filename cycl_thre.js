let arr =  ["Максим", "Car", "Сергей", "Андрей", "culture", "Ярослав", "Кирилл",7,8,9,null, undefined]

function count(arr) {
    for (let i = 0; i < arr.length; i++) {
       if (typeof arr[i] === 'string'){
        arr[i] = arr[i].replace(/с/gi, "") 
       }  
    }
    return arr
}
console.log(count(arr))