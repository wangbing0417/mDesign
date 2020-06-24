<template>
  <button class="m-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <m-icon class="icon" v-if="icon && !loading" :name="icon"></m-icon>
    <m-icon class="loading icon" v-if="loading" name="loading"></m-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'm-button',
  props: {
    // icon的类型
    icon: { type: String, default: '' },
    // icon loading
    loading: { type: Boolean, default: false },
    // 控制icon的左右位置
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.m-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }

    > .content {
      order: 1;
    }
  }

  .loading {
    animation: spin 1s linear infinite;
    // fill: red;
  }
}
</style>
