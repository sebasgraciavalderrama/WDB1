window.setTimeout(function (){
    let option = prompt('What would you like to do?');
    let todoArray = [];
    while (option !== 'quit') {
        switch (option) { // You can do this by using if statements...
            case 'list':
                console.log(todoArray);
                break;
            case 'new':
                let todo = prompt('Enter a new todo...');
                todoArray.push(todo);
                todo = '';
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