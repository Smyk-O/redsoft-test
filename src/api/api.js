export const productAPI = {
  addToCart() {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.data)
  }
};