export async function getProducts() {
  const response = await fetch("http://localhost:5000/products");
  if (!response.ok) {
  }
  return response.json();
}
export async function getProductById(productId) {
  const response = await fetch(`http://localhost:5000/products/${productId}`);
  if (!response.ok) {
  }
  return response.json();
}

export async function create(product) {
  const response = await fetch("http://localhost:5000/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
  }
  return response.json();
}

export async function update(productId, newProduct) {
  const response = await fetch(`http://localhost:5000/products/${productId}`, {
    method: "PUT",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
  }
  return response.json();
}

export async function destroy(productId) {
  const response = await fetch(`http://localhost:5000/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
  }
  return response.json();
}
