<template>
  <nav
      class="navbar header has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button minimize-btn">
              <Minimize />
            </a>
            <a class="button">
              <Maximize />
            </a>
            <a class="button">
              <Close />
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import Minimize from '@/assets/minimize.svg'
import Maximize from '@/assets/maximize.svg'
import Close from '@/assets/close.svg'

export default {
  name: 'IndexPage',
  components: {
    Minimize,
    Maximize,
    Close
  }
}
</script>

<style lang="scss">
.navbar {
  background-color: #757575;
  height: 32px;

  .navbar-item {
    padding-right: 0;
  }

  .button {
    background-color: #757575;
    border: none;
    padding-left: 0;
    padding-right: 19px;
    margin-right: 0;

    &.minimize-btn {
      padding-top: 15px;
    }
  }
}

</style>