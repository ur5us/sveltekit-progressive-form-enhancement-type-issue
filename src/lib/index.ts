// place files you want to import through the `$lib` alias in this folder.

export type Todo = { id: number, title: string, done: boolean }

export let todos: Todo[] = [
  {
    id: 1,
    title: "Solve the mystery",
    done: false
  },
  {
    id: 2,
    title: "Fix SvelteKit",
    done: false
  },
  {
    id: 3,
    title: "Submit PR",
    done: false
  }
]
