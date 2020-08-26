export default function todoListTemplate(todos) {
  return todos
    .map(({ text, isCompleted = false }) => {
      return `<li>${isCompleted ? `<s>${text}</s>` : text}</li>`
    })
    .join('')
}
