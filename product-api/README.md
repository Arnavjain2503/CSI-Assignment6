# Product REST API

Lightweight Node.js + Express API offering CRUD on *products* with:

- **Joi validation** for safe inputs  
- **Central error handling** and custom logger  
- Organized, future-proof file structure  

## Quick Start

```bash
npm install
npm run dev   # nodemon hot-reload
```

### Endpoints

| Method | Route                 | Description          |
|--------|-----------------------|----------------------|
| GET    | /api/products         | List all products    |
| GET    | /api/products/:id     | Get single product   |
| POST   | /api/products         | Create product       |
| PUT    | /api/products/:id     | Update product       |
| DELETE | /api/products/:id     | Delete product       |

Test with Postman / curl.  
Example:

```bash
curl -X POST http://localhost:5000/api/products          -H "Content-Type: application/json"          -d '{"name":"Keyboard","price":49.5}'
```
