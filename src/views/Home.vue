<template>
  <div class="home">
  	<div>
    	<WebAndMobile msg=""/>
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import WebAndMobile from "@/components/WebAndMobile.vue";

export default {
  name: "Home",
  components: {
    WebAndMobile
  }
};
</script>

<style type="text/css">
.home {
	display: flex;
	justify-content: center;
}
</style>
