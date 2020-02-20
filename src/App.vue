<template>
  <div id="app">
    <div id="nav">
      <div class="header-container">
        <app-header></app-header>
      </div>
      <div class="footer-container">
        <div class="app-footer-bottom">
          <app-footer-btm></app-footer-btm>
        </div>
      </div>
    </div>
    <div class="router-container"> 
      <transition name="router-animation">
          <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      'app-header': Header,
      'app-footer-btm': Footer,
    },
    data() {
      return {


      }
    }
  }

</script>

<style lang="scss">
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

  .router-animation-enter-active {
    animation: coming 1s;
    animation-delay: 1s;
    opacity: 0;
  }

  .router-animation-leave-active {
    animation: going 1s;
  }

  @keyframes going {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-50px);
        opacity: 0;
      }
  }

  @keyframes coming {
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
  }

  .app-footer-bottom {
    
  }

  .footer-container {
    margin-top: 520px;
    display: flex;
    justify-content: center;
  }

  .router-container {
    margin-left: 18%;
    margin-right: 18%;
    position: fixed;
    top: 15px;
  }

  .header-container {
    position: fixed;
    top: 35px;
  }

  @media screen and (max-width: 480px) {
    .router-container {
      margin-left: 0%;
      margin-right: 0%;
      position: unset;
      top: unset;
      width:0;
    }

    .header-container {
      position: unset ;
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }

    #app {
      display: flex;
      width: 100%;
    }

    .footer-container {
      width: 332px;
      overflow: scroll;
    }
  }

</style>
