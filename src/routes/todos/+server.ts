import { todos } from '$lib'
import { json } from '@sveltejs/kit'

export async function POST({ request }) {
	const formData = await request.formData()
  const title = formData.get("title")?.toString()

	if (title === undefined) return json(
		{ errors: { title: ["must be present"] }},
		{ status: 422 }
	)

  const id = Math.max(...todos.map(t => t.id)) + 1
  const todo = { id, title, done: false }
  todos.push(todo)

  return json(todo, { status: 201 })
}
