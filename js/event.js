function makeRed() {
    document.body.style.backgroundColor = "red";
  }
  const makeBlueButton = document.getElementById('make-blue');
  makeBlueButton.onclick = makeBlue ;

  function makeBlue(){
    document.body.style.backgroundColor = 'blue';
  }

  const purpleButton = document.getElementById('make-purple');
  purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple' ;
  }
  
  const pinkButton = document.getElementById('make-pink');
  pinkButton.addEventListener('click', makePink);

  function makePink(){
    document.body.style.backgroundColor = 'Pink'
  }
  

  const greenButton = document.getElementById('make-green');
  greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
  })
// this format will be used mantimes
  const goldenRodButton = document.getElementById('make-goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
  })