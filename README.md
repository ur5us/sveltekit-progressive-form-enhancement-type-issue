# What is this?

A little SvelteKit demo app to demonstrate that form enhancement does not work
as expected/documented.

## Implementation detail

The structure is a bit unusual in that `+page.server.ts` is not used at all.
It’s basically an SPA with an API which is simply the context in which I’m
running into this issue.

# What’s broken? Form enhancement!

According to [https://kit.svelte.dev/docs/form-actions#progressive-enhancement)(Form actions docs), the `SubmitFunction` can “return a callback that runs with the [ActionResult](https://kit.svelte.dev/docs/types#public-types-actionresult)”. However, in practice the `result` is the JSON data returned by server instead of an object with a `type` property and a combination of `status`, `data` and/or `location` based on its `type`.