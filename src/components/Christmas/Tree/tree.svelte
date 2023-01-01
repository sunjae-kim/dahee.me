<div class="tree">
  <div class="chain" />
  <div class="chain2" />
  <div class="tree-after" />
</div>

<style>
  .tree {
    position: relative;
    background-color: #685044;
    width: 30px;
    height: 80px;
    top: 100px;
    transform-style: preserve-3d;
  }

  .tree:before {
    content: '';
    position: relative;
    width: 0;
    height: 0;
    border-left: 90px solid transparent;
    border-right: 90px solid transparent;
    border-bottom: 270px solid #127475;
    border-radius: 30px;
    top: -250px;
    left: -75px;
  }

  .tree-after {
    position: relative;
    width: 0;
    height: 0;
    border-right: 90px solid transparent;
    border-bottom: 270px solid #0e9594;
    border-bottom-right-radius: 30px;
    top: -252px;
    left: 15px;
  }

  .chain {
    width: 85px;
    height: 85px;
    border: solid 3px #333;
    border-radius: 50%;
    top: -185px;
    left: -35px;
    position: absolute;
    transform: rotate3d(8, 0.1, -5, 75deg);
    box-sizing: border-box;
    backface-visibility: visible !important;
    z-index: 5;
  }

  .chain2 {
    width: 145px;
    height: 135px;
    border: solid 3px #333;
    border-radius: 50%;
    top: -115px;
    left: -65px;
    position: absolute;
    transform: rotate3d(8, 0.1, -5, 75deg);
    box-sizing: border-box;
    backface-visibility: visible !important;
    z-index: 5;
  }
</style>
