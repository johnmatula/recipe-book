<template>
  <button @click="emitTimerEvent">
    <slot>{{ this.displayTimeRange }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    duration: {
      required: true
    },
    parsed: {
      default: false
    }
  },
  computed: {
    momentComponents() {
      return this.duration.replace(/{{/,"").replace(/}}/,"").trim().split(" ")
    },
    timeUnit() {
      return this.momentComponents[1]
    },
    timeRange() {
      var range = this.momentComponents[0].split("-")

      if(range.length === 1) {
        return [range[0], range[0]]
      } else {
        return [range[0], range[1]]
      }
    },
    displayTimeRange() {
      if(this.timeRange[0] === this.timeRange[1]) {
        return `${this.timeRange[0]} ${this.timeUnit}`
      } else {
        return `${this.timeRange[0]} to ${this.timeRange[1]} ${this.timeUnit}`
      }
    }
  },
  methods: {
    emitTimerEvent() {
      alert(this.timeRange)
    }
  },
  name: 'TimerButton'
}
</script>
