<template>
  <router-view />
</template>

<style>
body {
  margin: 0;
}
@font-face {
  font-family: "ObjectSans";
  font-display: swap;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  src: url("~@/assets/fonts/ObjectSans-Regular-400.otf") format("opentype");
}
#app {
  font-family: "ObjectSans";
  font-size: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d7d7;
  color: #010d00;
}
</style>
