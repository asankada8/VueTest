<template>
  <div class="tabs">
  	<div class="page-link">
    <router-link class="link" to="/">Web And Mobile</router-link>
  	</div>
  	<div class="page-link">
    <router-link class="link" to="/itechnologies">Immersive Technologies</router-link>
  	</div>
  	<div class="page-link">
    <router-link class="link" to="/robotics">Robotics</router-link>
  	</div>
  	<div class="page-link">
    <router-link class="link" to="/ai">Artificial Interligence</router-link>
  	</div>
  	<div class="page-link">
    <router-link class="link" to="/gaming">Gaming</router-link>
  	</div>
  	<div class="page-link">
    <router-link class="link" to="/studio">Creative Studio</router-link>
  	</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabs {
	margin: 10px;
	display: flex;
}
.page-link {
	margin: 2%;
}

.link:hover {
  color: red;
  text-decoration: underline ;
  margin-bottom: 12px;
}

.link {
	text-decoration: none;
    color: unset;
    font-weight: bold;
}

@media screen and (max-width: 480px) {
  .tabs {
    margin-left: 72px;
  }
}
</style>