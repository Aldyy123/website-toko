import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { openDB } from 'idb'

const objectIdb = {
  Db: 'favorite',
  ObjectStore: 'favorite-product'
}

const apa = openDB(objectIdb.Db, 1, {
  upgrade (db) {
    db.createObjectStore(objectIdb.ObjectStore, { keyPath: 'id' })
  }
})

createApp(App)
  .mixin({
    data () {
      return {
        api_url: 'https://mongo-arsy.herokuapp.com/',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYzg0MWY1MTBhZmYzMzdlODRiMmYzNyIsInVzZXJuYW1lIjoiYWxkeXkyMzFzIiwiZW1haWwiOiJib2NhaC5uZ2lrQGdtYWlsLmNvbXMiLCJwYXNzd29yZCI6IiQyYiQxMCR4T3dxODZGanVEbHlyQUFrYzJZcVJ1ejVDWVluTUljaG5VMG9OOVdObnRrNmlrMHhDLnNuYSIsIl9fdiI6MH0sImlhdCI6MTYyMzczNjgyMSwiZXhwIjoxNjI2MzI4ODIxfQ.hgLznHDnpuwF9uJbfUXHh81g5EjFoRTtwLleU3fSius'
      }
    },
    methods: {
      async insertIDB (value) {
        return (await apa).put(objectIdb.ObjectStore, value)
      },
      async deleteIDB (id) {
        return (await apa).delete(objectIdb.ObjectStore, id)
      },
      async getIDB (value) {
        return (await apa).get(objectIdb.ObjectStore, value)
      }
    }
  })
  .use(store)
  .use(router)
  .mount('#app')
