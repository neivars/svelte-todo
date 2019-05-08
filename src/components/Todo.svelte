<script>
    import {
        createEventDispatcher
    } from "svelte";
    import {
        fly
    } from "svelte/transition";

    export let text = "...";
    export let uid;

    const dispatch = createEventDispatcher();

    function todoItemStyle() {
        function randomizeRotation() {
            const sign = Math.random() < 0.5 ? -1 : 1;
            const rotationAngle = Math.floor(Math.random() * 4.5) * sign;

            return `transform: rotate(${rotationAngle.toFixed(2)}deg)`;
        }

        function randomizeColor() {
            const colors = ["palegreen", "pink", "moccasin"];
            const index = Math.floor(Math.random() * 3);

            return `background-color: ${colors[index]}`;
        }

        return [randomizeColor(), randomizeRotation()].join("; ");
    }
</script>

<style>
    .todo-item {
        position: relative;
        height: 300px;
        box-shadow: 0px 5px 5px #c3c3c3;
        overflow: auto;
    }

    .delete-button {
        position: fixed;
        top: 0;
        right: 0;
        display: none;
    }

    .todo-item:hover .delete-button {
        position: fixed;
        display: block;
    }
</style>

<div class="col-12 col-md-6 col-lg-4 col-xl-2 mb-4" transition:fly={{ y: 100, duration: 350 }}>
    <div class="todo-item p-3" style={todoItemStyle()}>
        <button class="btn delete-button" on:click={e=> dispatch('delete', {uid})}>
            &times;
        </button>
        <p>{text}</p>
    </div>
</div>