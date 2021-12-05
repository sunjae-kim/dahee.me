<script lang="ts">
  import Nose from './nose.svelte';
  import Arm from './arm.svelte';
  import Button from './button.svelte';
</script>

<div class="container">
  <div class="head">
    <Nose left={'14px'} top={'10px'} />
    <div class="eyes left" />
    <div class="eyes right" />

    <div class="touch left" />
    <div class="touch right" />
  </div>
  <div class="body">
    <Arm left={'-15px'} top={'10px'} deg={'40deg'} z={0} />
    <Arm left={'30px'} top={'10px'} deg={'130deg'} z={-1} />

    <Button left={'31px'} top={'13px'} />
    <Button left={'32px'} top={'23px'} />
    <Button left={'32px'} top={'33px'} />
  </div>
</div>

<style>
  .container {
    position: relative;
    position: fixed;
    bottom: 70px;
    right: calc(30vw + 225px);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .head,
  .body {
    position: absolute;
    background-color: snow;
    border-radius: 50%;
  }

  .body {
    width: 50px;
    height: 50px;
    box-shadow: 0 10px 10px #cecece33;
  }

  .head {
    z-index: 1;
    width: 35px;
    height: 35px;
    bottom: 20px;
    left: -15px;
    box-shadow: 0 10px 10px #cecece33;
    overflow: hidden;
  }

  .eyes {
    position: absolute;
    height: 3px;
    width: 3px;
    background-color: #222;
    border-radius: 50%;
  }

  .eyes.left {
    left: 12px;
    top: 12px;
  }

  .eyes.right {
    left: 25px;
    top: 9px;
  }

  .touch {
    position: absolute;
    background-color: #fbe4e0bb;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #fbe4e0;
  }

  .touch.left {
    top: 20px;
    left: 10px;
  }

  .touch.right {
    z-index: -1;
    top: 14px;
    left: 29px;
  }
</style>
