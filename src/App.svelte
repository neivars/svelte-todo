<script>
    import Todo from "./components/Todo.svelte";
    import todoStorage from "./services/storage.js";

    document.body.classList.add("bg-light");

    let todoItems = todoStorage.getTodoItems();

    let inputText = "";

    function handleCreateTodo(event) {
        if (inputText.trim() == "") {
            return;
        }

        todoStorage.saveTodoItem(inputText);
        todoItems = todoStorage.getTodoItems();
        inputText = "";
    }

    function handleUpdateTodo(event) {
        const {
            uid,
            text
        } = event.detail;
        todoStorage.updateTodoItem(uid, text);
        todoItems = todoStorage.getTodoItems();
    }

    function handleDeleteTodo(event) {
        const {
            uid
        } = event.detail;
        todoStorage.deleteTodoItem(uid);
        todoItems = todoStorage.getTodoItems();
    }
</script>

<svelte:head>
    <title>Lean, Mean, Not Forgetting Machine - Svelte Todo</title>
</svelte:head>

<header class="text-center mb-5">
    <h1 class="display-1">
        Svelte Todo
    </h1>
    <p>You call it feature-poor, I call it lean. Like <strong>turkey</strong>.</p>
</header>

<main>
    <form on:submit|preventDefault={handleCreateTodo} class="container">
        <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="New todo" aria-label="Input new todo"
                aria-describedby="createTodo" bind:value={inputText}>
            <div class="input-group-append">
                <button class="btn btn-secondary" type="submit" id="createTodo">Add</button>
            </div>
        </div>
    </form>

    <section class="row px-2">
        {#each todoItems as {uid, text} (uid)}
            <Todo {text} {uid} on:update={handleUpdateTodo} on:delete={handleDeleteTodo} />
        {/each}
    </section>
</main>