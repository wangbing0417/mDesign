<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-row',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: `${-this.gutter / 2}px`,
        marginRight: `${-this.gutter / 2}px`
      }
    },
    rowClass() {
      let { align } = this
      return [align && `align-${align}`]
    }
  },
  mounted() {
    // 遍历 row 中的 col，将 gutter 传递给 col
    this.$children.map(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &.align-center {
    justify-content: center;
  }
}
</style>
