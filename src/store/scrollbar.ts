import {defineStore} from "pinia";

export const scrollBarStore = defineStore({
  id: 'scrollbar',
  state: (): { bars: TabBar[] } => {
    return {
      bars: [{
        path: '/dashboard',
        name: 'dashboard',
        title: 'Dashboard',
        affix: true
      }]
    }
  },
  getters: {
    getBars(): TabBar[] {
      return this.bars
    }
  },
  actions: {
    addBar(bar: TabBar) {
      if (this.bars.some(item => item.path === bar.path)) return
      this.bars.push(bar)
    },
    removeBar(name: string) {
      for (let i = 0; i < this.bars.length; i++) {
        if (this.bars[i].name === name) {
          this.bars.splice(i, 1)
          break
        }
      }
    },
    resetBar() {
      this.bars = [{
        path: '/dashboard',
        name: 'dashboard',
        title: 'Dashboard',
        affix: true
      }]
    }

  }
})