//variables for the timer
let time;
let pulse = 1333;
let offbeat = 2;
let beat = 4;
let measure = 4;
//chord sounds
  let Abmajor;
  let Dbmajor;
  let Ebmajor; 
  let Bbminor;  
//bass sounds
  let bassAb;
  let bassDb;
//melody sounds
  let me1;
  let me2;
//alto
  let alto1;
  let alto2;
//visual
  let h = 160;
  let s = 70;
  let b = 50;

function preload () {
  //chords
   Abmajor = loadSound ('CAb.mp3');
   Abmajor2 = loadSound('CAb2.mp3');
   Abmajor3 = loadSound('CAb3.mp3')
   Dbmajor = loadSound ('DAb.mp3');
   Ebmajor = loadSound ('EBb.mp3');
   Bbminor = loadSound ('DBb.mp3');
  //lower sounds
   bassAb = loadSound ('bassAb.mp3');
   bassDb = loadSound ('bassDb.mp3');
  //melodic
   me1 = loadSound ('melodyDAC.mp3');
   me2 = loadSound ('melodyFDA.mp3');
  //alto
   alto1 = loadSound ('altoDb.mp3');
   alto2 = loadSound ('altoF.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  time = millis();
}

function draw() {
  //reference https://editor.p5js.org/Antman/sketches/B1A7hDKTX
  //https://editor.p5js.org/xinxin/sketches/7NIDFVVw
  
  let chords = [1, 2, 3, 4];
  let bass = [1,2];
  let altos = [1,2];
  let passtime = millis() - time;
  let playchord = random(chords);
  let playbass = random(bass);
  let playalto = random(altos);
  let coinflip = [0,1];

  
  if (passtime > pulse) {
   //the beat and measure will increase every 90bpm which is about every 1.5 seconds.
    time = millis();
    beat++;
    measure = measure + 0.5;
  }


  //after every 4 beats, a chord will play
  if (beat === 4) {
    switch (playchord) {
      case 1:
    Abmajor.play();
    break;
     case 2:
    Dbmajor.play();
    break;
     case 3:
    Ebmajor.play();
    break;
     case 4:
    Bbminor.play();
    break;
    }
     console.log('beat');


        
    beat = 0;
    
  }
  //after every 8 beats, the bass alto and melodic tracks will play
  if (measure === 4) {
    switch (playbass){
      case 1:
    bassAb.play();
    me1.play();
    break;
      case 2:
    bassDb.play();
    me2.play();
    break;
    }
    switch (playalto){
      case 1:
    alto1.play();
    break;
      case 2:
    alto2.play();
    break;
    }
      measure = 0;
      console.log('measure');
      }
  //visuals
  colorMode(HSB)
  background(h,s,b);
    h = h + 0.1;
  if (h === 360) {
    h = 0;
  }
    
}