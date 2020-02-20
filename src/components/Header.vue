<template>
  <div class="logo-container">
    <img alt="Vue logo" class="logo-size" src="../assets/arimac logo.png" />
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
.logo-size {
	width: 100px;
}

.logo-container {
	margin-left: 30px;
}

@media screen and (max-width: 480px) {
    .logo-size {
		width: 200px;
	}

	.logo-container {
		margin-left: 46px;
	}
 }
</style>