<script>
  import TodoStore from '$stores/TodoStore.js' 
  import TodoItem from './TodoItem.svelte';
  $: console.log($TodoStore)
</script>

<div class="todo-list">
  {#each $TodoStore as todo (todo.id)}
    <TodoItem todo={todo} />
  {:else}
    <p class="text-center text-green-500">No todo items. Add one now!</p>
  {/each}
</div>
