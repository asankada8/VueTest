<template>
  <div class="web-container">
    <div class="web-illustrator-container">

      <div class="web-det-title">
        <h1>Web & Mobile</h1>
      </div>

      <div class="illustrator-container">
        <img alt="" class="img-size" src="../assets/mobile illustrator.png" />
      </div>

      <div class="web-det-info">
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div>
          <button class="button">Case Studies</button><button class="button product-btn">Products</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "",
  props: {
    msg: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.web-illustrator-container {

}

.img-size {
  width: 100%;
}

.web-det-title {
  width: 50%;
  margin-top: 163px;

}

.web-det-info {
  width: 42%;
}

.illustrator-container {
  width: 50%;
  float: right;
  margin-top: -102px;
}

.button {
  background-color: white; 
  color: #f44336; 
  border: 2px solid #f44336;
  width: 100px;
  padding: 5px;
}

.product-btn {
  margin-left: 20px;
}

@media screen and (max-width: 480px) {

  .web-illustrator-container {
    
  }
  .web-det-title {
    margin-left: -206px;
    width: 278%;
    margin-top: 211px;
  }
  .illustrator-container {
    width: 379%;
    float: unset;
    margin-top: 12px;
    margin-left: -242px;
  }

  .web-det-info {
    width: 320%;
    position: relative;
    left: -227px;
  }

  .para {
    text-align: center;
  }

  .button {
    width: 100%;
    margin-top: 10px;
  }

  .product-btn {
    margin-left: 0;
  }
}

@media screen and (max-width: 830px) {
  .button {
    width: 100%;
    margin-top: 10px;
  }

  .product-btn {
    margin-left: 0;
  }
}
</style>
