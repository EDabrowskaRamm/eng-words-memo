<template lang="html">
  <div class="progressbar">
    <button class="btn btn-primary" @click="addPoint">add 1</button>
    <button class="btn btn-primary" @click="removePoint">remove 1</button>
    
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false">
      <div style="height: 20px; background-color: lightgreen" :style="{width: point + '%'}"
            class="progress-bar progress-bar-striped"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pbarWidth: 100,
      qCount: 20,
      point: 0
    }
  },
  methods: {
    beforeEnter (el) {
      console.log('beforeEnter')
      this.elementWidth = 0
      el.style.width = this.elementWidth + 'px'
    },
    enter (el, done) {
      console.log('enter')
      el.style.width += this.count
      // let round = 1
      // const interval = setInterval(() => {
      //   el.style.width = (this.elementWidth + round * 10) + 'px'
      //   round++
      //   if (round > 20) {
      //     clearInterval(interval)
      //     done()
      //   }
      // }, 20)
    },
    afterEnter (el) {
      console.log('afterEnter')
    },
    enterCancelled (el) {
      console.log('enterCancelled')
    },
    beforeLeave (el) {
      console.log('beforeLeave')
      this.elementWidth = 300
      el.style.width = this.elementWidth + 'px'
    },
    leave (el, done) {
      console.log('leave')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterLeave (el) {
      console.log('afterLeave')
    },
    leaveCancelled (el) {
      console.log('leaveCancelled')
    },
    addPoint () {
      this.point += this.pbarWidth / this.qCount
    },
    removePoint (index) {
      this.point -= this.pbarWidth / this.qCount
    }
  }
}
</script>

<style lang="scss">
  div.progressbar {
    border: 1px solid black;
    width: 100%;
  }

</style>
