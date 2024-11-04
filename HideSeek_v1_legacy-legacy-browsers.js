/************************************* 
 * Hideseek_Children_New_Legacy Test *
 *************************************/


// store info about the experiment session:
let expName = 'HideSeek_children_new_legacy';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'study_id': '',
    'session_id': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.5843, 0.5843, 0.5843]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setEnvRoutineBegin());
flowScheduler.add(setEnvRoutineEachFrame());
flowScheduler.add(setEnvRoutineEnd());
flowScheduler.add(skipRoutineRoutineBegin());
flowScheduler.add(skipRoutineRoutineEachFrame());
flowScheduler.add(skipRoutineRoutineEnd());
const beforeExpLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(beforeExpLoopLoopBegin(beforeExpLoopLoopScheduler));
flowScheduler.add(beforeExpLoopLoopScheduler);
flowScheduler.add(beforeExpLoopLoopEnd);
const experimentLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(experimentLoopBegin(experimentLoopScheduler));
flowScheduler.add(experimentLoopScheduler);
flowScheduler.add(experimentLoopEnd);
flowScheduler.add(earlyStopRoutineBegin());
flowScheduler.add(earlyStopRoutineEachFrame());
flowScheduler.add(earlyStopRoutineEnd());
const mini_instr2_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mini_instr2_trialsLoopBegin(mini_instr2_trialsLoopScheduler));
flowScheduler.add(mini_instr2_trialsLoopScheduler);
flowScheduler.add(mini_instr2_trialsLoopEnd);
flowScheduler.add(endExpRoutineBegin());
flowScheduler.add(endExpRoutineEachFrame());
flowScheduler.add(endExpRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/alien_stimuli/14.png', 'path': 'stimuli/alien_stimuli/14.png'},
    {'name': 'stimuli/instructions/Slide9.png', 'path': 'stimuli/instructions/Slide9.png'},
    {'name': 'stimuli/instructions/Slide21.png', 'path': 'stimuli/instructions/Slide21.png'},
    {'name': 'stimuli/alien_stimuli/41.png', 'path': 'stimuli/alien_stimuli/41.png'},
    {'name': 'stimuli/alien_stimuli/42.png', 'path': 'stimuli/alien_stimuli/42.png'},
    {'name': 'stimuli/instructions/earlystop_slide.png', 'path': 'stimuli/instructions/earlystop_slide.png'},
    {'name': 'stimuli/alien_stimuli/13.png', 'path': 'stimuli/alien_stimuli/13.png'},
    {'name': 'stimuli/alien_stimuli/26.png', 'path': 'stimuli/alien_stimuli/26.png'},
    {'name': 'stimuli/alien_stimuli/51.png', 'path': 'stimuli/alien_stimuli/51.png'},
    {'name': 'stimuli/alien_stimuli/12.png', 'path': 'stimuli/alien_stimuli/12.png'},
    {'name': 'stimuli/alien_stimuli/24.png', 'path': 'stimuli/alien_stimuli/24.png'},
    {'name': 'stimuli/alien_stimuli/45.png', 'path': 'stimuli/alien_stimuli/45.png'},
    {'name': 'stimuli/alien_stimuli/64.png', 'path': 'stimuli/alien_stimuli/64.png'},
    {'name': 'stimuli/alien_stimuli/54.png', 'path': 'stimuli/alien_stimuli/54.png'},
    {'name': 'stimuli/instructions/grid4.png', 'path': 'stimuli/instructions/grid4.png'},
    {'name': 'stimuli/alien_stimuli/21.png', 'path': 'stimuli/alien_stimuli/21.png'},
    {'name': 'stimuli/instructions/Slide18.png', 'path': 'stimuli/instructions/Slide18.png'},
    {'name': 'conditions/inputTest.xlsx', 'path': 'conditions/inputTest.xlsx'},
    {'name': 'stimuli/alien_stimuli/46.png', 'path': 'stimuli/alien_stimuli/46.png'},
    {'name': 'stimuli/alien_stimuli/15.png', 'path': 'stimuli/alien_stimuli/15.png'},
    {'name': 'stimuli/instructions/Slide13.png', 'path': 'stimuli/instructions/Slide13.png'},
    {'name': 'stimuli/alien_stimuli/65.png', 'path': 'stimuli/alien_stimuli/65.png'},
    {'name': 'stimuli/instructions/instr4slides_colorshape.pptx', 'path': 'stimuli/instructions/instr4slides_colorshape.pptx'},
    {'name': 'stimuli/kisspng-laptop-computer-keyboard-macbook-pro-macbook-air-k-5b0a8d08cac581.8511277215274181208306.png', 'path': 'stimuli/kisspng-laptop-computer-keyboard-macbook-pro-macbook-air-k-5b0a8d08cac581.8511277215274181208306.png'},
    {'name': 'stimuli/alien_stimuli/44.png', 'path': 'stimuli/alien_stimuli/44.png'},
    {'name': 'conditions/inputInstr_3.xlsx', 'path': 'conditions/inputInstr_3.xlsx'},
    {'name': 'stimuli/instructions/Slide33.png', 'path': 'stimuli/instructions/Slide33.png'},
    {'name': 'stimuli/instructions/Slide5.png', 'path': 'stimuli/instructions/Slide5.png'},
    {'name': 'stimuli/stimuli_consent/Slide3.png', 'path': 'stimuli/stimuli_consent/Slide3.png'},
    {'name': 'stimuli/instructions/Slide1.png', 'path': 'stimuli/instructions/Slide1.png'},
    {'name': 'stimuli/alien_stimuli/25.png', 'path': 'stimuli/alien_stimuli/25.png'},
    {'name': 'stimuli/instructions/Slide17.png', 'path': 'stimuli/instructions/Slide17.png'},
    {'name': 'stimuli/pngfind.com-search-icon-png-1821523.png', 'path': 'stimuli/pngfind.com-search-icon-png-1821523.png'},
    {'name': 'stimuli/alien_stimuli/61.png', 'path': 'stimuli/alien_stimuli/61.png'},
    {'name': 'stimuli/stimuli_consent/Slide1.png', 'path': 'stimuli/stimuli_consent/Slide1.png'},
    {'name': 'stimuli/alien_stimuli/31.png', 'path': 'stimuli/alien_stimuli/31.png'},
    {'name': 'stimuli/instructions/grid2.png', 'path': 'stimuli/instructions/grid2.png'},
    {'name': 'stimuli/alien_stimuli/62.png', 'path': 'stimuli/alien_stimuli/62.png'},
    {'name': 'stimuli/instructions/Slide4.png', 'path': 'stimuli/instructions/Slide4.png'},
    {'name': 'conditions/inputInstr_1.xlsx', 'path': 'conditions/inputInstr_1.xlsx'},
    {'name': 'stimuli/instructions/Slide16.png', 'path': 'stimuli/instructions/Slide16.png'},
    {'name': 'stimuli/instructions/Slide22.png', 'path': 'stimuli/instructions/Slide22.png'},
    {'name': 'stimuli/instructions/Slide20.png', 'path': 'stimuli/instructions/Slide20.png'},
    {'name': 'stimuli/instructions/Slide12.png', 'path': 'stimuli/instructions/Slide12.png'},
    {'name': 'stimuli/instructions/Slide31.png', 'path': 'stimuli/instructions/Slide31.png'},
    {'name': 'stimuli/instructions/Slide11.png', 'path': 'stimuli/instructions/Slide11.png'},
    {'name': 'conditions/inputInstr_2.xlsx', 'path': 'conditions/inputInstr_2.xlsx'},
    {'name': 'stimuli/alien_stimuli/11.png', 'path': 'stimuli/alien_stimuli/11.png'},
    {'name': 'stimuli/stimuli_consent/Slide2.png', 'path': 'stimuli/stimuli_consent/Slide2.png'},
    {'name': 'stimuli/alien_stimuli/33.png', 'path': 'stimuli/alien_stimuli/33.png'},
    {'name': 'stimuli/alien_stimuli/34.png', 'path': 'stimuli/alien_stimuli/34.png'},
    {'name': 'stimuli/instructions/Slide8.png', 'path': 'stimuli/instructions/Slide8.png'},
    {'name': 'stimuli/alien_stimuli/35.png', 'path': 'stimuli/alien_stimuli/35.png'},
    {'name': 'stimuli/alien_stimuli/36.png', 'path': 'stimuli/alien_stimuli/36.png'},
    {'name': 'stimuli/instructions/Slide19.png', 'path': 'stimuli/instructions/Slide19.png'},
    {'name': 'stimuli/instructions/Slide2.png', 'path': 'stimuli/instructions/Slide2.png'},
    {'name': 'stimuli/instructions/Slide3.png', 'path': 'stimuli/instructions/Slide3.png'},
    {'name': 'stimuli/alien_stimuli/16.png', 'path': 'stimuli/alien_stimuli/16.png'},
    {'name': 'conditions/consent.xlsx', 'path': 'conditions/consent.xlsx'},
    {'name': 'stimuli/instructions/Slide15.png', 'path': 'stimuli/instructions/Slide15.png'},
    {'name': 'stimuli/alien_stimuli/66.png', 'path': 'stimuli/alien_stimuli/66.png'},
    {'name': 'stimuli/alien_stimuli/43.png', 'path': 'stimuli/alien_stimuli/43.png'},
    {'name': 'stimuli/instructions/Slide10.png', 'path': 'stimuli/instructions/Slide10.png'},
    {'name': 'stimuli/instructions/break.png', 'path': 'stimuli/instructions/break.png'},
    {'name': 'stimuli/instructions/Slide7.png', 'path': 'stimuli/instructions/Slide7.png'},
    {'name': 'stimuli/alien_stimuli/22.png', 'path': 'stimuli/alien_stimuli/22.png'},
    {'name': 'stimuli/alien_stimuli/52.png', 'path': 'stimuli/alien_stimuli/52.png'},
    {'name': 'stimuli/alien_stimuli/55.png', 'path': 'stimuli/alien_stimuli/55.png'},
    {'name': 'stimuli/alien_stimuli/63.png', 'path': 'stimuli/alien_stimuli/63.png'},
    {'name': 'stimuli/alien_stimuli/23.png', 'path': 'stimuli/alien_stimuli/23.png'},
    {'name': 'stimuli/instructions/Slide6.png', 'path': 'stimuli/instructions/Slide6.png'},
    {'name': 'stimuli/instructions/Slide14.png', 'path': 'stimuli/instructions/Slide14.png'},
    {'name': 'stimuli/alien_stimuli/53.png', 'path': 'stimuli/alien_stimuli/53.png'},
    {'name': 'stimuli/alien_stimuli/32.png', 'path': 'stimuli/alien_stimuli/32.png'},
    {'name': 'stimuli/alien_stimuli/56.png', 'path': 'stimuli/alien_stimuli/56.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var setEnvClock;
var repExp;
var showearly;
var earlystop;
var nrepExp;
var repChoice;
var maxRep;
var maxPracRep;
var praclen;
var txtBoxSize;
var txtBoxCoord;
var msgSize;
var msgCoord;
var alienCoord;
var alienSize;
var gridCoord;
var gridSize;
var dotSize;
var x_recsize;
var y_recsize;
var step;
var x_startPos;
var y_startPos;
var all_x;
var all_y;
var start_all_time;
var urlredirect;
var skipRoutineClock;
var showTrain;
var showGexam;
var instr_1Clock;
var slideStim;
var audioStim;
var startidx;
var loopidx;
var instrep;
var endidx;
var maxSlide;
var beforeRep;
var slides;
var nextButton;
var nextBox;
var nextText;
var prev_but;
var prev_box;
var prev_text;
var sounds;
var getSkipClock;
var instrSkipRep;
var trainRep;
var loadparamsClock;
var alienStim;
var getRow;
var strRow;
var trialLength;
var trialInstr;
var x_movePos;
var y_movePos;
var alienCoord_x;
var alienCoord_y;
var nrtrain;
var nrepcount;
var instrGridClock;
var instrFile;
var iexp;
var choice;
var corrAns;
var moveDur;
var y_dir;
var x_dir;
var presskey;
var icount;
var curlenkey;
var prevlenkey;
var Audio_intr;
var whiteCol;
var blackCol;
var greenCol;
var redCol;
var yellCol;
var purpleCol;
var msgCol;
var startCol;
var moveCol;
var gridImage_instr;
var startPos_3;
var key_instr;
var alienImage_3;
var sounds_1;
var PathFB_instrClock;
var intrAudio;
var x_pathdirX;
var y_pathdirX;
var x_pathSize;
var x_pathdirY;
var y_pathdirY;
var y_pathSize;
var x_corrPos;
var y_corrPos;
var pathLW;
var faceSize;
var start;
var now;
var RTFB_instr;
var gridImage_9;
var alienImageFB_3;
var startPosFB_3;
var keyFB_3;
var pathLine_ydir_2;
var pathLine_xdir_2;
var alienFace_3;
var sounds_2;
var setconfigClock;
var trainGridClock;
var pracFile;
var saveAcc;
var cumAcctrain;
var allowKeys;
var getPress;
var message;
var diff1;
var diff2;
var delta;
var alldiff;
var Choicebutton;
var RTchoice_train;
var gridImage_4;
var startPos;
var movePos;
var key_resp;
var alienImage;
var quickfixationClock;
var text_2;
var PathFB_trainClock;
var pickAudio;
var messageFB;
var msgColFB;
var moveColFB;
var corrColFB;
var RT_FBtrain;
var gridImage_6;
var alienImageFB_2;
var startPosFB_2;
var movePosFB_2;
var keyFB_2;
var pathLine_xdir;
var pathLine_ydir;
var alienFace;
var sounds_4;
var checkPerfClock;
var saveACC;
var fileidx;
var addNrep;
var nextPrac;
var percthres;
var perfthres;
var testGridClock;
var cumAcctest;
var choice_test;
var RTchoice_test;
var gridImage_3;
var alienImage_test;
var startPos_test;
var movePos_test;
var key_resp_test;
var fixationClock;
var fixation_text;
var earlyStopClock;
var endstatus;
var endearly;
var slide_stop;
var key_resp_3;
var sound_stop;
var instr_2Clock;
var slideStim2;
var audioStim3;
var startidx2;
var loopidx2;
var instrep2;
var maxSlide2;
var total_time;
var end_all_time;
var slides_2;
var nextButton_2;
var nextBox_2;
var nextText_2;
var prev_but_2;
var prev_box_2;
var prev_text_2;
var sounds_3;
var endExpClock;
var bye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setEnv"
  setEnvClock = new util.Clock();
  // Run 'Begin Experiment' code from initateExp
  repExp = 1;
  showearly = 0;
  earlystop = 0;
  nrepExp = 1;
  repChoice = 999;
  maxRep = 1;
  maxPracRep = maxRep;
  praclen = 4;
  txtBoxSize = [0.38, 0.3];
  txtBoxCoord = [(- 0.5), (- 0.2)];
  msgSize = 0.045;
  msgCoord = [(- 0.5), (- 0.2)];
  alienCoord = [(- 0.5), 0.2];
  alienSize = [0.3, 0.3];
  gridCoord = [0.24, 0];
  gridSize = [0.8, 0.8];
  dotSize = [0.08, 0.08];
  x_recsize = 0.8;
  y_recsize = 0.8;
  step = (x_recsize / 10);
  x_startPos = 0.3;
  y_startPos = 0.3;
  all_x = [(- 0.16), (- 0.08), 0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56];
  all_y = [(- 0.4), (- 0.32), (- 0.24), (- 0.16), (- 0.08), 0, 0.08, 0.16, 0.24, 0.32];
  start_all_time = [];
  
  // Run 'Begin Experiment' code from redirect_web
  urlredirect = 0;
  
  // Initialize components for Routine "skipRoutine"
  skipRoutineClock = new util.Clock();
  // Run 'Begin Experiment' code from checkSkip
  showTrain = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  showGexam = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  // Initialize components for Routine "instr_1"
  instr_1Clock = new util.Clock();
  // Run 'Begin Experiment' code from loadSlides
  slideStim = "stimuli/instructions/Slide1.png";
  audioStim = "stimuli/instructions/Audio1.wav";
  startidx = 1;
  loopidx = 1;
  instrep = 999;
  endidx = [12, 14, 16, 20, 21, 22, 25, 26, 27, 31];
  maxSlide = 31;
  beforeRep = endidx.length;
  
  slides = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slides', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [(4 / 3), (3 / 4)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  nextButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nextButton',
    text: 'next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.02,
    size: [0.1, 0.02]
  });
  nextButton.clock = new util.Clock();
  
  nextBox = new visual.Rect ({
    win: psychoJS.window, name: 'nextBox', 
    width: [0.15, 0.05][0], height: [0.15, 0.05][1],
    ori: 0.0, pos: [0.45, (- 0.45)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  nextText = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextText',
    text: '→',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  prev_but = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'prev_but',
    text: 'previous',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.45), (- 0.45)],
    letterHeight: 0.02,
    size: [0.1, 0.02]
  });
  prev_but.clock = new util.Clock();
  
  prev_box = new visual.Rect ({
    win: psychoJS.window, name: 'prev_box', 
    width: [0.15, 0.05][0], height: [0.15, 0.05][1],
    ori: 0.0, pos: [(- 0.45), (- 0.45)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  prev_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prev_text',
    text: '←',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  sounds = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sounds.setVolume(1.0);
  // Initialize components for Routine "getSkip"
  getSkipClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  instrSkipRep = 1;
  trainRep = 1;
  
  // Initialize components for Routine "loadparams"
  loadparamsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_6
  alienStim = "stimuli/alien_stimuli/11.png";
  getRow = 0;
  strRow = getRow.toString();
  trialLength = 2;
  trialInstr = 1;
  x_startPos = 0;
  y_startPos = 0;
  x_movePos = 0;
  y_movePos = 0;
  alienCoord_x = 0;
  alienCoord_y = 0;
  nrtrain = 0;
  nrepcount = 0;
  alienCoord_x = 2;
  alienCoord_y = 2;
  all_x = [(- 0.16), (- 0.08), 0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56];
  all_y = [(- 0.4), (- 0.32), (- 0.24), (- 0.16), (- 0.08), 0, 0.08, 0.16, 0.24, 0.32];
  
  // Initialize components for Routine "instrGrid"
  instrGridClock = new util.Clock();
  // Run 'Begin Experiment' code from gridCode_instr
  instrFile = "conditions/inputInstr_1.xlsx";
  iexp = 1;
  choice = 99;
  corrAns = 99;
  moveDur = 9999;
  y_dir = 0;
  x_dir = 0;
  presskey = 0;
  icount = 1;
  curlenkey = 0;
  prevlenkey = 0;
  choice = 0;
  alienStim = "stimuli/alien_stimuli/11.png";
  Audio_intr = "stimuli/instructions/Audio_intr1.wav";
  whiteCol = [1, 1, 1];
  blackCol = [(- 1), (- 1), (- 1)];
  greenCol = [(- 1), 0.38, (- 0.37)];
  redCol = [1, (- 1), (- 1)];
  yellCol = [1, 0.68, (- 1)];
  purpleCol = [0.2549, (- 0.749), 0.8824];
  msgCol = blackCol;
  startCol = blackCol;
  moveCol = startCol;
  
  gridImage_instr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gridImage_instr', units : undefined, 
    image : 'stimuli/instructions/grid2.png', mask : undefined,
    ori : 0.0, pos : gridCoord, size : gridSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  startPos_3 = new visual.Polygon({
    win: psychoJS.window, name: 'startPos_3', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(startCol),
    fillColor: new util.Color(startCol),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  key_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  alienImage_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alienImage_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : alienCoord, size : alienSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  sounds_1 = new sound.Sound({
    win: psychoJS.window,
    value: Audio_intr,
    secs: (- 1),
    });
  sounds_1.setVolume(1.0);
  // Initialize components for Routine "PathFB_instr"
  PathFB_instrClock = new util.Clock();
  // Run 'Begin Experiment' code from pathFB_2
  intrAudio = "stimuli/instructions/Audio_intr2.wav";
  x_pathdirX = 99;
  y_pathdirX = 99;
  x_pathSize = 99;
  x_pathdirY = 99;
  y_pathdirY = 99;
  y_pathSize = 99;
  x_corrPos = 99;
  y_corrPos = 99;
  pathLW = 8;
  faceSize = [0.08, 0.08];
  start = [];
  now = [];
  RTFB_instr = [];
  
  gridImage_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gridImage_9', units : undefined, 
    image : 'stimuli/instructions/grid2.png', mask : undefined,
    ori : 0.0, pos : gridCoord, size : gridSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  alienImageFB_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alienImageFB_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : alienCoord, size : alienSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  startPosFB_3 = new visual.Polygon({
    win: psychoJS.window, name: 'startPosFB_3', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(startCol),
    fillColor: new util.Color(startCol),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  keyFB_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pathLine_ydir_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'pathLine_ydir_2', 
    vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],
    ori: 90.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  pathLine_xdir_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'pathLine_xdir_2', 
    vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  alienFace_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alienFace_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : faceSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  sounds_2 = new sound.Sound({
    win: psychoJS.window,
    value: intrAudio,
    secs: (- 1),
    });
  sounds_2.setVolume(1.0);
  // Initialize components for Routine "setconfig"
  setconfigClock = new util.Clock();
  // Run 'Begin Experiment' code from resetStuff
  nrepcount = 0;
  
  // Initialize components for Routine "trainGrid"
  trainGridClock = new util.Clock();
  // Run 'Begin Experiment' code from gridCode
  pracFile = "conditions/inputTrain_1.xlsx";
  choice = 99;
  corrAns = 0;
  saveAcc = 0;
  cumAcctrain = 0;
  allowKeys = ["up", "down", "left", "right", "space"];
  x_movePos = x_startPos;
  y_movePos = y_startPos;
  moveDur = 9999;
  y_dir = 0;
  x_dir = 0;
  presskey = 0;
  icount = 1;
  curlenkey = 0;
  prevlenkey = 0;
  choice = 0;
  getPress = [];
  alienStim = "stimuli/alien_stimuli/a1.png";
  message = "Where am\nI hiding?";
  whiteCol = [1, 1, 1];
  blackCol = [(- 1), (- 1), (- 1)];
  greenCol = [(- 1), 0.38, (- 0.37)];
  redCol = [1, (- 1), (- 1)];
  msgCol = blackCol;
  startCol = blackCol;
  moveCol = startCol;
  diff1 = [];
  diff2 = [];
  delta = [];
  alldiff = [];
  Choicebutton = [];
  RTchoice_train = [];
  
  gridImage_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gridImage_4', units : undefined, 
    image : 'stimuli/instructions/grid2.png', mask : undefined,
    ori : 0.0, pos : gridCoord, size : gridSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  startPos = new visual.Polygon({
    win: psychoJS.window, name: 'startPos', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(startCol),
    fillColor: new util.Color(startCol),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  movePos = new visual.Polygon({
    win: psychoJS.window, name: 'movePos', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  alienImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alienImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : alienCoord, size : alienSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "quickfixation"
  quickfixationClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "PathFB_train"
  PathFB_trainClock = new util.Clock();
  // Run 'Begin Experiment' code from pathFB
  pickAudio = "stimuli/instructions/Audio_corr.wav";
  messageFB = "test";
  msgColFB = whiteCol;
  moveColFB = whiteCol;
  x_corrPos = 99;
  y_corrPos = 99;
  corrColFB = whiteCol;
  x_pathdirX = 99;
  y_pathdirX = 99;
  x_pathSize = 99;
  x_pathdirY = 99;
  y_pathdirY = 99;
  y_pathSize = 99;
  pathLW = 8;
  faceSize = [0.08, 0.08];
  alienCoord_y = 2;
  alienCoord_x = 2;
  messageFB = "test";
  msgColFB = whiteCol;
  moveColFB = whiteCol;
  x_corrPos = 99;
  y_corrPos = 99;
  corrColFB = whiteCol;
  startCol = blackCol;
  faceSize = [0.08, 0.08];
  RT_FBtrain = [];
  
  gridImage_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gridImage_6', units : undefined, 
    image : 'stimuli/instructions/grid2.png', mask : undefined,
    ori : 0.0, pos : gridCoord, size : gridSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  alienImageFB_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alienImageFB_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : alienCoord, size : alienSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  startPosFB_2 = new visual.Polygon({
    win: psychoJS.window, name: 'startPosFB_2', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(startCol),
    fillColor: new util.Color(startCol),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  movePosFB_2 = new visual.Polygon({
    win: psychoJS.window, name: 'movePosFB_2', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  keyFB_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pathLine_xdir = new visual.ShapeStim ({
    win: psychoJS.window, name: 'pathLine_xdir', 
    vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  pathLine_ydir = new visual.ShapeStim ({
    win: psychoJS.window, name: 'pathLine_ydir', 
    vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],
    ori: 90.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  alienFace = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alienFace', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : faceSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  sounds_4 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sounds_4.setVolume(1.0);
  // Initialize components for Routine "checkPerf"
  checkPerfClock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  pracFile = "conditions/inputTrain_1.xlsx";
  saveACC = 0;
  fileidx = 1;
  addNrep = 1;
  nextPrac = 99;
  percthres = 0.7;
  perfthres = 17;
  
  // Initialize components for Routine "testGrid"
  testGridClock = new util.Clock();
  // Run 'Begin Experiment' code from gridCode_test
  iexp = 1;
  choice = 99;
  corrAns = 99;
  cumAcctest = 0;
  moveDur = 9999;
  y_dir = 0;
  x_dir = 0;
  presskey = 0;
  icount = 1;
  curlenkey = 0;
  prevlenkey = 0;
  choice = 0;
  alienStim = "stimuli/alien_stimuli/11.png";
  whiteCol = [1, 1, 1];
  blackCol = [(- 1), (- 1), (- 1)];
  greenCol = [(- 1), 0.38, (- 0.37)];
  redCol = [1, (- 1), (- 1)];
  msgCol = blackCol;
  startCol = blackCol;
  moveCol = startCol;
  choice_test = [];
  RTchoice_test = [];
  
  gridImage_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gridImage_3', units : undefined, 
    image : 'stimuli/instructions/grid2.png', mask : undefined,
    ori : 0.0, pos : gridCoord, size : gridSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  alienImage_test = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alienImage_test', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : alienCoord, size : alienSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  startPos_test = new visual.Polygon({
    win: psychoJS.window, name: 'startPos_test', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(startCol),
    fillColor: new util.Color(startCol),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  movePos_test = new visual.Polygon({
    win: psychoJS.window, name: 'movePos_test', 
    edges: 100, size:dotSize,
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_text',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "earlyStop"
  earlyStopClock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  endstatus = " ";
  endearly = "stimuli/instructions/Audio_earlystop.wav";
  
  slide_stop = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slide_stop', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [(4 / 3), (3 / 4)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_stop = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_stop.setVolume(1.0);
  // Initialize components for Routine "instr_2"
  instr_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_12
  slideStim2 = "stimuli/instructions/Slide33.png";
  audioStim3 = "stimuli/instructions/Audio33.wav";
  startidx2 = 32;
  loopidx2 = 1;
  instrep2 = 999;
  maxSlide2 = 34;
  beforeRep = endidx.length;
  total_time = [];
  end_all_time = [];
  start_all_time = [];
  
  slides_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slides_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [(4 / 3), (3 / 4)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  nextButton_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nextButton_2',
    text: 'next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.02,
    size: [0.1, 0.02]
  });
  nextButton_2.clock = new util.Clock();
  
  nextBox_2 = new visual.Rect ({
    win: psychoJS.window, name: 'nextBox_2', 
    width: [0.15, 0.05][0], height: [0.15, 0.05][1],
    ori: 0.0, pos: [0.45, (- 0.45)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  nextText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextText_2',
    text: '→',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  prev_but_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'prev_but_2',
    text: 'previous',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.45), (- 0.45)],
    letterHeight: 0.02,
    size: [0.1, 0.02]
  });
  prev_but_2.clock = new util.Clock();
  
  prev_box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'prev_box_2', 
    width: [0.15, 0.05][0], height: [0.15, 0.05][1],
    ori: 0.0, pos: [(- 0.45), (- 0.45)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  prev_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prev_text_2',
    text: '←',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  sounds_3 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sounds_3.setVolume(1.0);
  // Initialize components for Routine "endExp"
  endExpClock = new util.Clock();
  // Run 'Begin Experiment' code from bye_code
  total_time = [];
  end_all_time = [];
  start_all_time = [];
  
  bye = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bye', units : undefined, 
    image : 'stimuli/instructions/Slide33.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [(4 / 3), (3 / 4)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var url;
var setEnvComponents;
function setEnvRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setEnv' ---
    t = 0;
    setEnvClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from initateExp
    start_all_time = globalClock.getTime();
    psychoJS.experiment.addData("start_all_time", "start_all_time");
    
    // Run 'Begin Routine' code from redirect_web
    url = "testround";
    psychoJS.experiment.addData("url", url);
    
    // keep track of which components have finished
    setEnvComponents = [];
    
    setEnvComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setEnvRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setEnv' ---
    // get current time
    t = setEnvClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from redirect_web
    /* Syntax Error: Fix Python code */
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setEnvComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setEnvRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setEnv' ---
    setEnvComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "setEnv" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var skipRoutineComponents;
function skipRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'skipRoutine' ---
    t = 0;
    skipRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    skipRoutineComponents = [];
    
    skipRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function skipRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'skipRoutine' ---
    // get current time
    t = skipRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    skipRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function skipRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'skipRoutine' ---
    skipRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "skipRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var beforeExpLoop;
function beforeExpLoopLoopBegin(beforeExpLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    beforeExpLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: beforeRep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'beforeExpLoop'
    });
    psychoJS.experiment.addLoop(beforeExpLoop); // add the loop to the experiment
    currentLoop = beforeExpLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    beforeExpLoop.forEach(function() {
      snapshot = beforeExpLoop.getSnapshot();
    
      beforeExpLoopLoopScheduler.add(importConditions(snapshot));
      const mini_instr_trialsLoopScheduler = new Scheduler(psychoJS);
      beforeExpLoopLoopScheduler.add(mini_instr_trialsLoopBegin(mini_instr_trialsLoopScheduler, snapshot));
      beforeExpLoopLoopScheduler.add(mini_instr_trialsLoopScheduler);
      beforeExpLoopLoopScheduler.add(mini_instr_trialsLoopEnd);
      beforeExpLoopLoopScheduler.add(getSkipRoutineBegin(snapshot));
      beforeExpLoopLoopScheduler.add(getSkipRoutineEachFrame());
      beforeExpLoopLoopScheduler.add(getSkipRoutineEnd(snapshot));
      const instrLoopLoopScheduler = new Scheduler(psychoJS);
      beforeExpLoopLoopScheduler.add(instrLoopLoopBegin(instrLoopLoopScheduler, snapshot));
      beforeExpLoopLoopScheduler.add(instrLoopLoopScheduler);
      beforeExpLoopLoopScheduler.add(instrLoopLoopEnd);
      const repeat_pracLoopScheduler = new Scheduler(psychoJS);
      beforeExpLoopLoopScheduler.add(repeat_pracLoopBegin(repeat_pracLoopScheduler, snapshot));
      beforeExpLoopLoopScheduler.add(repeat_pracLoopScheduler);
      beforeExpLoopLoopScheduler.add(repeat_pracLoopEnd);
      beforeExpLoopLoopScheduler.add(beforeExpLoopLoopEndIteration(beforeExpLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var mini_instr_trials;
function mini_instr_trialsLoopBegin(mini_instr_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mini_instr_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: instrep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'mini_instr_trials'
    });
    psychoJS.experiment.addLoop(mini_instr_trials); // add the loop to the experiment
    currentLoop = mini_instr_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    mini_instr_trials.forEach(function() {
      snapshot = mini_instr_trials.getSnapshot();
    
      mini_instr_trialsLoopScheduler.add(importConditions(snapshot));
      mini_instr_trialsLoopScheduler.add(instr_1RoutineBegin(snapshot));
      mini_instr_trialsLoopScheduler.add(instr_1RoutineEachFrame());
      mini_instr_trialsLoopScheduler.add(instr_1RoutineEnd(snapshot));
      mini_instr_trialsLoopScheduler.add(mini_instr_trialsLoopEndIteration(mini_instr_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function mini_instr_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mini_instr_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mini_instr_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instrLoop;
function instrLoopLoopBegin(instrLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: instrSkipRep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, instrFile, strRow),
      seed: undefined, name: 'instrLoop'
    });
    psychoJS.experiment.addLoop(instrLoop); // add the loop to the experiment
    currentLoop = instrLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instrLoop.forEach(function() {
      snapshot = instrLoop.getSnapshot();
    
      instrLoopLoopScheduler.add(importConditions(snapshot));
      instrLoopLoopScheduler.add(loadparamsRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(loadparamsRoutineEachFrame());
      instrLoopLoopScheduler.add(loadparamsRoutineEnd(snapshot));
      instrLoopLoopScheduler.add(instrGridRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(instrGridRoutineEachFrame());
      instrLoopLoopScheduler.add(instrGridRoutineEnd(snapshot));
      instrLoopLoopScheduler.add(PathFB_instrRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(PathFB_instrRoutineEachFrame());
      instrLoopLoopScheduler.add(PathFB_instrRoutineEnd(snapshot));
      instrLoopLoopScheduler.add(setconfigRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(setconfigRoutineEachFrame());
      instrLoopLoopScheduler.add(setconfigRoutineEnd(snapshot));
      instrLoopLoopScheduler.add(instrLoopLoopEndIteration(instrLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instrLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instrLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instrLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var repeat_prac;
function repeat_pracLoopBegin(repeat_pracLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat_prac = new TrialHandler({
      psychoJS: psychoJS,
      nReps: maxRep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repeat_prac'
    });
    psychoJS.experiment.addLoop(repeat_prac); // add the loop to the experiment
    currentLoop = repeat_prac;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    repeat_prac.forEach(function() {
      snapshot = repeat_prac.getSnapshot();
    
      repeat_pracLoopScheduler.add(importConditions(snapshot));
      const trainLoopLoopScheduler = new Scheduler(psychoJS);
      repeat_pracLoopScheduler.add(trainLoopLoopBegin(trainLoopLoopScheduler, snapshot));
      repeat_pracLoopScheduler.add(trainLoopLoopScheduler);
      repeat_pracLoopScheduler.add(trainLoopLoopEnd);
      repeat_pracLoopScheduler.add(checkPerfRoutineBegin(snapshot));
      repeat_pracLoopScheduler.add(checkPerfRoutineEachFrame());
      repeat_pracLoopScheduler.add(checkPerfRoutineEnd(snapshot));
      repeat_pracLoopScheduler.add(repeat_pracLoopEndIteration(repeat_pracLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trainLoop;
function trainLoopLoopBegin(trainLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trainLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trainRep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: pracFile,
      seed: undefined, name: 'trainLoop'
    });
    psychoJS.experiment.addLoop(trainLoop); // add the loop to the experiment
    currentLoop = trainLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trainLoop.forEach(function() {
      snapshot = trainLoop.getSnapshot();
    
      trainLoopLoopScheduler.add(importConditions(snapshot));
      trainLoopLoopScheduler.add(loadparamsRoutineBegin(snapshot));
      trainLoopLoopScheduler.add(loadparamsRoutineEachFrame());
      trainLoopLoopScheduler.add(loadparamsRoutineEnd(snapshot));
      const moveLoop_trainLoopScheduler = new Scheduler(psychoJS);
      trainLoopLoopScheduler.add(moveLoop_trainLoopBegin(moveLoop_trainLoopScheduler, snapshot));
      trainLoopLoopScheduler.add(moveLoop_trainLoopScheduler);
      trainLoopLoopScheduler.add(moveLoop_trainLoopEnd);
      trainLoopLoopScheduler.add(quickfixationRoutineBegin(snapshot));
      trainLoopLoopScheduler.add(quickfixationRoutineEachFrame());
      trainLoopLoopScheduler.add(quickfixationRoutineEnd(snapshot));
      trainLoopLoopScheduler.add(PathFB_trainRoutineBegin(snapshot));
      trainLoopLoopScheduler.add(PathFB_trainRoutineEachFrame());
      trainLoopLoopScheduler.add(PathFB_trainRoutineEnd(snapshot));
      trainLoopLoopScheduler.add(quickfixationRoutineBegin(snapshot));
      trainLoopLoopScheduler.add(quickfixationRoutineEachFrame());
      trainLoopLoopScheduler.add(quickfixationRoutineEnd(snapshot));
      trainLoopLoopScheduler.add(setconfigRoutineBegin(snapshot));
      trainLoopLoopScheduler.add(setconfigRoutineEachFrame());
      trainLoopLoopScheduler.add(setconfigRoutineEnd(snapshot));
      trainLoopLoopScheduler.add(trainLoopLoopEndIteration(trainLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var moveLoop_train;
function moveLoop_trainLoopBegin(moveLoop_trainLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    moveLoop_train = new TrialHandler({
      psychoJS: psychoJS,
      nReps: repChoice, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'moveLoop_train'
    });
    psychoJS.experiment.addLoop(moveLoop_train); // add the loop to the experiment
    currentLoop = moveLoop_train;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    moveLoop_train.forEach(function() {
      snapshot = moveLoop_train.getSnapshot();
    
      moveLoop_trainLoopScheduler.add(importConditions(snapshot));
      moveLoop_trainLoopScheduler.add(trainGridRoutineBegin(snapshot));
      moveLoop_trainLoopScheduler.add(trainGridRoutineEachFrame());
      moveLoop_trainLoopScheduler.add(trainGridRoutineEnd(snapshot));
      moveLoop_trainLoopScheduler.add(moveLoop_trainLoopEndIteration(moveLoop_trainLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function moveLoop_trainLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(moveLoop_train);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function moveLoop_trainLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trainLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trainLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trainLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function repeat_pracLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeat_prac);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeat_pracLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function beforeExpLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(beforeExpLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function beforeExpLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var experiment;
function experimentLoopBegin(experimentLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    experiment = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nrepExp, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/inputTest.xlsx',
      seed: undefined, name: 'experiment'
    });
    psychoJS.experiment.addLoop(experiment); // add the loop to the experiment
    currentLoop = experiment;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    experiment.forEach(function() {
      snapshot = experiment.getSnapshot();
    
      experimentLoopScheduler.add(importConditions(snapshot));
      experimentLoopScheduler.add(loadparamsRoutineBegin(snapshot));
      experimentLoopScheduler.add(loadparamsRoutineEachFrame());
      experimentLoopScheduler.add(loadparamsRoutineEnd(snapshot));
      const moveLoop_testLoopScheduler = new Scheduler(psychoJS);
      experimentLoopScheduler.add(moveLoop_testLoopBegin(moveLoop_testLoopScheduler, snapshot));
      experimentLoopScheduler.add(moveLoop_testLoopScheduler);
      experimentLoopScheduler.add(moveLoop_testLoopEnd);
      experimentLoopScheduler.add(fixationRoutineBegin(snapshot));
      experimentLoopScheduler.add(fixationRoutineEachFrame());
      experimentLoopScheduler.add(fixationRoutineEnd(snapshot));
      experimentLoopScheduler.add(setconfigRoutineBegin(snapshot));
      experimentLoopScheduler.add(setconfigRoutineEachFrame());
      experimentLoopScheduler.add(setconfigRoutineEnd(snapshot));
      experimentLoopScheduler.add(experimentLoopEndIteration(experimentLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var moveLoop_test;
function moveLoop_testLoopBegin(moveLoop_testLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    moveLoop_test = new TrialHandler({
      psychoJS: psychoJS,
      nReps: repChoice, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'moveLoop_test'
    });
    psychoJS.experiment.addLoop(moveLoop_test); // add the loop to the experiment
    currentLoop = moveLoop_test;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    moveLoop_test.forEach(function() {
      snapshot = moveLoop_test.getSnapshot();
    
      moveLoop_testLoopScheduler.add(importConditions(snapshot));
      moveLoop_testLoopScheduler.add(testGridRoutineBegin(snapshot));
      moveLoop_testLoopScheduler.add(testGridRoutineEachFrame());
      moveLoop_testLoopScheduler.add(testGridRoutineEnd(snapshot));
      moveLoop_testLoopScheduler.add(moveLoop_testLoopEndIteration(moveLoop_testLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function moveLoop_testLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(moveLoop_test);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function moveLoop_testLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function experimentLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(experiment);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function experimentLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var mini_instr2_trials;
function mini_instr2_trialsLoopBegin(mini_instr2_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mini_instr2_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: instrep2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'mini_instr2_trials'
    });
    psychoJS.experiment.addLoop(mini_instr2_trials); // add the loop to the experiment
    currentLoop = mini_instr2_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    mini_instr2_trials.forEach(function() {
      snapshot = mini_instr2_trials.getSnapshot();
    
      mini_instr2_trialsLoopScheduler.add(importConditions(snapshot));
      mini_instr2_trialsLoopScheduler.add(instr_2RoutineBegin(snapshot));
      mini_instr2_trialsLoopScheduler.add(instr_2RoutineEachFrame());
      mini_instr2_trialsLoopScheduler.add(instr_2RoutineEnd(snapshot));
      mini_instr2_trialsLoopScheduler.add(mini_instr2_trialsLoopEndIteration(mini_instr2_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function mini_instr2_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mini_instr2_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mini_instr2_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instr_1Components;
function instr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_1' ---
    t = 0;
    instr_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from loadSlides
    slideStim = (("stimuli/instructions/Slide" + startidx.toString()) + ".png");
    psychoJS.experiment.addData("slideStim", slideStim);
    audioStim = (("stimuli/instructions/Audio" + startidx.toString()) + ".wav");
    psychoJS.experiment.addData("audioStim", audioStim);
    
    slides.setImage(slideStim);
    sounds = new sound.Sound({
    win: psychoJS.window,
    value: audioStim,
    secs: -1,
    });
    sounds.setVolume(1.0);
    // keep track of which components have finished
    instr_1Components = [];
    instr_1Components.push(slides);
    instr_1Components.push(nextButton);
    instr_1Components.push(nextBox);
    instr_1Components.push(nextText);
    instr_1Components.push(prev_but);
    instr_1Components.push(prev_box);
    instr_1Components.push(prev_text);
    instr_1Components.push(sounds);
    
    instr_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var button_name;
function instr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_1' ---
    // get current time
    t = instr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slides* updates
    if (t >= 0.0 && slides.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slides.tStart = t;  // (not accounting for frame time here)
      slides.frameNStart = frameN;  // exact frame index
      
      slides.setAutoDraw(true);
    }

    
    // *nextButton* updates
    if (t >= 0 && nextButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton.tStart = t;  // (not accounting for frame time here)
      nextButton.frameNStart = frameN;  // exact frame index
      
      nextButton.setAutoDraw(true);
    }

    if (nextButton.status === PsychoJS.Status.STARTED) {
      // check whether nextButton has been pressed
      if (nextButton.isClicked) {
        if (!nextButton.wasClicked) {
          // store time of first click
          nextButton.timesOn.push(nextButton.clock.getTime());
          nextButton.numClicks += 1;
          // store time clicked until
          nextButton.timesOff.push(nextButton.clock.getTime());
        } else {
          // update time clicked until;
          nextButton.timesOff[nextButton.timesOff.length - 1] = nextButton.clock.getTime();
        }
        if (!nextButton.wasClicked) {
          // end routine when nextButton is clicked
          continueRoutine = false;
          startidx += 1;
          button_name = "next";
        }
        // if nextButton is still clicked next frame, it is not a new click
        nextButton.wasClicked = true;
      } else {
        // if nextButton is clicked next frame, it is a new click
        nextButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nextButton hasn't started / has finished
      nextButton.clock.reset();
      // if nextButton is clicked next frame, it is a new click
      nextButton.wasClicked = false;
    }
    
    // *nextBox* updates
    if (t >= 0.0 && nextBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextBox.tStart = t;  // (not accounting for frame time here)
      nextBox.frameNStart = frameN;  // exact frame index
      
      nextBox.setAutoDraw(true);
    }

    
    // *nextText* updates
    if (t >= 0.0 && nextText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextText.tStart = t;  // (not accounting for frame time here)
      nextText.frameNStart = frameN;  // exact frame index
      
      nextText.setAutoDraw(true);
    }

    
    // *prev_but* updates
    if (t >= 0 && prev_but.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prev_but.tStart = t;  // (not accounting for frame time here)
      prev_but.frameNStart = frameN;  // exact frame index
      
      prev_but.setAutoDraw(true);
    }

    if (prev_but.status === PsychoJS.Status.STARTED) {
      // check whether prev_but has been pressed
      if (prev_but.isClicked) {
        if (!prev_but.wasClicked) {
          // store time of first click
          prev_but.timesOn.push(prev_but.clock.getTime());
          prev_but.numClicks += 1;
          // store time clicked until
          prev_but.timesOff.push(prev_but.clock.getTime());
        } else {
          // update time clicked until;
          prev_but.timesOff[prev_but.timesOff.length - 1] = prev_but.clock.getTime();
        }
        if (!prev_but.wasClicked) {
          // end routine when prev_but is clicked
          continueRoutine = false;
          startidx -= 1;
          button_name = "previous";
        }
        // if prev_but is still clicked next frame, it is not a new click
        prev_but.wasClicked = true;
      } else {
        // if prev_but is clicked next frame, it is a new click
        prev_but.wasClicked = false;
      }
    } else {
      // keep clock at 0 if prev_but hasn't started / has finished
      prev_but.clock.reset();
      // if prev_but is clicked next frame, it is a new click
      prev_but.wasClicked = false;
    }
    
    // *prev_box* updates
    if (t >= 0.0 && prev_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prev_box.tStart = t;  // (not accounting for frame time here)
      prev_box.frameNStart = frameN;  // exact frame index
      
      prev_box.setAutoDraw(true);
    }

    
    // *prev_text* updates
    if (t >= 0.0 && prev_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prev_text.tStart = t;  // (not accounting for frame time here)
      prev_text.frameNStart = frameN;  // exact frame index
      
      prev_text.setAutoDraw(true);
    }

    // start/stop sounds
    if (t >= 0.0 && sounds.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sounds.tStart = t;  // (not accounting for frame time here)
      sounds.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sounds.play(); });  // screen flip
      sounds.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sounds.getDuration() + sounds.tStart)     && sounds.status === PsychoJS.Status.STARTED) {
      sounds.stop();  // stop the sound (if longer than duration)
      sounds.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_1' ---
    instr_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from loadSlides
    if ((startidx > endidx[(loopidx - 1)])) {
        mini_instr_trials.finished = true;
        loopidx += 1;
        if ((startidx > maxSlide)) {
            beforeExpLoop.finished = true;
        }
    }
    
    psychoJS.experiment.addData('nextButton.numClicks', nextButton.numClicks);
    psychoJS.experiment.addData('nextButton.timesOn', nextButton.timesOn);
    psychoJS.experiment.addData('nextButton.timesOff', nextButton.timesOff);
    psychoJS.experiment.addData('prev_but.numClicks', prev_but.numClicks);
    psychoJS.experiment.addData('prev_but.timesOn', prev_but.timesOn);
    psychoJS.experiment.addData('prev_but.timesOff', prev_but.timesOff);
    sounds.stop();  // ensure sound has stopped at end of routine
    // the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var getSkipComponents;
function getSkipRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'getSkip' ---
    t = 0;
    getSkipClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    if ((showGexam[(loopidx - 1)] === 1)) {
        instrSkipRep = 1;
    } else {
        instrSkipRep = 0;
    }
    if ((showTrain[(loopidx - 1)] === 1)) {
        trainRep = 1;
    } else {
        trainRep = 0;
    }
    
    // keep track of which components have finished
    getSkipComponents = [];
    
    getSkipComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function getSkipRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'getSkip' ---
    // get current time
    t = getSkipClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    getSkipComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function getSkipRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'getSkip' ---
    getSkipComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "getSkip" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loadparamsComponents;
function loadparamsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loadparams' ---
    t = 0;
    loadparamsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    alienStim = (("stimuli/alien_stimuli/" + alienID.toString()) + ".png");
    psychoJS.experiment.addData("alienStim", alienStim);
    nrtrain = trialLength;
    x_startPos = all_x[x_fixStart];
    y_startPos = all_y[y_fixStart];
    x_movePos = x_startPos;
    y_movePos = y_startPos;
    
    // keep track of which components have finished
    loadparamsComponents = [];
    
    loadparamsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function loadparamsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loadparams' ---
    // get current time
    t = loadparamsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    loadparamsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loadparamsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loadparams' ---
    loadparamsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "loadparams" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choice_start;
var _key_instr_allKeys;
var instrGridComponents;
function instrGridRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrGrid' ---
    t = 0;
    instrGridClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from gridCode_instr
    choice_start = globalClock.getTime();
    alienStim = (("stimuli/alien_stimuli/" + alienID.toString()) + ".png");
    Audio_intr = "stimuli/instructions/Audio_intr1.wav";
    psychoJS.experiment.addData("instrFile", instrFile);
    psychoJS.experiment.addData("alienStim_instr", alienStim);
    
    startPos_3.setPos([x_startPos, y_startPos]);
    key_instr.keys = undefined;
    key_instr.rt = undefined;
    _key_instr_allKeys = [];
    alienImage_3.setImage(alienStim);
    sounds_1.setVolume(1.0);
    // keep track of which components have finished
    instrGridComponents = [];
    instrGridComponents.push(gridImage_instr);
    instrGridComponents.push(startPos_3);
    instrGridComponents.push(key_instr);
    instrGridComponents.push(alienImage_3);
    instrGridComponents.push(sounds_1);
    
    instrGridComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrGridRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrGrid' ---
    // get current time
    t = instrGridClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gridImage_instr* updates
    if (t >= 0.0 && gridImage_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridImage_instr.tStart = t;  // (not accounting for frame time here)
      gridImage_instr.frameNStart = frameN;  // exact frame index
      
      gridImage_instr.setAutoDraw(true);
    }

    
    // *startPos_3* updates
    if (t >= 0.0 && startPos_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPos_3.tStart = t;  // (not accounting for frame time here)
      startPos_3.frameNStart = frameN;  // exact frame index
      
      startPos_3.setAutoDraw(true);
    }

    
    // *key_instr* updates
    if (t >= 0.0 && key_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr.tStart = t;  // (not accounting for frame time here)
      key_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr.clearEvents(); });
    }

    if (key_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr.getKeys({keyList: ['return'], waitRelease: false});
      _key_instr_allKeys = _key_instr_allKeys.concat(theseKeys);
      if (_key_instr_allKeys.length > 0) {
        key_instr.keys = _key_instr_allKeys[_key_instr_allKeys.length - 1].name;  // just the last key pressed
        key_instr.rt = _key_instr_allKeys[_key_instr_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *alienImage_3* updates
    if (t >= 0.0 && alienImage_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alienImage_3.tStart = t;  // (not accounting for frame time here)
      alienImage_3.frameNStart = frameN;  // exact frame index
      
      alienImage_3.setAutoDraw(true);
    }

    // start/stop sounds_1
    if (t >= 0.0 && sounds_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sounds_1.tStart = t;  // (not accounting for frame time here)
      sounds_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sounds_1.play(); });  // screen flip
      sounds_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sounds_1.getDuration() + sounds_1.tStart)     && sounds_1.status === PsychoJS.Status.STARTED) {
      sounds_1.stop();  // stop the sound (if longer than duration)
      sounds_1.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrGridComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrGridRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrGrid' ---
    instrGridComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instr.corr, level);
    }
    psychoJS.experiment.addData('key_instr.keys', key_instr.keys);
    if (typeof key_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr.rt', key_instr.rt);
        routineTimer.reset();
        }
    
    key_instr.stop();
    sounds_1.stop();  // ensure sound has stopped at end of routine
    // the Routine "instrGrid" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyFB_3_allKeys;
var PathFB_instrComponents;
function PathFB_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PathFB_instr' ---
    t = 0;
    PathFB_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from pathFB_2
    start = globalClock.getTime();
    intrAudio = "stimuli/instructions/Audio_intr2.wav";
    alienStim = (("stimuli/alien_stimuli/" + alienID.toString()) + ".png");
    x_corrPos = all_x[x_corrSteps];
    y_corrPos = all_y[y_corrSteps];
    if ((x_corrSteps >= x_fixStart)) {
        x_pathdirX = ((x_corrPos + x_startPos) / 2);
        y_pathdirX = y_startPos;
        x_pathSize = (Math.abs((x_fixStart - x_corrSteps)) * step);
    } else {
        if ((x_corrSteps < x_fixStart)) {
            x_pathdirX = ((x_corrPos + x_startPos) / 2);
            y_pathdirX = y_startPos;
            x_pathSize = (Math.abs((x_fixStart - x_corrSteps)) * step);
        }
    }
    if ((y_corrSteps >= y_fixStart)) {
        y_pathdirY = ((y_corrPos + y_startPos) / 2);
        x_pathdirY = x_corrPos;
        y_pathSize = (Math.abs((y_fixStart - y_corrSteps)) * step);
    } else {
        if ((y_corrSteps < y_fixStart)) {
            y_pathdirY = ((y_corrPos + y_startPos) / 2);
            x_pathdirY = x_corrPos;
            y_pathSize = (Math.abs((y_fixStart - y_corrSteps)) * step);
        }
    }
    psychoJS.experiment.addData("all_x", all_x);
    psychoJS.experiment.addData("all_y", all_y);
    psychoJS.experiment.addData("FBy_corrSteps", y_corrSteps);
    psychoJS.experiment.addData("FBy_fixStart", y_fixStart);
    psychoJS.experiment.addData("FBx_corrSteps", x_corrSteps);
    psychoJS.experiment.addData("FBx_fixStart", x_fixStart);
    psychoJS.experiment.addData("FBy_pathSize_check", y_pathSize);
    psychoJS.experiment.addData("FBx_pathSize_check", x_pathSize);
    
    alienImageFB_3.setImage(alienStim);
    startPosFB_3.setPos([x_startPos, y_startPos]);
    keyFB_3.keys = undefined;
    keyFB_3.rt = undefined;
    _keyFB_3_allKeys = [];
    alienFace_3.setImage(alienStim);
    sounds_2.setVolume(1.0);
    // keep track of which components have finished
    PathFB_instrComponents = [];
    PathFB_instrComponents.push(gridImage_9);
    PathFB_instrComponents.push(alienImageFB_3);
    PathFB_instrComponents.push(startPosFB_3);
    PathFB_instrComponents.push(keyFB_3);
    PathFB_instrComponents.push(pathLine_ydir_2);
    PathFB_instrComponents.push(pathLine_xdir_2);
    PathFB_instrComponents.push(alienFace_3);
    PathFB_instrComponents.push(sounds_2);
    
    PathFB_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PathFB_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PathFB_instr' ---
    // get current time
    t = PathFB_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gridImage_9* updates
    if (t >= 0.0 && gridImage_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridImage_9.tStart = t;  // (not accounting for frame time here)
      gridImage_9.frameNStart = frameN;  // exact frame index
      
      gridImage_9.setAutoDraw(true);
    }

    
    // *alienImageFB_3* updates
    if (t >= 0.0 && alienImageFB_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alienImageFB_3.tStart = t;  // (not accounting for frame time here)
      alienImageFB_3.frameNStart = frameN;  // exact frame index
      
      alienImageFB_3.setAutoDraw(true);
    }

    
    // *startPosFB_3* updates
    if (t >= 0.0 && startPosFB_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPosFB_3.tStart = t;  // (not accounting for frame time here)
      startPosFB_3.frameNStart = frameN;  // exact frame index
      
      startPosFB_3.setAutoDraw(true);
    }

    
    // *keyFB_3* updates
    if (t >= 0.0 && keyFB_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyFB_3.tStart = t;  // (not accounting for frame time here)
      keyFB_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyFB_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyFB_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyFB_3.clearEvents(); });
    }

    if (keyFB_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyFB_3.getKeys({keyList: ['return'], waitRelease: false});
      _keyFB_3_allKeys = _keyFB_3_allKeys.concat(theseKeys);
      if (_keyFB_3_allKeys.length > 0) {
        keyFB_3.keys = _keyFB_3_allKeys[_keyFB_3_allKeys.length - 1].name;  // just the last key pressed
        keyFB_3.rt = _keyFB_3_allKeys[_keyFB_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *pathLine_ydir_2* updates
    if (t >= 0.0 && pathLine_ydir_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pathLine_ydir_2.tStart = t;  // (not accounting for frame time here)
      pathLine_ydir_2.frameNStart = frameN;  // exact frame index
      
      pathLine_ydir_2.setAutoDraw(true);
    }

    
    if (pathLine_ydir_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pathLine_ydir_2.setFillColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_ydir_2.setPos([x_pathdirY, y_pathdirY], false);
      pathLine_ydir_2.setSize(y_pathSize, false);
      pathLine_ydir_2.setLineColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_ydir_2.setLineWidth(8.0, false);
    }
    
    // *pathLine_xdir_2* updates
    if (t >= 0.0 && pathLine_xdir_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pathLine_xdir_2.tStart = t;  // (not accounting for frame time here)
      pathLine_xdir_2.frameNStart = frameN;  // exact frame index
      
      pathLine_xdir_2.setAutoDraw(true);
    }

    
    if (pathLine_xdir_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pathLine_xdir_2.setFillColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_xdir_2.setPos([x_pathdirX, y_pathdirX], false);
      pathLine_xdir_2.setSize(x_pathSize, false);
      pathLine_xdir_2.setLineColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_xdir_2.setLineWidth(8.0, false);
    }
    
    // *alienFace_3* updates
    if (t >= 0.0 && alienFace_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alienFace_3.tStart = t;  // (not accounting for frame time here)
      alienFace_3.frameNStart = frameN;  // exact frame index
      
      alienFace_3.setAutoDraw(true);
    }

    
    if (alienFace_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      alienFace_3.setPos([x_corrPos, y_corrPos], false);
    }
    // start/stop sounds_2
    if (t >= 0.0 && sounds_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sounds_2.tStart = t;  // (not accounting for frame time here)
      sounds_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sounds_2.play(); });  // screen flip
      sounds_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sounds_2.getDuration() + sounds_2.tStart)     && sounds_2.status === PsychoJS.Status.STARTED) {
      sounds_2.stop();  // stop the sound (if longer than duration)
      sounds_2.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PathFB_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PathFB_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PathFB_instr' ---
    PathFB_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from pathFB_2
    if ((getRow < (nrtrain - 1))) {
        getRow = (getRow + 1);
    } else {
        if ((getRow >= (nrtrain - 1))) {
            getRow = 0;
        }
    }
    strRow = getRow.toString();
    now = globalClock.getTime();
    RTFB_instr = (now - start);
    psychoJS.experiment.addData("RTFB_instr", RTFB_instr);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyFB_3.corr, level);
    }
    psychoJS.experiment.addData('keyFB_3.keys', keyFB_3.keys);
    if (typeof keyFB_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyFB_3.rt', keyFB_3.rt);
        routineTimer.reset();
        }
    
    keyFB_3.stop();
    sounds_2.stop();  // ensure sound has stopped at end of routine
    // the Routine "PathFB_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var setconfigComponents;
function setconfigRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setconfig' ---
    t = 0;
    setconfigClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from resetStuff
    alienStim = (("stimuli/alien_stimuli/" + alienID.toString()) + ".png");
    psychoJS.experiment.addData("draw_alienStim", alienStim);
    psychoJS.experiment.addData("draw_alienID", alienID);
    psychoJS.experiment.addData("test_x", x_fixStart);
    x_startPos = all_x[x_fixStart];
    y_startPos = all_y[y_fixStart];
    x_movePos = x_startPos;
    y_movePos = y_startPos;
    moveCol = startCol;
    x_corrPos = 99;
    y_corrPos = 99;
    corrColFB = whiteCol;
    choice = 0;
    corrAns = 99;
    keyFB_3.keys = [];
    
    // keep track of which components have finished
    setconfigComponents = [];
    
    setconfigComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setconfigRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setconfig' ---
    // get current time
    t = setconfigClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from resetStuff
    nrepcount = (nrepcount + 1);
    psychoJS.experiment.addData("nrepcount", nrepcount);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setconfigComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setconfigRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setconfig' ---
    setconfigComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "setconfig" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choice_now;
var counttime;
var _key_resp_allKeys;
var trainGridComponents;
function trainGridRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trainGrid' ---
    t = 0;
    trainGridClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from gridCode
    start = globalClock.getTime();
    choice_start = globalClock.getTime();
    choice_now = 0;
    counttime = 0;
    moveDur = 9999;
    alienStim = (("stimuli/alien_stimuli/" + alienID.toString()) + ".png");
    
    startPos.setPos([x_startPos, y_startPos]);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    alienImage.setImage(alienStim);
    // keep track of which components have finished
    trainGridComponents = [];
    trainGridComponents.push(gridImage_4);
    trainGridComponents.push(startPos);
    trainGridComponents.push(movePos);
    trainGridComponents.push(key_resp);
    trainGridComponents.push(alienImage);
    
    trainGridComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trainGridRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trainGrid' ---
    // get current time
    t = trainGridClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from gridCode
    if (key_resp.keys) {
        if ((key_resp.keys === "left")) {
            x_movePos = (x_movePos - step);
            moveCol = [1, 1, 1];
            x_dir -= 1;
        } else {
            if ((key_resp.keys === "right")) {
                x_movePos = (x_movePos + step);
                moveCol = [1, 1, 1];
                x_dir += 1;
            } else {
                if ((key_resp.keys === "up")) {
                    y_movePos = (y_movePos + step);
                    moveCol = [1, 1, 1];
                    y_dir += 1;
                } else {
                    if ((key_resp.keys === "down")) {
                        moveCol = [1, 1, 1];
                        y_movePos = (y_movePos - step);
                        y_dir -= 1;
                    } else {
                        if ((key_resp.keys === "return")) {
                            choice = 1;
                            moveCol = [(- 1), (- 1), (- 1)];
                            psychoJS.experiment.addData("wLy_dir", y_dir);
                            psychoJS.experiment.addData("wLx_dir", x_dir);
                            choice_now = globalClock.getTime();
                            psychoJS.experiment.addData("x_movePos", x_movePos);
                            psychoJS.experiment.addData("y_movePos", y_movePos);
                        }
                    }
                }
            }
        }
        if ((prevlenkey === curlenkey)) {
            continueRoutine = false;
            curlenkey = 0;
            prevlenkey = 0;
        }
        choice_now = globalClock.getTime();
        RTchoice_train = (choice_now - start);
        Choicebutton = key_resp.keys;
        psychoJS.experiment.addData("buttonPress_train", Choicebutton);
        psychoJS.experiment.addData("RTchoice_train", RTchoice_train);
    }
    
    
    // *gridImage_4* updates
    if (t >= 0.0 && gridImage_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridImage_4.tStart = t;  // (not accounting for frame time here)
      gridImage_4.frameNStart = frameN;  // exact frame index
      
      gridImage_4.setAutoDraw(true);
    }

    
    // *startPos* updates
    if (t >= 0.0 && startPos.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPos.tStart = t;  // (not accounting for frame time here)
      startPos.frameNStart = frameN;  // exact frame index
      
      startPos.setAutoDraw(true);
    }

    
    // *movePos* updates
    if (t >= 0.0 && movePos.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movePos.tStart = t;  // (not accounting for frame time here)
      movePos.frameNStart = frameN;  // exact frame index
      
      movePos.setAutoDraw(true);
    }

    
    if (movePos.status === PsychoJS.Status.STARTED){ // only update if being drawn
      movePos.setFillColor(new util.Color(moveCol), false);
      movePos.setPos([x_movePos, y_movePos], false);
      movePos.setLineColor(new util.Color(moveCol), false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['up', 'down', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
      }
    }
    
    
    // *alienImage* updates
    if (t >= 0.0 && alienImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alienImage.tStart = t;  // (not accounting for frame time here)
      alienImage.frameNStart = frameN;  // exact frame index
      
      alienImage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trainGridComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainGridRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trainGrid' ---
    trainGridComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from gridCode
    delta = 0.0001;
    if ((choice === 1)) {
        diff1 = Math.abs((all_x[x_corrSteps] - x_movePos));
        diff2 = Math.abs((all_y[y_corrSteps] - y_movePos));
        alldiff = (diff1 + diff2);
        if ((alldiff <= delta)) {
            corrAns = 1;
            saveAcc += 1;
            diff1 = 99;
            diff2 = 99;
            alldiff = 99;
            cumAcctrain = (cumAcctrain + corrAns);
        } else {
            if ((alldiff > delta)) {
                corrAns = 0;
                saveAcc += 0;
                diff1 = 99;
                diff2 = 99;
                alldiff = 99;
                cumAcctrain = (cumAcctrain + corrAns);
            }
        }
        moveLoop_train.finished = true;
        choice = 0;
    }
    psychoJS.experiment.addData("cumAcctrain", cumAcctrain);
    psychoJS.experiment.addData("saveACC_choice", saveACC);
    psychoJS.experiment.addData("corrAns", corrAns);
    psychoJS.experiment.addData("x_movePos_end", x_movePos);
    psychoJS.experiment.addData("y_movePos_end", y_movePos);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        }
    
    key_resp.stop();
    // the Routine "trainGrid" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var quickfixationComponents;
function quickfixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'quickfixation' ---
    t = 0;
    quickfixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    quickfixationComponents = [];
    quickfixationComponents.push(text_2);
    
    quickfixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function quickfixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'quickfixation' ---
    // get current time
    t = quickfixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    quickfixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quickfixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'quickfixation' ---
    quickfixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyFB_2_allKeys;
var PathFB_trainComponents;
function PathFB_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PathFB_train' ---
    t = 0;
    PathFB_trainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from pathFB
    msgColFB = blackCol;
    alienStim = (("stimuli/alien_stimuli/" + alienID.toString()) + ".png");
    start = globalClock.getTime();
    psychoJS.experiment.addData("corrAns", corrAns);
    if ((corrAns === 1)) {
        pickAudio = "stimuli/instructions/Audio_corr.wav";
        msgColFB = greenCol;
        moveColFB = greenCol;
        corrColFB = greenCol;
        x_corrPos = all_x[x_corrSteps];
        y_corrPos = all_y[y_corrSteps];
    } else {
        if ((corrAns === 0)) {
            pickAudio = "stimuli/instructions/Audio_fals.wav";
            msgColFB = redCol;
            moveColFB = redCol;
            corrColFB = redCol;
            x_corrPos = all_x[x_corrSteps];
            y_corrPos = all_y[y_corrSteps];
        }
    }
    psychoJS.experiment.addData("aft_x_corrPos", x_corrPos);
    psychoJS.experiment.addData("aft_y_corrPos", y_corrPos);
    x_corrPos = all_x[x_corrSteps];
    y_corrPos = all_y[y_corrSteps];
    if ((x_corrSteps >= x_fixStart)) {
        x_pathdirX = ((x_corrPos + x_startPos) / 2);
        y_pathdirX = y_startPos;
        x_pathSize = (Math.abs((x_fixStart - x_corrSteps)) * step);
    } else {
        if ((x_corrSteps < x_fixStart)) {
            x_pathdirX = ((x_corrPos + x_startPos) / 2);
            y_pathdirX = y_startPos;
            x_pathSize = (Math.abs((x_fixStart - x_corrSteps)) * step);
        }
    }
    if ((y_corrSteps >= y_fixStart)) {
        y_pathdirY = ((y_corrPos + y_startPos) / 2);
        x_pathdirY = x_corrPos;
        y_pathSize = (Math.abs((y_fixStart - y_corrSteps)) * step);
    } else {
        if ((y_corrSteps < y_fixStart)) {
            y_pathdirY = ((y_corrPos + y_startPos) / 2);
            x_pathdirY = x_corrPos;
            y_pathSize = (Math.abs((y_fixStart - y_corrSteps)) * step);
        }
    }
    psychoJS.experiment.addData("y_pathSize_check", y_pathSize);
    psychoJS.experiment.addData("x_pathSize_check", x_pathSize);
    psychoJS.experiment.addData("y_pathdirY", y_pathdirY);
    psychoJS.experiment.addData("x_pathdirY", x_pathdirY);
    psychoJS.experiment.addData("x_pathdirY", x_pathdirY);
    psychoJS.experiment.addData("x_pathdirX", x_pathdirX);
    psychoJS.experiment.addData("x_corrPos", x_corrPos);
    psychoJS.experiment.addData("y_corrPos", y_corrPos);
    
    alienImageFB_2.setImage(alienStim);
    startPosFB_2.setPos([x_startPos, y_startPos]);
    keyFB_2.keys = undefined;
    keyFB_2.rt = undefined;
    _keyFB_2_allKeys = [];
    pathLine_xdir.setSize(x_pathSize);
    alienFace.setImage(alienStim);
    sounds_4 = new sound.Sound({
    win: psychoJS.window,
    value: pickAudio,
    secs: -1,
    });
    sounds_4.setVolume(1.0);
    // keep track of which components have finished
    PathFB_trainComponents = [];
    PathFB_trainComponents.push(gridImage_6);
    PathFB_trainComponents.push(alienImageFB_2);
    PathFB_trainComponents.push(startPosFB_2);
    PathFB_trainComponents.push(movePosFB_2);
    PathFB_trainComponents.push(keyFB_2);
    PathFB_trainComponents.push(pathLine_xdir);
    PathFB_trainComponents.push(pathLine_ydir);
    PathFB_trainComponents.push(alienFace);
    PathFB_trainComponents.push(sounds_4);
    
    PathFB_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PathFB_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PathFB_train' ---
    // get current time
    t = PathFB_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gridImage_6* updates
    if (t >= 0.0 && gridImage_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridImage_6.tStart = t;  // (not accounting for frame time here)
      gridImage_6.frameNStart = frameN;  // exact frame index
      
      gridImage_6.setAutoDraw(true);
    }

    
    // *alienImageFB_2* updates
    if (t >= 0.0 && alienImageFB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alienImageFB_2.tStart = t;  // (not accounting for frame time here)
      alienImageFB_2.frameNStart = frameN;  // exact frame index
      
      alienImageFB_2.setAutoDraw(true);
    }

    
    // *startPosFB_2* updates
    if (t >= 0.0 && startPosFB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPosFB_2.tStart = t;  // (not accounting for frame time here)
      startPosFB_2.frameNStart = frameN;  // exact frame index
      
      startPosFB_2.setAutoDraw(true);
    }

    
    // *movePosFB_2* updates
    if (t >= 0.0 && movePosFB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movePosFB_2.tStart = t;  // (not accounting for frame time here)
      movePosFB_2.frameNStart = frameN;  // exact frame index
      
      movePosFB_2.setAutoDraw(true);
    }

    
    if (movePosFB_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      movePosFB_2.setFillColor(new util.Color(moveColFB), false);
      movePosFB_2.setPos([x_movePos, y_movePos], false);
      movePosFB_2.setLineColor(new util.Color(moveColFB), false);
    }
    
    // *keyFB_2* updates
    if (t >= 0.0 && keyFB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyFB_2.tStart = t;  // (not accounting for frame time here)
      keyFB_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyFB_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyFB_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyFB_2.clearEvents(); });
    }

    if (keyFB_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyFB_2.getKeys({keyList: ['return'], waitRelease: false});
      _keyFB_2_allKeys = _keyFB_2_allKeys.concat(theseKeys);
      if (_keyFB_2_allKeys.length > 0) {
        keyFB_2.keys = _keyFB_2_allKeys[_keyFB_2_allKeys.length - 1].name;  // just the last key pressed
        keyFB_2.rt = _keyFB_2_allKeys[_keyFB_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *pathLine_xdir* updates
    if (t >= 0.0 && pathLine_xdir.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pathLine_xdir.tStart = t;  // (not accounting for frame time here)
      pathLine_xdir.frameNStart = frameN;  // exact frame index
      
      pathLine_xdir.setAutoDraw(true);
    }

    
    if (pathLine_xdir.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pathLine_xdir.setFillColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_xdir.setPos([x_pathdirX, y_pathdirX], false);
      pathLine_xdir.setLineColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_xdir.setLineWidth(pathLW, false);
    }
    
    // *pathLine_ydir* updates
    if (t >= 0.0 && pathLine_ydir.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pathLine_ydir.tStart = t;  // (not accounting for frame time here)
      pathLine_ydir.frameNStart = frameN;  // exact frame index
      
      pathLine_ydir.setAutoDraw(true);
    }

    
    if (pathLine_ydir.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pathLine_ydir.setFillColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_ydir.setPos([x_pathdirY, y_pathdirY], false);
      pathLine_ydir.setSize(y_pathSize, false);
      pathLine_ydir.setLineColor(new util.Color([1.0, 0.6863, (- 1.0)]), false);
      pathLine_ydir.setLineWidth(pathLW, false);
    }
    
    // *alienFace* updates
    if (t >= 0.0 && alienFace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alienFace.tStart = t;  // (not accounting for frame time here)
      alienFace.frameNStart = frameN;  // exact frame index
      
      alienFace.setAutoDraw(true);
    }

    
    if (alienFace.status === PsychoJS.Status.STARTED){ // only update if being drawn
      alienFace.setPos([x_corrPos, y_corrPos], false);
    }
    // start/stop sounds_4
    if (t >= 0.0 && sounds_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sounds_4.tStart = t;  // (not accounting for frame time here)
      sounds_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sounds_4.play(); });  // screen flip
      sounds_4.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sounds_4.getDuration() + sounds_4.tStart)     && sounds_4.status === PsychoJS.Status.STARTED) {
      sounds_4.stop();  // stop the sound (if longer than duration)
      sounds_4.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PathFB_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var FBstart;
function PathFB_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PathFB_train' ---
    PathFB_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from pathFB
    FBstart = globalClock.getTime();
    RT_FBtrain = (FBstart - start);
    psychoJS.experiment.addData("RT_FBtrain", RT_FBtrain);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyFB_2.corr, level);
    }
    psychoJS.experiment.addData('keyFB_2.keys', keyFB_2.keys);
    if (typeof keyFB_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyFB_2.rt', keyFB_2.rt);
        routineTimer.reset();
        }
    
    keyFB_2.stop();
    sounds_4.stop();  // ensure sound has stopped at end of routine
    // the Routine "PathFB_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var checkPerfComponents;
function checkPerfRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'checkPerf' ---
    t = 0;
    checkPerfClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    if ((nrepcount > (praclen - 1))) {
        psychoJS.experiment.addData("saveACC_pre", saveACC);
        saveACC = 25;
        psychoJS.experiment.addData("within_saveACC_train", saveACC);
        if ((cumAcctrain >= perfthres)) {
            nextPrac = 1;
        } else {
            if ((cumAcctrain < perfthres)) {
                nextPrac = 0;
            }
        }
        if ((fileidx < 3)) {
            earlystop += 1;
            psychoJS.experiment.addData("earlystop_wloop", earlystop);
        }
        cumAcctrain = 0;
    }
    psychoJS.experiment.addData("cumAcctrain_check", cumAcctrain);
    psychoJS.experiment.addData("perfthres", perfthres);
    psychoJS.experiment.addData("percthres", percthres);
    psychoJS.experiment.addData("earlystop", earlystop);
    psychoJS.experiment.addData("nextPrac", nextPrac);
    psychoJS.experiment.addData("fileidx", fileidx);
    psychoJS.experiment.addData("praclen", praclen);
    psychoJS.experiment.addData("saveACC_train", saveACC);
    
    // keep track of which components have finished
    checkPerfComponents = [];
    
    checkPerfComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function checkPerfRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'checkPerf' ---
    // get current time
    t = checkPerfClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    checkPerfComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var nrepPause;
function checkPerfRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'checkPerf' ---
    checkPerfComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_4
    if ((nextPrac === 1)) {
        repeat_prac.finished = true;
        saveACC = 0;
        nextPrac = 99;
        nrepcount = 0;
        fileidx = (fileidx + 1);
    } else {
        if ((nextPrac === 0)) {
            saveACC = 0;
            nextPrac = 99;
            nrepcount = 0;
        }
    }
    if ((fileidx < 4)) {
        pracFile = (("conditions/inputTrain_" + fileidx.toString()) + ".xlsx");
        instrFile = (("conditions/inputInstr_" + fileidx.toString()) + ".xlsx");
    }
    psychoJS.experiment.addData("pracFile", pracFile);
    psychoJS.experiment.addData("nextPrac_train", nextPrac);
    psychoJS.experiment.addData("addNrep", addNrep);
    psychoJS.experiment.addData("fileidx_endr", fileidx);
    if ((earlystop >= maxPracRep)) {
        showearly = 1;
        continueRoutine = false;
        maxRep = 0;
        trainRep = 0;
        beforeRep = 0;
        instrSkipRep = 0;
        instrep = 0;
        nrepExp = 0;
        repChoice = 0;
        nrepPause = 0;
        beforeExpLoop.finished = true;
        repeat_prac.finished = true;
        trainLoop.finished = true;
        moveLoop_train.finished = true;
        instrLoop.finished = true;
        mini_instr_trials.finished = true;
    }
    psychoJS.experiment.addData("repExp", repExp);
    psychoJS.experiment.addData("showearly", showearly);
    
    // the Routine "checkPerf" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_test_allKeys;
var testGridComponents;
function testGridRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'testGrid' ---
    t = 0;
    testGridClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from gridCode_test
    start = globalClock.getTime();
    choice_now = 0;
    counttime = 0;
    moveDur = 9999;
    alienStim = (("stimuli/alien_stimuli/" + alienID.toString()) + ".png");
    
    alienImage_test.setImage(alienStim);
    startPos_test.setPos([x_startPos, y_startPos]);
    key_resp_test.keys = undefined;
    key_resp_test.rt = undefined;
    _key_resp_test_allKeys = [];
    // keep track of which components have finished
    testGridComponents = [];
    testGridComponents.push(gridImage_3);
    testGridComponents.push(alienImage_test);
    testGridComponents.push(startPos_test);
    testGridComponents.push(movePos_test);
    testGridComponents.push(key_resp_test);
    
    testGridComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testGridRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'testGrid' ---
    // get current time
    t = testGridClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from gridCode_test
    if (key_resp_test.keys) {
        if ((key_resp_test.keys === "left")) {
            x_movePos = (x_movePos - step);
            moveCol = [1, 1, 1];
            x_dir -= 1;
        } else {
            if ((key_resp_test.keys === "right")) {
                x_movePos = (x_movePos + step);
                moveCol = [1, 1, 1];
                x_dir += 1;
            } else {
                if ((key_resp_test.keys === "up")) {
                    y_movePos = (y_movePos + step);
                    moveCol = [1, 1, 1];
                    y_dir += 1;
                } else {
                    if ((key_resp_test.keys === "down")) {
                        moveCol = [1, 1, 1];
                        y_movePos = (y_movePos - step);
                        y_dir -= 1;
                    } else {
                        if ((key_resp_test.keys === "return")) {
                            choice = 1;
                            moveCol = [(- 1), (- 1), (- 1)];
                        }
                    }
                }
            }
        }
        if ((prevlenkey === curlenkey)) {
            continueRoutine = false;
            curlenkey = 0;
            prevlenkey = 0;
        }
        psychoJS.experiment.addData("wLy_dir_test", y_dir);
        psychoJS.experiment.addData("wLx_dir_test", x_dir);
        choice_now = globalClock.getTime();
        RTchoice_test = (choice_now - start);
        Choicebutton = key_resp_test.keys;
        psychoJS.experiment.addData("buttonPress_test", Choicebutton);
        psychoJS.experiment.addData("RTchoice_test", RTchoice_test);
    }
    
    
    // *gridImage_3* updates
    if (t >= 0.0 && gridImage_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridImage_3.tStart = t;  // (not accounting for frame time here)
      gridImage_3.frameNStart = frameN;  // exact frame index
      
      gridImage_3.setAutoDraw(true);
    }

    
    // *alienImage_test* updates
    if (t >= 0.0 && alienImage_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alienImage_test.tStart = t;  // (not accounting for frame time here)
      alienImage_test.frameNStart = frameN;  // exact frame index
      
      alienImage_test.setAutoDraw(true);
    }

    
    // *startPos_test* updates
    if (t >= 0.0 && startPos_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPos_test.tStart = t;  // (not accounting for frame time here)
      startPos_test.frameNStart = frameN;  // exact frame index
      
      startPos_test.setAutoDraw(true);
    }

    
    // *movePos_test* updates
    if (t >= 0.0 && movePos_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movePos_test.tStart = t;  // (not accounting for frame time here)
      movePos_test.frameNStart = frameN;  // exact frame index
      
      movePos_test.setAutoDraw(true);
    }

    
    if (movePos_test.status === PsychoJS.Status.STARTED){ // only update if being drawn
      movePos_test.setFillColor(new util.Color(moveCol), false);
      movePos_test.setPos([x_movePos, y_movePos], false);
      movePos_test.setLineColor(new util.Color(moveCol), false);
    }
    
    // *key_resp_test* updates
    if (t >= 0.0 && key_resp_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_test.tStart = t;  // (not accounting for frame time here)
      key_resp_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_test.clearEvents(); });
    }

    if (key_resp_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_test.getKeys({keyList: ['up', 'down', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_test_allKeys = _key_resp_test_allKeys.concat(theseKeys);
      if (_key_resp_test_allKeys.length > 0) {
        key_resp_test.keys = _key_resp_test_allKeys[_key_resp_test_allKeys.length - 1].name;  // just the last key pressed
        key_resp_test.rt = _key_resp_test_allKeys[_key_resp_test_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testGridComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testGridRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'testGrid' ---
    testGridComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from gridCode_test
    if ((choice === 1)) {
        if (((Math.round(all_x[x_corrSteps], 3) === Math.round(x_movePos, 3)) && (Math.round(all_y[y_corrSteps], 3) === Math.round(y_movePos, 3)))) {
            corrAns = 1;
            saveAcc += 1;
            cumAcctest = (cumAcctest + corrAns);
        } else {
            corrAns = 0;
            saveAcc += 0;
            cumAcctest = (cumAcctest + corrAns);
        }
        moveLoop_test.finished = true;
        choice = 0;
    }
    psychoJS.experiment.addData("cumAcctest", cumAcctest);
    psychoJS.experiment.addData("saveACC_choice", saveACC);
    psychoJS.experiment.addData("corrAns_test", corrAns);
    psychoJS.experiment.addData("x_movePos_end", x_movePos);
    psychoJS.experiment.addData("y_movePos_end", y_movePos);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_test.corr, level);
    }
    psychoJS.experiment.addData('key_resp_test.keys', key_resp_test.keys);
    if (typeof key_resp_test.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_test.rt', key_resp_test.rt);
        }
    
    key_resp_test.stop();
    // the Routine "testGrid" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix_time;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    fix_time = util.randint(1, 2);
    
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation_text);
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_text* updates
    if (t >= 0.0 && fixation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_text.tStart = t;  // (not accounting for frame time here)
      fixation_text.frameNStart = frameN;  // exact frame index
      
      fixation_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + fix_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var earlyStopComponents;
function earlyStopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'earlyStop' ---
    t = 0;
    earlyStopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    if ((showearly === 0)) {
        continueRoutine = false;
    } else {
        if ((showearly === 1)) {
            endearly = "stimuli/instructions/Audio_earlystop.wav";
            endstatus = "experiment_finished_early";
            psychoJS.experiment.addData("endstatus", endstatus);
            psychoJS.experiment.addData("url_stopearly", urlredirect);
        }
    }
    
    slide_stop.setImage('stimuli/instructions/Slide31.png');
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    sound_stop = new sound.Sound({
    win: psychoJS.window,
    value: endearly,
    secs: 1.0,
    });
    sound_stop.secs=1.0;
    sound_stop.setVolume(1.0);
    // keep track of which components have finished
    earlyStopComponents = [];
    earlyStopComponents.push(slide_stop);
    earlyStopComponents.push(key_resp_3);
    earlyStopComponents.push(sound_stop);
    
    earlyStopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function earlyStopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'earlyStop' ---
    // get current time
    t = earlyStopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slide_stop* updates
    if (t >= 0.0 && slide_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slide_stop.tStart = t;  // (not accounting for frame time here)
      slide_stop.frameNStart = frameN;  // exact frame index
      
      slide_stop.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_stop
    if (t >= 0.0 && sound_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_stop.tStart = t;  // (not accounting for frame time here)
      sound_stop.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_stop.play(); });  // screen flip
      sound_stop.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_stop.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_stop.stop();  // stop the sound (if longer than duration)
      }
      sound_stop.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    earlyStopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function earlyStopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'earlyStop' ---
    earlyStopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_5
    end_all_time = globalClock.getTime();
    total_time = (end_all_time - start_all_time);
    psychoJS.experiment.addData("total_time", total_time);
    psychoJS.experiment.addData("end_all_time", "end_all_time");
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    sound_stop.stop();  // ensure sound has stopped at end of routine
    // the Routine "earlyStop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_2Components;
function instr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_2' ---
    t = 0;
    instr_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_12
    if ((showearly === 1)) {
        continueRoutine = false;
    }
    slideStim2 = (("stimuli/instructions/Slide" + startidx.toString()) + ".png");
    psychoJS.experiment.addData("slideStim", slideStim);
    audioStim3 = (("stimuli/instructions/Audio" + startidx.toString()) + ".wav");
    psychoJS.experiment.addData("audioStim", audioStim);
    
    slides_2.setImage(slideStim2);
    sounds_3 = new sound.Sound({
    win: psychoJS.window,
    value: audioStim3,
    secs: -1,
    });
    sounds_3.setVolume(1.0);
    // keep track of which components have finished
    instr_2Components = [];
    instr_2Components.push(slides_2);
    instr_2Components.push(nextButton_2);
    instr_2Components.push(nextBox_2);
    instr_2Components.push(nextText_2);
    instr_2Components.push(prev_but_2);
    instr_2Components.push(prev_box_2);
    instr_2Components.push(prev_text_2);
    instr_2Components.push(sounds_3);
    
    instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_2' ---
    // get current time
    t = instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slides_2* updates
    if (t >= 0.0 && slides_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slides_2.tStart = t;  // (not accounting for frame time here)
      slides_2.frameNStart = frameN;  // exact frame index
      
      slides_2.setAutoDraw(true);
    }

    
    // *nextButton_2* updates
    if (t >= 0 && nextButton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_2.tStart = t;  // (not accounting for frame time here)
      nextButton_2.frameNStart = frameN;  // exact frame index
      
      nextButton_2.setAutoDraw(true);
    }

    if (nextButton_2.status === PsychoJS.Status.STARTED) {
      // check whether nextButton_2 has been pressed
      if (nextButton_2.isClicked) {
        if (!nextButton_2.wasClicked) {
          // store time of first click
          nextButton_2.timesOn.push(nextButton_2.clock.getTime());
          nextButton_2.numClicks += 1;
          // store time clicked until
          nextButton_2.timesOff.push(nextButton_2.clock.getTime());
        } else {
          // update time clicked until;
          nextButton_2.timesOff[nextButton_2.timesOff.length - 1] = nextButton_2.clock.getTime();
        }
        if (!nextButton_2.wasClicked) {
          // end routine when nextButton_2 is clicked
          continueRoutine = false;
          startidx2 += 1;
          button_name = "next";
        }
        // if nextButton_2 is still clicked next frame, it is not a new click
        nextButton_2.wasClicked = true;
      } else {
        // if nextButton_2 is clicked next frame, it is a new click
        nextButton_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nextButton_2 hasn't started / has finished
      nextButton_2.clock.reset();
      // if nextButton_2 is clicked next frame, it is a new click
      nextButton_2.wasClicked = false;
    }
    
    // *nextBox_2* updates
    if (t >= 0.0 && nextBox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextBox_2.tStart = t;  // (not accounting for frame time here)
      nextBox_2.frameNStart = frameN;  // exact frame index
      
      nextBox_2.setAutoDraw(true);
    }

    
    // *nextText_2* updates
    if (t >= 0.0 && nextText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextText_2.tStart = t;  // (not accounting for frame time here)
      nextText_2.frameNStart = frameN;  // exact frame index
      
      nextText_2.setAutoDraw(true);
    }

    
    // *prev_but_2* updates
    if (t >= 0 && prev_but_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prev_but_2.tStart = t;  // (not accounting for frame time here)
      prev_but_2.frameNStart = frameN;  // exact frame index
      
      prev_but_2.setAutoDraw(true);
    }

    if (prev_but_2.status === PsychoJS.Status.STARTED) {
      // check whether prev_but_2 has been pressed
      if (prev_but_2.isClicked) {
        if (!prev_but_2.wasClicked) {
          // store time of first click
          prev_but_2.timesOn.push(prev_but_2.clock.getTime());
          prev_but_2.numClicks += 1;
          // store time clicked until
          prev_but_2.timesOff.push(prev_but_2.clock.getTime());
        } else {
          // update time clicked until;
          prev_but_2.timesOff[prev_but_2.timesOff.length - 1] = prev_but_2.clock.getTime();
        }
        if (!prev_but_2.wasClicked) {
          // end routine when prev_but_2 is clicked
          continueRoutine = false;
          if ((startidx2 > 1)) {
              startidx2 -= 1;
          }
          button_name = "previous";
        }
        // if prev_but_2 is still clicked next frame, it is not a new click
        prev_but_2.wasClicked = true;
      } else {
        // if prev_but_2 is clicked next frame, it is a new click
        prev_but_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if prev_but_2 hasn't started / has finished
      prev_but_2.clock.reset();
      // if prev_but_2 is clicked next frame, it is a new click
      prev_but_2.wasClicked = false;
    }
    
    // *prev_box_2* updates
    if (t >= 0.0 && prev_box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prev_box_2.tStart = t;  // (not accounting for frame time here)
      prev_box_2.frameNStart = frameN;  // exact frame index
      
      prev_box_2.setAutoDraw(true);
    }

    
    // *prev_text_2* updates
    if (t >= 0.0 && prev_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prev_text_2.tStart = t;  // (not accounting for frame time here)
      prev_text_2.frameNStart = frameN;  // exact frame index
      
      prev_text_2.setAutoDraw(true);
    }

    // start/stop sounds_3
    if (t >= 0.0 && sounds_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sounds_3.tStart = t;  // (not accounting for frame time here)
      sounds_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sounds_3.play(); });  // screen flip
      sounds_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sounds_3.getDuration() + sounds_3.tStart)     && sounds_3.status === PsychoJS.Status.STARTED) {
      sounds_3.stop();  // stop the sound (if longer than duration)
      sounds_3.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2' ---
    instr_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_12
    if ((startidx2 > maxSlide2)) {
        mini_instr2_trials.finished = true;
        loopidx2 += 1;
    }
    
    psychoJS.experiment.addData('nextButton_2.numClicks', nextButton_2.numClicks);
    psychoJS.experiment.addData('nextButton_2.timesOn', nextButton_2.timesOn);
    psychoJS.experiment.addData('nextButton_2.timesOff', nextButton_2.timesOff);
    psychoJS.experiment.addData('prev_but_2.numClicks', prev_but_2.numClicks);
    psychoJS.experiment.addData('prev_but_2.timesOn', prev_but_2.timesOn);
    psychoJS.experiment.addData('prev_but_2.timesOff', prev_but_2.timesOff);
    sounds_3.stop();  // ensure sound has stopped at end of routine
    // the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endExpComponents;
function endExpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endExp' ---
    t = 0;
    endExpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from bye_code
    if ((showearly === 1)) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    endExpComponents = [];
    endExpComponents.push(bye);
    
    endExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endExpRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endExp' ---
    // get current time
    t = endExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bye* updates
    if (t >= 0.0 && bye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bye.tStart = t;  // (not accounting for frame time here)
      bye.frameNStart = frameN;  // exact frame index
      
      bye.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bye.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endExpRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endExp' ---
    endExpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from bye_code
    end_all_time = globalClock.getTime();
    total_time = (end_all_time - start_all_time);
    psychoJS.experiment.addData("total_time", total_time);
    psychoJS.experiment.addData("end_all_time", "end_all_time");
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
