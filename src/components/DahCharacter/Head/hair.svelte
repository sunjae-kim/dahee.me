<script lang="ts">
  import HairLine from './hairline.svelte';
</script>

<div class="hair" />
<HairLine left={'12px'} width={'12px'} />
<HairLine left={'17px'} width={'13px'} />
<HairLine left={'21px'} width={'16px'} />
<HairLine left={'27px'} width={'15px'} />
<div class="hair-side" />
<div class="hair-side2" />

<style>
  .hair {
    z-index: 3;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 33px;
    background-color: #222;
    border-bottom: 0;
  }

  .hair-side {
    z-index: 3;
    position: absolute;
    top: 27px;
    left: -1px;
    width: 10px;
    height: 20px;
    background-color: #222;
    border-bottom: 0;
    transform: rotate(30deg);
  }
  .hair-side2 {
    z-index: 3;
    position: absolute;
    top: 27px;
    right: -1px;
    width: 10px;
    height: 20px;
    background-color: #222;
    border-bottom: 0;
    transform: rotate(-30deg);
  }
</style>
