const api = {
  async addToCart(id) {
    const res = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({
        product_id: id,
        quantity: 1
      })
    });
  }
};

export default api;
