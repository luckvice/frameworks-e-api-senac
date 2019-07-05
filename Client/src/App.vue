<template>
    <div id="app">
        <Navbar/>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
  import Navbar from '@/components/ui/Navbar'

  export default {
    name: 'App',

    components: {
      Navbar,
    },

  }
</script>

<style scoped>
/* Gambi Fix*/
nav{
    background-color:black;
}
    .fade-enter-active, .fade-leave-active {
        transition: all .2s ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>
