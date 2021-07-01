const config = {
  api_url: 'https://mongo-arsy.herokuapp.com/',
  api_dev: 'http://localhost:8000/',
  headers: {
    Authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYzg0MWY1MTBhZmYzMzdlODRiMmYzNyIsInVzZXJuYW1lIjoiYWxkeXkyMzFzIiwiZW1haWwiOiJib2NhaC5uZ2lrQGdtYWlsLmNvbXMiLCJwYXNzd29yZCI6IiQyYiQxMCR4T3dxODZGanVEbHlyQUFrYzJZcVJ1ejVDWVluTUljaG5VMG9OOVdObnRrNmlrMHhDLnNuYSIsIl9fdiI6MH0sImlhdCI6MTYyMzczNjgyMSwiZXhwIjoxNjI2MzI4ODIxfQ.hgLznHDnpuwF9uJbfUXHh81g5EjFoRTtwLleU3fSius',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  wa: `https://api.whatsapp.com/send?phone=6282135293831&text=Saya%20Ingin%20Tanya%20${window.location.href}`
}

export default config
