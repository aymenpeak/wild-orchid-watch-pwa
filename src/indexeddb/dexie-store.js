// To (properly) support Safari <10.1, we need a shim:
// https://dexie.org/docs/IndexedDB-on-Safari
import Dexie from 'dexie'

const db = new Dexie('WowDb')

db.version(1).stores({
  obsIndividual: '++id, isUploaded',
})

export default db
