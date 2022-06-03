<script>
  import TodoStore from '$stores/TodoStore.js';
  import TodoItemOptions from '$components/TodoItemOptions.svelte';

  export let todo;

  const toggleStatus = (todo) => {
    const idx = $TodoStore.findIndex((t) => t.id === todo.id);
    $TodoStore[idx] = { ...todo, completed: !todo.completed };
  };
</script>

<div class="flex mb-4 items-900 cursor-pointer" on:click={toggleStatus(todo)}>
  <p
    contenteditable="true"
    class="w-full {todo.completed ? 'text-green-700 line-through' : 'text-gray-400'}"
  >
    {todo.content}
  </p>

  <TodoItemOptions />
</div>
