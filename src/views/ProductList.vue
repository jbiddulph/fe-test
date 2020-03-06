<template>
  <div class="product-list">
    <label for="selector">
      Filter:
      <select v-model="select" id="selector">
        <option value="all" selected>All</option>
        <option value="purchased">Purchased</option>
        <option value="unpurchased">unpurchased</option>
        <option value="oneTimePurchases">One time purchases</option>
        <option value="subscriptions">Subscriptions</option>
      </select>
    </label>
    <h1>SELECTED FILTER: {{ selectedFilter }}</h1>
    <!-- <Product></Product> -->

    <div class="product" v-for="(product, idx) in products" :key="idx">
      <div class="top"></div>
      <div class="product-info">
        <!-- <div v-if="product.image" class="img"><img src="{{product.image}}" alt="" align="right"></div> -->
        <p class="title">{{ product ? product.title : "" }}</p>
        <p class="price">{{ product ? product.price : "" }}</p>
        <p class="description">{{ product ? product.description : "" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const productItems = require("@/assets/products.json");

export default {
  name: "ProductList",
  computed: {
    products() {
      if (this.selectedFilter == "all") {
        let products = [...new Array(productItems.length)];
        for (let i = 0; i < productItems.length; i++) {
          products.forEach((product, idx) => {
            if (idx == i) {
              products.push(productItems[idx]);
            }
          });
        }
        return products;
      }
      return "Product";
    }
  },
  data() {
    return {
      select: "all",
      selectedFilter: "all"
    };
  },
  watch: {
    select: function(newVal) {
      this.selectedFilter = newVal;
    }
  }
};
</script>
<style lang="scss">
.product-list {
  max-width: 1600px;
}
.product {
  width: 320px;
  height: 220px;
  margin: 10px;
  background-color: #d0e0e1;
  display: inline-block;
  border: 1px solid #999999;
  .top {
    height: 132px;
    display: flex;
  }
  .product-info {
    background-color: #4a4d4d;
    padding: 2% 5%;
    text-align: left;
    color: #ffffff;
    padding: 10px;
    p {
      margin-top: 0px;
      margin-bottom: 2px;
    }
    .title {
      font-weight: bold;
    }
    .price {
      font-weight: bold;
    }
    .description {
      font-weight: normal;
      font-size: 0.8rem;
    }
  }
}
</style>
