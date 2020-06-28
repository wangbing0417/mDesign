<template>
  <div
    class="wrapper"
    :class="{ error }"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  >
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" />
    <template v-if="error">
      <m-icon name="error" class="icon-error"></m-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'm-input',
  components: {
    'm-icon': Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;

.wrapper {
  font-size: $font-size;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 0.5em;

    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: 0;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &:disabled,
    &:read-only {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $red;
      &:focus {
        box-shadow: none;
      }
    }
    .icon-error {
      fill: $red;
    }
    .error-message {
      color: $red;
    }
  }
}
</style>
