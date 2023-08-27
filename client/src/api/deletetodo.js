export async function deletetodo(id) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  fetch(`${baseUrl}/todo/${id}`, {
    method: "DELETE",
  });
}
