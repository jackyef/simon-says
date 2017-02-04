var strict = false;
var buttonEnabled = false;
var currentSequence = [];
var currentDelay = 500;
var counter = 0;
var gameStarted = false;
var step = 0;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset(){
  buttonEnabled = false;
  currentSequence = [];
  currentDelay = 500;
  counter = 0;
  gameStarted = false;
  step = 0;
  $('#counter').html(counter);
  $('#btn1').removeClass('pressed');
  $('#btn2').removeClass('pressed');
  $('#btn3').removeClass('pressed');
  $('#btn4').removeClass('pressed');
  if(strict)
    $('#btn-strict').html('STRICT MODE: ON');
  else
    $('#btn-strict').html('STRICT MODE: OFF');
}

function cpuSequence(){
  if(counter == 20){
    $('#counter').html(counter);
    gameWon();
    return;
  }
  $('#msg').html('Memorize the sequence...');
  counter++;
  $('#counter').html(counter);

  switch(counter){
    //faster gameplay on some point
    case 5: currentDelay = 400; break;
    case 8: currentDelay = 300; break;
    case 12: currentDelay = 200; break;
    case 15: currentDelay = 150; break;
    default: break;
  }

  var randomInt = getRandomIntInclusive(1, 4);
  //add randomInt to the sequence
  currentSequence.push(randomInt);
  buttonEnabled = false;
  playSequence(0);
}


function replaySequence(){
  $('#msg').html('Try memorizing it this time...');
  buttonEnabled = false;
  setTimeout(function(){
    playSequence(0);
  }, 2000);
}

function playSequence(index){
  var i = index;

  //highlight the random button
  $('#btn'+currentSequence[i]).addClass('pressed');
  //after some delay, remove the highlight
  setTimeout(function(){
    $('#btn'+currentSequence[i]).removeClass('pressed');
  }, currentDelay);
  //play the audio for the button
  $('#audio'+currentSequence[i])[0].pause();
  $('#audio'+currentSequence[i])[0].currentTime = 0;
  $('#audio'+currentSequence[i])[0].play();

  if((i+1) < currentSequence.length){
    //if there's a next button in the sequence
    //after some delay, play the next sequence
    setTimeout(function(){
      playSequence(i+1);
    }, 7.5*currentDelay/3);
  } else {
    //it was the last button! now we let the player re-iterate the sequence
    $('#msg').html('Now you try it!');
    buttonEnabled = true;
  }
}


function btn1Click(){
  //highlight the clicked button
  $('#btn'+1).addClass('pressed');
  // buttonEnabled = false;
  //after some delay, remove the highlight
  setTimeout(function(){
    buttonEnabled = true;
    $('#btn'+1).removeClass('pressed');
  }, currentDelay);
  //play the audio for the button
  $('#audio'+1)[0].pause();
  $('#audio'+1)[0].currentTime = 0;
  $('#audio'+1)[0].play();

  if(currentSequence[step] == 1){
    //nothing wrong
    $('#msg').html('Good...');
    if(step == currentSequence.length-1){
      //if it's the last step in the sequence
      //then the user got it all correct! Good job
      //time for the CPU to add another step to the sequence
      if(counter != 20){
        $('#msg').html('You made it! Let\'s add another one!');
      }
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      setTimeout(function(){
        cpuSequence();
      }, 2000);
      step = 0; //reset step to 0 for the next iteration
      return;
    }
    step++;
  } else {
    //wrong step!
    if(strict) {
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      gameLost();
    } else {
      //if not strict mode, just play the sequence again without adding step
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);

      replaySequence();
      step = 0;
      //put a message to let the player know that s/he's wrong
      $('#msg').html('Oops! Wrong one! Since we\'re not strict, go ahead, try again!');
      $('#msg').effect('shake');
    }
  }
}
function btn2Click(){
  //highlight the clicked button
  $('#btn'+2).addClass('pressed');
  // buttonEnabled = false;
  //after some delay, remove the highlight
  setTimeout(function(){
    buttonEnabled = true;
    $('#btn'+2).removeClass('pressed');
  }, currentDelay);
  //play the audio for the button
  $('#audio'+2)[0].pause();
  $('#audio'+2)[0].currentTime = 0;
  $('#audio'+2)[0].play();

  if(currentSequence[step] == 2){
    //nothing wrong
    $('#msg').html('Good...');
    if(step == currentSequence.length-1){
      //if it's the last step in the sequence
      //then the user got it all correct! Good job
      //time for the CPU to add another step to the sequence
      if(counter != 20){
        $('#msg').html('You made it! Let\'s add another one!');
      }
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      setTimeout(function(){
        cpuSequence();
      }, 2000);
      step = 0; //reset step to 0 for the next iteration
      return;
    }
    step++;
  } else {
    //wrong step!
    if(strict) {
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      gameLost();
    } else {
      //if not strict mode, just play the sequence again without adding step
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      replaySequence();
      step = 0;
      //put a message to let the player know that s/he's wrong
      $('#msg').html('Oops! Wrong one! Since we\'re not strict, go ahead, try again!');
      $('#msg').effect('shake');
    }
  }
}
function btn3Click(){
  //highlight the clicked button
  $('#btn'+3).addClass('pressed');
  // buttonEnabled = false;
  //after some delay, remove the highlight
  setTimeout(function(){
    buttonEnabled = true;
    $('#btn'+3).removeClass('pressed');
  }, currentDelay);
  //play the audio for the button
  $('#audio'+3)[0].pause();
  $('#audio'+3)[0].currentTime = 0;
  $('#audio'+3)[0].play();

  if(currentSequence[step] == 3){
    //nothing wrong
    $('#msg').html('Good...');
    if(step == currentSequence.length-1){
      //if it's the last step in the sequence
      //then the user got it all correct! Good job
      //time for the CPU to add another step to the sequence
      if(counter != 20){
        $('#msg').html('You made it! Let\'s add another one!');
      }
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      setTimeout(function(){
        cpuSequence();
      }, 2000);
      step = 0; //reset step to 0 for the next iteration
      return;
    }
    step++;
  } else {
    //wrong step!
    if(strict) {
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      gameLost();
    } else {
      //if not strict mode, just play the sequence again without adding step
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      replaySequence();
      step = 0;
      //put a message to let the player know that s/he's wrong
      $('#msg').html('Oops! Wrong one! Since we\'re not strict, go ahead, try again!');
      $('#msg').effect('shake');
    }
  }
}
function btn4Click(){
  //highlight the clicked button
  $('#btn'+4).addClass('pressed');
  // buttonEnabled = false;
  //after some delay, remove the highlight
  setTimeout(function(){
    buttonEnabled = true;
    $('#btn'+4).removeClass('pressed');
  }, currentDelay);
  //play the audio for the button
  $('#audio'+4)[0].pause();
  $('#audio'+4)[0].currentTime = 0;
  $('#audio'+4)[0].play();

  if(currentSequence[step] == 4){
    //nothing wrong
    $('#msg').html('Good...');
    if(step == currentSequence.length-1){
      //if it's the last step in the sequence
      //then the user got it all correct! Good job
      //time for the CPU to add another step to the sequence
      if(counter != 20){
        $('#msg').html('You made it! Let\'s add another one!');
      }
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      setTimeout(function(){
        cpuSequence();
      }, 2000);
      step = 0; //reset step to 0 for the next iteration
      return;
    }
    step++;
  } else {
    //wrong step!
    if(strict) {
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      gameLost();
    } else {
      //if not strict mode, just play the sequence again without adding step
      buttonEnabled = false;
      setTimeout(function(){
        buttonEnabled = false;
      }, currentDelay+1);
      replaySequence();
      step = 0;
      //put a message to let the player know that s/he's wrong
      $('#msg').html('Oops! Wrong one! Since we\'re not strict, go ahead, try again!');
      $('#msg').effect('shake');
    }
  }
}

function gameWon(){
  buttonEnabled = false;
  $('#msg').html('Wow! 20 times! I guess you won the game, then. Why not start over to prove that it wasn\'t just luck? ;)');
  $('#msg').effect('shake');
}

function gameLost(){
  buttonEnabled = false;
  $('#msg').html('Oops! Wrong one! You lost! End your game and try starting over!');
  $('#msg').effect('shake');
}

$(document).ready(function() {
  $('#btn-strict').on('click tap', function () {
    if(gameStarted) {
      return;
    }
    strict = !strict;
    if(strict){
      $(this).html("STRICT MODE: ON");
      $(this).removeClass('btn-success');
      $(this).addClass('btn-danger');
    } else {
      $(this).html("STRICT MODE: OFF");
      $(this).addClass('btn-success');
      $(this).removeClass('btn-danger');
    }
  });

  $('#btn-start').on('click tap', function () {
    if(!gameStarted){
      gameStarted = true;
      $(this).removeClass('btn-info');
      $(this).addClass('btn-warning');
      $(this).html('END GAME');
      $('#msg').html('Memorize the sequence!');
      $('#btn-strict').append(' <span class="fa fa-lock" style="color: #eee"></span>')
      setTimeout(cpuSequence, 500);
    } else {
      reset();
      $(this).addClass('btn-info');
      $(this).removeClass('btn-warning');
      $('#msg').html('Let\'s start another game!');
      $(this).html('START GAME');
      // setTimeout(cpuSequence, 500);
    }
  });

  $('#btn1').on('click tap', function () {
    if(buttonEnabled)
    btn1Click();
  });
  $('#btn2').on('click tap', function () {
    if(buttonEnabled)
    btn2Click();
  });
  $('#btn3').on('click tap', function () {
    if(buttonEnabled)
    btn3Click();
  });
  $('#btn4').on('click tap', function () {
    if(buttonEnabled)
    btn4Click();
  });
});