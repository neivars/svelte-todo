<script>
    import Todo from './components/Todo.svelte';

    document.body.classList.add('bg-light');

    let todoTexts = [];

    let inputText = '';

    function createTodo(event) {
        event.preventDefault();

        if (inputText.trim() == '') {
            return;
        }

        todoTexts = [...todoTexts, inputText];
        inputText = '';
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
    <form on:submit={createTodo} class="container">
        <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="New todo" aria-label="Input new todo"
                aria-describedby="createTodo" bind:value={inputText}>
            <div class="input-group-append">
                <button class="btn btn-secondary" type="submit" id="createTodo">Add</button>
            </div>
        </div>
    </form>

    <section class="row px-2">
        {#each todoTexts as text }
            <Todo {text} />
        {/each}
    </section>
</main>