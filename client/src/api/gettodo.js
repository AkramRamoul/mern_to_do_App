export async function gettodo() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const response = await fetch(`${baseUrl}/todo`);
  return response.json();
}
