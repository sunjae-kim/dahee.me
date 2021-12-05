<div class="gift" />
<div class="ribbon" />
<div class="gift2" />
<div class="ribbon2" />
<div class="gift3" />
<div class="ribbon3" />

<style>
  .gift {
    position: absolute;
    width: 60px;
    height: 50px;
    background-color: #ffc857;
    top: 130px;
    left: 30px;
    box-shadow: inset -8px 0 0 rgba(0, 0, 0, 0.07);
  }

  .gift:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 15px;
    background-color: #ffc857;
    left: -5px;
    box-shadow: inset -8px -4px 0 rgba(0, 0, 0, 0.07);
  }

  .gift:after {
    content: '';
    background-color: #db3a34;
    width: 10px;
    height: 50px;
    position: absolute;
    left: 25px;
  }

  .ribbon {
    position: absolute;
    width: 20px;
    height: 10px;
    border: 3px solid #db3a34;
    border-radius: 50%;
    transform: skew(15deg, 15deg);
    top: 116px;
    left: 35px;
  }

  .ribbon:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 10px;
    border: 3px solid #db3a34;
    border-radius: 50%;
    transform: skew(-15deg, -20deg);
    left: 22px;
    top: -8px;
  }

  .gift2 {
    position: absolute;
    width: 50px;
    height: 40px;
    background-color: #08bdbd;
    top: 140px;
    left: -65px;
    box-shadow: inset -8px 0 0 rgba(0, 0, 0, 0.07);
  }

  .gift2:before {
    content: '';
    position: absolute;
    width: 60px;
    height: 15px;
    background-color: #08bdbd;
    left: -5px;
    box-shadow: inset -8px -4px 0 rgba(0, 0, 0, 0.07);
  }

  .gift2:after {
    content: '';
    background-color: #abff4f;
    width: 10px;
    height: 40px;
    position: absolute;
    left: 15px;
  }

  .gift3 {
    position: absolute;
    width: 40px;
    height: 30px;
    background-color: #7678ed;
    top: 150px;
    left: -85px;
    box-shadow: inset -8px 0 0 rgba(0, 0, 0, 0.07);
  }

  .gift3:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 10px;
    background-color: #7678ed;
    left: -5px;
    box-shadow: inset -8px -4px 0 rgba(0, 0, 0, 0.07);
  }

  .gift3:after {
    content: '';
    background-color: #f7b801;
    width: 7px;
    height: 30px;
    position: absolute;
    left: 15px;
  }

  .ribbon2 {
    position: absolute;
    width: 15px;
    height: 7px;
    border: 3px solid #abff4f;
    border-radius: 50%;
    transform: skew(15deg, 15deg);
    top: 129px;
    left: -65px;
  }

  .ribbon2:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 7px;
    border: 3px solid #abff4f;
    border-radius: 50%;
    transform: skew(-15deg, -20deg);
    left: 15px;
    top: -8px;
  }

  .ribbon3 {
    position: absolute;
    width: 12px;
    height: 5px;
    border: 3px solid #f7b801;
    border-radius: 50%;
    transform: skew(15deg, 15deg);
    top: 142px;
    left: -85px;
  }

  .ribbon3:before {
    content: '';
    position: absolute;
    width: 12px;
    height: 5px;
    border: 3px solid #f7b801;
    border-radius: 50%;
    transform: skew(-15deg, -20deg);
    left: 15px;
    top: -8px;
  }
</style>
