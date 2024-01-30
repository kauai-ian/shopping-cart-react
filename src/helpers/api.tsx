export async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching data:", error);
    throw error;
  }
}
