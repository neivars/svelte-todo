import {
    generate
} from './randomID';

const todoStorage = {
    getTodoItems() {
        const todoItems = window.localStorage.getItem('todoItems');

        if (todoItems !== null) {
            return JSON.parse(todoItems);
        } else {
            window.localStorage.setItem('todoItems', '[]');
            return [];
        }
    },

    saveTodoItem(text) {
        const todoItems = this.getTodoItems();

        todoItems.push({
            uid: generate(),
            text
        });

        try {
            window.localStorage.setItem('todoItems', JSON.stringify(todoItems));
        } catch (e) {
            console.error(e + '\n\n == Maybe the storage is full? ==');
        }
    },

    updateTodoItem(uid, text) {
        const todoItems = this.getTodoItems();

        let updated = false;

        const updatedTodoItems = todoItems.map(todoItem => {
            if (todoItem.uid === uid) {
                todoItem.text = text;
                updated = true;
            }
        });

        if (updated) {
            window.localStorage.setItem('todoItems', JSON.stringify(updatedTodoItems));
        } else {
            console.error(' == There\'s no todo item with that ID. ==');
        }
    },

    deleteTodoItem(uid) {
        const todoItems = this.getTodoItems();

        const updatedTodoItems = todoItems.filter(todoItem => todoItem.uid !== uid);

        if (updatedTodoItems.length < todoItems.length) {
            window.localStorage.setItem('todoItems', JSON.stringify(updatedTodoItems));
        } else {
            console.error(' == There\'s no todo item with that ID. ==');
        }
    },

    clearTodoItems() {
        window.localStorage.removeItem('todoItems');
    }
};

export default todoStorage;