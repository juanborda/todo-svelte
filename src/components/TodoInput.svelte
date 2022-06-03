<script>
  import TodoStore from '$stores/TodoStore.js' 

  let todo = {
    id: null,
    content: '',
    completed: false
  }

  const sendTodo = (ev) => {
    if (ev.keyCode === 13) {      
      TodoStore.update(todos => [...$TodoStore, {...todo, id: Math.floor(Math.random() * 100)}])      
      todo.content = ''
    }    
  }
</script>

<div
  class="flex items-center mt-4 placeholder-gray-400 shadow bg-gray-800 border-gray-900 border rounded w-full py-2 px-3 text-gray-800"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clip-rule="evenodd"
    />
  </svg>
  <input
    class="appearance-none bg-transparent outline-none text-gray-400 pl-2"
    placeholder="Add Todo"
    bind:value={todo.content}
    on:keyup|preventDefault={sendTodo}
  />
</div>
