<template>
  <div class="image-box">
    <div class="image-box__image">

      <g-image src="~/img/keyboard.jpeg" />
    </div>
    <div class="image-box__overlay"></div>
  </div>
  
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .image-box {
    /* background-image: linear-gradient(rgba(216, 21, 21, 0.5), rgba(0,0,0,0.5));
     */
     /* background: red;
    z-index: 1; */
    position: relative;
  } 

  .image {
    z-index: -1;
  }

  .image-box__background,
.image-box__overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.image-box__background {
  background:  center center no-repeat;
  background-size: cover;

  z-index: 1
}


.image-box__overlay {
  background: rgba(0, 0, 0, 0.5);

  z-index: 2;
}

</style>
