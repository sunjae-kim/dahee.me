<div class="lights">
  <div class="light1" />
  <div class="light2" />
  <div class="light3" />
  <div class="light4" />
  <div class="light5" />
  <div class="light6" />
  <div class="light7" />
  <div class="light8" />
  <div class="light9" />
  <div class="light10" />
</div>

<style>
  .lights {
    position: absolute;
  }

  .light1 {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
  }

  .light1 {
    background-color: #ff595e;
    top: -100px;
    left: -35px;
    transform: rotate(40deg);
    box-shadow: 1px 1px 15px #faf3dd;
  }

  .light2 {
    position: absolute;
    background-color: #ffca3a;
    top: -95px;
    left: -10px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light3 {
    position: absolute;
    background-color: #6a4c93;
    top: -105px;
    left: 15px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light4 {
    position: absolute;
    background-color: #1982c4;
    top: -118px;
    left: 35px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light5 {
    position: absolute;
    background-color: #1982c4;
    top: 12px;
    left: -55px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light6 {
    position: absolute;
    background-color: #8ac926;
    top: 15px;
    left: -25px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light7 {
    position: absolute;
    background-color: #ff595e;
    top: 10px;
    left: 2px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light8 {
    position: absolute;
    background-color: #ffca3a;
    top: -2px;
    left: 27px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light9 {
    position: absolute;
    background-color: #9e0059;
    top: -17px;
    left: 50px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light10 {
    position: absolute;
    background-color: #4361ee;
    top: -40px;
    left: 68px;
    box-shadow: 1px 1px 15px #faf3dd;
    width: 15px;
    height: 15px;
    border-radius: 10px 150px 30px 150px;
    transform: rotate(40deg);
  }

  .light1,
  .light2,
  .light3,
  .light4,
  .light5,
  .light6,
  .light7,
  .light8,
  .light9,
  .light10 {
    -webkit-animation: flash 6s infinite;
  }

  @-webkit-keyframes flash {
    20%,
    24%,
    55% {
      box-shadow: none;
    }
    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      box-shadow: 0 0 5px #f5de93, 0 0 15px #f5de93, 0 0 20px #f5de93, 0 0 40px #f5de93,
        0 0 60px #decea4, 0 0 10px #d6c0a5, 0 0 98px #ff0000;
    }
  }
</style>
