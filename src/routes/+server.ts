import { json } from "@sveltejs/kit";
import { todos } from "$lib";

export function GET() {
  return json(todos);
}

export async function POST({ request }) {
  const { title } = await request.json()
  const id = Math.max(...todos.map(t => t.id)) + 1
  const todo = { id, title, done: false }
  todos.push(todo)

  return json(todo, { status: 201 })
}
