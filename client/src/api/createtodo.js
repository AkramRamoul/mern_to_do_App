export async function createtodo(title, completed) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const response = await fetch(`${baseUrl}/todo`, {
    method: "POST",
    body: JSON.stringify({ title, completed }),
    headers: { "Content-Type": "application/json" },
  });
  const createdTodo = await response.json();
  return createdTodo;
}
