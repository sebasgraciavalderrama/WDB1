window.setTimeout(function (){
    let option = prompt('What would you like to do?');
    let todoArray = [];
    while (option !== 'quit') {
        switch (option) { // You can do this by using if statements...
            case 'list':
                console.log('********');
                console.log(todoArray);
                console.log('********');
                break;
            case 'new':
                console.log('********');
                let todo = prompt('Enter a new todo...');
                console.log('********');
                todoArray.push(todo);
                todo = '';
                break;
            case 'delete':
                console.log('********');
                todoArray.forEach(printTodo);
                let deletion = prompt('What would you like to delete?');
                console.log('********');
                todoArray.splice(parseInt(deletion),1);
                todoArray.forEach(printTodo);
                break;
            case 'quit':
                option = 'quit';
                break;
            default:
                prompt('Invalid option! Try again...');
                break;
        }
        option = prompt('What would you like to do?');
    }
}, 5000);

function printTodo (arr, index) {
    console.log(index + ': ' + arr);
}