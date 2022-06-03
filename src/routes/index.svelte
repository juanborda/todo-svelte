<script context="module">
  export const prerender = true;
</script>

<script>  
  import TodoList from '$components/TodoList.svelte'
  import TodoInput from '$components/TodoInput.svelte'  
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="my-32">
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-gray-700 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <TodoInput/>
      </div>
      <TodoList></TodoList>
    </div>
  </div>
</section>

<style>
</style>
