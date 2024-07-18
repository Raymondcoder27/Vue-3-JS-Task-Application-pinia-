import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: "buy milk", isFav: false},
      {id: 2, title: "play fifa", isFav: true}
    ], 
    name: 'Raymond'
  }),
  getters: {
    favs() {
      return this.tasks.filter(t => t.isFav)
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.reduce(()=> {
        return state.tasks.length
      })
    }
  },
  actions: {
    addTask(task) {
    this.tasks.push(task)
    }
  }
})