<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  import type { Todo } from "$lib";

  export let data: PageData;

  let formResult = {}
  let todos: Todo[] = data.todos
</script>

<h1>Todos</h1>
<ul>
  {#each todos as todo (todo.id)}
    <li>{ todo.title }</li>
  {/each}
</ul>
<form action="/todos" method="POST" use:enhance={() => {
  return async ({ result, update }) => {
    formResult = result
    // the following should not work according to the types as result should be
    // of type ActionResult, s. https://kit.svelte.dev/docs/types#public-types-actionresult
    // That means it should have one of the following shapes:
    // { type: 'success'; status: number; data?: Success }
    // { type: 'failure'; status: number; data?: Failure }
    // { type: 'redirect'; status: number; location: string }
    // { type: 'error'; status?: number; error: any };
    // However, that is not true as result is simply data here, hence the
    // following does work. But because we don’t have to type or status, we
    // can’t implement error handling.
    todos = [...todos, result]

    await update()
  }
}}>
  <input type='text' name="title" required />
  <input type="submit" value="Add" />
</form>
{#if Object.keys(formResult).length}
  <section>
    <h2>Last form result</h2>
    <dl>
      {#each Object.entries(formResult) as [k, v] }
        <div class="action-result-fail">
          <dt>{ k }</dt>
          <dd>{ v }</dd>
        </div>
      {/each}
    </dl>
  </section>
{/if}

<style>
  :global(body) {
    max-width: 20rem;
    margin: auto;
  }

  .action-result-fail {
    display: flex;
    justify-content: space-between;
  }
</style>