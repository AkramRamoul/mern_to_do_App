export async function editodo(id, completed) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  await fetch(`${baseUrl}/todo/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ completed }),
    headers: { "Content-Type": "application/json" },
  });
}
