<script lang="ts">
  import Nose from './nose.svelte';
  import Arm from './arm.svelte';
  import Button from './button.svelte';
  import Cheek from './cheek.svelte';
</script>

<div class="container">
  <div class="head">
    <Nose left={'14px'} top={'10px'} />

    <Button left={'12px'} top={'12px'} />
    <Button left={'25px'} top={'9px'} />

    <Cheek left={'10px'} top={'20px'} />
    <Cheek left={'29px'} top={'14px'} z={-1} />
  </div>

  <div class="body">
    <Arm left={'-15px'} top={'10px'} deg={'40deg'} />
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
</style>
