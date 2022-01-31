<template>
  <section class="footer">
    <div class="columns">
      <div class="column is-4-desktop is-5-tablet is-12-mobile">
        <div class="buttons app-bars">
          <a class="button">
            <Chrome />
          </a>
          <a class="button">
            <Gmail />
          </a>
          <a class="button">
            <Search />
          </a>
          <a class="button">
            <Drive />
          </a>
          <a class="button">
            <Youtube />
          </a>
          <a class="button">
            <Apps />
          </a>
        </div>
      </div>
      <div class="column"></div>
      <div class="column is-3-desktop is-4-tablet is-12-mobile">
        <div class="buttons status-bars">
          <a class="button">
            <span class="clock">{{ currentTime }}</span>
          </a>
          <a class="button">
            <Wifi />
          </a>
          <a class="button">
            <Battery />
          </a>
          <a class="button">
            <Avatar />
          </a>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Chrome from '@/assets/chrome.svg'
import Gmail from '@/assets/gmail.svg'
import Search from '@/assets/search.svg'
import Drive from '@/assets/drive.svg'
import Youtube from '@/assets/youtube.svg'
import Apps from '@/assets/apps.svg'
import Wifi from '@/assets/wifi.svg'
import Battery from '@/assets/battery.svg'
import Avatar from '@/assets/avatar.svg'

export default {
  name: 'IndexPage',
  components: {
    Chrome,
    Gmail,
    Search,
    Drive,
    Youtube,
    Apps,
    Wifi,
    Battery,
    Avatar
  },
  data () {
    return {
      currentTime: ''
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.$moment().format('h:mm A');
    }, 1000)
  }
}
</script>

<style lang="scss">
  .footer {
    background-color: #262626;
    height: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
    padding: 12px;

    .buttons{
      &.status-bars {
        justify-content: flex-end;
      }
    }

    .button {
      background-color: #262626;
      border: none;
      margin: 8px 19px;
      padding: 0;
    }

    .clock {
      font-size: 12px;
      font-weight: 700;
      color: #FFF;
    }

  }
</style>