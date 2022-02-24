<div class="balls">
  <div class="ball1" />
  <div class="ball2">
    <a class="instagram" href="https://www.instagram.com/b2byby/" target="_blank"><i class="fab fa-instagram" /></a>
  </div>
  <i class="fas fa-candy-cane" />
</div>

<style>
  .balls {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #db3a34;
    top: 15px;
    left: -15px;
  }

  .fa-candy-cane {
    position: absolute;
    color: #ffc857;
    top: 40px;
    left: -15px;
    transform: rotate(90deg);
  }

  .balls:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #e1e2b1;
    top: 20px;
    left: 45px;
  }

  .ball1 {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fae588;
    top: -90px;
    left: 20px;
  }

  .ball2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #c73e3e;
    top: 77px;
    left: 67px;
  }

  .instagram {
    transform: rotate(-30deg);
    margin-bottom: 2px;
    margin-right: 1px;
  }

  .fa-instagram {
    color: rgb(231, 168, 168);
    font-size: 14px;
    vertical-align: middle;
  }
</style>
