export const productAPI = {
  addToCart() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.ok);
  }
};