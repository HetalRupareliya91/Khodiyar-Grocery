// Khodiyar Grocery - API helper
const api = {
  base: '/api',
  async get(path) {
    const res = await fetch(this.base + path);
    if (!res.ok) throw new Error('Request failed: ' + res.status);
    return res.json();
  },
  async send(path, method, body) {
    const res = await fetch(this.base + path, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    });
    if (!res.ok) throw new Error('Request failed: ' + res.status);
    return res.status === 204 ? null : res.json();
  }
};
