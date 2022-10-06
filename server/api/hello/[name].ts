export default defineEventHandler((event) => {
  return { hello: `Hello, ${event.context.params.name}!` }
})
