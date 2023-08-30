import type { PageLoad } from "./$types"

export const load: PageLoad = ({ fetch }) => {
  return {
    todos: fetch("/", { headers: { Accept: "application/json"}}).then(result => result.json())
  }
}