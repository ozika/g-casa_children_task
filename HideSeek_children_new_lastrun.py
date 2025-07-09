#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on July 09, 2025, at 17:27
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2022.2.5')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
prefs.hardware['audioLib'] = 'pygame'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'HideSeek_v1'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
    'train_first': '',
    '00_coordinate': '',
    'starting corner': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s_%s_%s' % (expInfo['participant'], expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'], expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\exp-gcasa-study\\Desktop\\g-casa_children_task\\HideSeek_children_new_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1200], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0.5843, 0.5843, 0.5843], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = True
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, experiment_code='HideSeek_v1', session_code=ioSession, datastore_name=filename, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "setEnv" ---
# Run 'Begin Experiment' code from initateExp
# variables that can terminate the whole experiment if performance threshold is not reached
# as shown here, they will not terminate the experiment
repExp    = 1
showearly = 0
earlystop  = 0
counter = 1
import pandas as pd
#instructions
inputidx = 1
fileidx = 1
trainidx = 1
instrFile_path = 'conditions/schedules/%s_first/%s_00/%s/inputInstr_1.xlsx' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
instrFile = pd.read_excel(instrFile_path)

pracFile_path = 'conditions/schedules/%s_first/%s_00/%s/inputTrain_1.1.xlsx' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
pracFile   = pd.read_excel(pracFile_path)

# main experiment
condition_path = 'conditions/schedules/%s_first/%s_00/%s/inputTest.xlsx' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
conditions = pd.read_excel(condition_path)

nrepExp = 1

# number of choices that can be made
# should basically be unlimited
repChoice = 999

# nr of repetition within each practice round
# this is the number of reps for practice round
maxRep      = 7 #earlier 3 -> now 5x6 = 24 new trials max
maxPracRep = maxRep
praclen    = 30 #this will change , just need to initialise it
cumAcctrain = 0



## some design features:
txtBoxSize  = (0.38, 0.3)
txtBoxCoord = (-0.5,-0.2)

msgSize  = 0.045
msgCoord = (-0.5,-0.2)

alienCoord = (-0.5, 0.2)
alienSize  = (0.25, 0.3) #(0.3, 0.3)

# _________________________________________________
# grid information

gridCoord = (0.24, 0)
gridSize = (0.8,0.8)

dotSize = (0.08, 0.08)

# stepsize of the dot
x_recsize = 0.8
y_recsize = 0.8
step  = x_recsize/10 # stepsize mid-2-mid between fields

x_startPos = 0.3
y_startPos = 0.3

## some good-to-know things:
# x/y coordinate of lower right corner: (-0.16, -0.4)
# x/y coordinate of upper right corner: (0.56,0.32)
# always goes in steps of dotsize 0.08

# formula:
all_x = [-0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56 ]
all_y = [-0.4, -0.32, -0.24, -0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32]



start_all_time =[]

## Define which condition to test
#train_first = 'train_x'  # 'train_x' or 'train_y'
#step_sequence = 'x_decreasing_steps'  # 'x_decreasing_steps' or 'x_increasing_steps'
#start_point = 'bottom_left'  # 'bottom_left', 'bottom_right', 'top_left', or 'top_right'

# Construct the relative path starting from the 'conditions' folder

# Run 'Begin Experiment' code from redirect_web
urlredirect=0

# --- Initialize components for Routine "skipRoutine" ---
# Run 'Begin Experiment' code from checkSkip
# this is a crucial part for organising the experiment's components
# it determines which components will be skipped 
# you don't want to show the same order of components all the time, eg
# some trials should be instruction slide -> Grid -> instruction slide
# other trials should be instruction slide -> Grid -> practice -> slide

# the difference between the examples is that you skip practice trials in one of them, 
# we need to somehow flexibly integrate this such that we do not have to hard code
# every needed combination of components

# the vector has always be as long as the slide entries (check instr_1)

#### TRAINING
# 1: show it, 0: do not show it
showTrain        = [0,0,0,1,0,0,1,0,0,1,0]
#showTrain        = [0,0,0,0,0,0,0,0,0,0,0] 

#### GRID EXAMPLE
# 1: show it, 0: do not show it
showGexam       = [1,1,1,0,1,1,0,1,1,0,0] 
#showGexam       = [0,0,0,0,0,0,0,0,0,0,0] 

# --- Initialize components for Routine "instr_1" ---
# Run 'Begin Experiment' code from loadSlides
# initiate first slide
slideStim= 'conditions/schedules/%s_first/%s_00/%s/instructions/Slide1.png' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner']) #"stimuli/instructions/Slide1.png"
audioStim= 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio1.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner']) #"stimuli/instructions/Audio1.wav"

startidx = 1
loopidx  = 1

# random number such that loop does not end before it should
instrep  = 999


# this need to match the slides you want to show at each turn
endidx   = [12,14,16,20,21,22,25,26,27,32] # modify where to stop 

# last slide, then the loop terminates and the experiment starts
maxSlide = 32

# it is making as many turnovers as there are numbers in endidx -> this is baically how many times it goes back and forth between isntruction slides and the grid showing different examples
beforeRep = len(endidx)

slides = visual.ImageStim(
    win=win,
    name='slides', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(4/3,3/4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
nextButton = visual.ButtonStim(win, 
    text='next', font='Arvo',
    pos=(0.45, -0.45),
    letterHeight=0.02,
    size=(0.1, 0.02), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='nextButton'
)
nextButton.buttonClock = core.Clock()
nextBox = visual.Rect(
    win=win, name='nextBox',
    width=(0.15, 0.05)[0], height=(0.15, 0.05)[1],
    ori=0.0, pos=(0.45, -0.45), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
nextText = visual.TextStim(win=win, name='nextText',
    text='→',
    font='Open Sans',
    pos=(0.45, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
prev_but = visual.ButtonStim(win, 
    text='previous', font='Arvo',
    pos=(-0.45,-0.45),
    letterHeight=0.02,
    size=(0.1, 0.02), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='bottom-center',
    name='prev_but'
)
prev_but.buttonClock = core.Clock()
prev_box = visual.Rect(
    win=win, name='prev_box',
    width=(0.15, 0.05)[0], height=(0.15, 0.05)[1],
    ori=0.0, pos=(-0.45,-0.45), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
prev_text = visual.TextStim(win=win, name='prev_text',
    text='←',
    font='Open Sans',
    pos=(-0.45,-0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
sounds = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sounds')
sounds.setVolume(1.0)

# --- Initialize components for Routine "getSkip" ---
# Run 'Begin Experiment' code from code_3
instrSkipRep = 1
trainRep     = 1


# --- Initialize components for Routine "loadparams" ---
# Run 'Begin Experiment' code from code_6
alienStim = "stimuli/alien_stimuli/11.png"

# to select the right rows
#nrtrain = 2 # how many total examples for each dimension
getRow = 0
strRow = str(getRow)
trialLength = 2
trialInstr=1

# define variables for online use


x_startPos=0
y_startPos=0

x_movePos = 0
y_movePos = 0

alienCoord_x=0
alienCoord_y =0

nrtrain = 0

nrepcount = 0

alienCoord_x=2
alienCoord_y=2


# formula:
all_x = [-0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56 ]
all_y = [-0.4, -0.32, -0.24, -0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32]





# --- Initialize components for Routine "instrGrid" ---
# Run 'Begin Experiment' code from gridCode_instr
# _________________________________________________
# input, ie csv file:
#trainRep = len(trialTrain)
if fileidx < 4:
    instrFile = 'conditions/schedules/%s_first/%s_00/%s/inputInstr_%d.xlsx' % (
    expInfo['train_first'],
    expInfo['00_coordinate'],
    expInfo['starting corner'],
    fileidx
    )

# _________________________________________________
# input, ie csv file:
#trainRep = len(trialTrain)
iexp = 1

# _________________________________________________
# choices and accuracy
choice  = 99
corrAns = 99

# _________________________________________________
# initialise some positions
# size of dots on grid
#dotSize = (0.08, 0.08)
#step  = 0.08 # same as dotsize 

# stepsize of the dot
#x_recsize = 0.8
#y_recsize = 0.8    



# moving coordinates according to choice:
# temporary pos, off the screen
#x_startPos = 0.3
#y_startPos = 0.3


moveDur  = 9999

# _________________________________________________
# to compare number of steps in x/y direction with feedback

y_dir = 0
x_dir = 0

# _________________________________________________
# some variables to check stuff:
presskey   = 0
icount     = 1
curlenkey  = 0
prevlenkey = 0
choice     = 0


# _________________________________________________
# alien image:
alienStim = "stimuli/alien_stimuli/11.png"

# alien's text box:
Audio_intr = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_intr1.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
#messageInstr = "This is my" '\n' "starting position" '\n' "Press spacebar to" '\n' "see where I hide." 

# _________________________________________________
# colors:
whiteCol = (1,1,1)
blackCol = (-1,-1,-1)
greenCol = (-1,0.38,-0.37)
redCol   = (1 ,-1 ,-1)
yellCol  = (1, 0.68, -1)
purpleCol = (0.2549, -0.7490, 0.8824)
msgCol   = blackCol
#startCol = (-0.1216, -0.6235, 0.2549)  # purple
startCol = blackCol
moveCol  = startCol


gridImage_instr = visual.ImageStim(
    win=win,
    name='gridImage_instr', 
    image='stimuli/grid2.png', mask=None, anchor='center',
    ori=0.0, pos=gridCoord, size=gridSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
startPos_3 = visual.ShapeStim(
    win=win, name='startPos_3',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=startCol, fillColor=startCol,
    opacity=None, depth=-2.0, interpolate=True)
key_instr = keyboard.Keyboard()
alienImage_3 = visual.ImageStim(
    win=win,
    name='alienImage_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=alienCoord, size=alienSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
sounds_1 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sounds_1')
sounds_1.setVolume(1.0)

# --- Initialize components for Routine "PathFB_instr" ---
# Run 'Begin Experiment' code from pathFB_2
# new message:
intrAudio = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_intr2.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])

#messageFBinstr = "This is where I hide." '\n' "Let me show" '\n' "you my route."
#msgColFB   = blackCol

# coordinates into x-direction
x_pathdirX = 99
y_pathdirX = 99
x_pathSize = 99

# coordinates into y-direction
x_pathdirY = 99
y_pathdirY = 99
y_pathSize = 99

x_corrPos = 99
y_corrPos=99

pathLW = 8
faceSize = (0.08, 0.08)

start = []
now = []
RTFB_instr=[]

gridImage_9 = visual.ImageStim(
    win=win,
    name='gridImage_9', 
    image='stimuli/grid2.png', mask=None, anchor='center',
    ori=0.0, pos=gridCoord, size=gridSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
alienImageFB_3 = visual.ImageStim(
    win=win,
    name='alienImageFB_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=alienCoord, size=alienSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
startPosFB_3 = visual.ShapeStim(
    win=win, name='startPosFB_3',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=startCol, fillColor=startCol,
    opacity=None, depth=-3.0, interpolate=True)
keyFB_3 = keyboard.Keyboard()
pathLine_ydir_2 = visual.Line(
    win=win, name='pathLine_ydir_2',
    start=(-[1.0, 1.0][0]/2.0, 0), end=(+[1.0, 1.0][0]/2.0, 0),
    ori=90.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
pathLine_xdir_2 = visual.Line(
    win=win, name='pathLine_xdir_2',
    start=(-[1.0, 1.0][0]/2.0, 0), end=(+[1.0, 1.0][0]/2.0, 0),
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
alienFace_3 = visual.ImageStim(
    win=win,
    name='alienFace_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=faceSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
sounds_2 = sound.Sound(intrAudio, secs=-1, stereo=True, hamming=True,
    name='sounds_2')
sounds_2.setVolume(1.0)

# --- Initialize components for Routine "setconfig" ---
# Run 'Begin Experiment' code from resetStuff
nrepcount = 0


# --- Initialize components for Routine "loadparams" ---
# Run 'Begin Experiment' code from code_6
alienStim = "stimuli/alien_stimuli/11.png"

# to select the right rows
#nrtrain = 2 # how many total examples for each dimension
getRow = 0
strRow = str(getRow)
trialLength = 2
trialInstr=1

# define variables for online use


x_startPos=0
y_startPos=0

x_movePos = 0
y_movePos = 0

alienCoord_x=0
alienCoord_y =0

nrtrain = 0

nrepcount = 0

alienCoord_x=2
alienCoord_y=2


# formula:
all_x = [-0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56 ]
all_y = [-0.4, -0.32, -0.24, -0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32]





# --- Initialize components for Routine "trainGrid" ---
# Run 'Begin Experiment' code from gridCode
# _________________________________________________
# input, ie csv file:

#pracFile = 'conditions/schedules/%s_first/%s/%s/inputTrain_1.1.xlsx' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
if fileidx < 4:
    pracFile = 'conditions/schedules/%s_first/%s_00/%s/inputTrain_%d.%d.xlsx' % (
    expInfo['train_first'],
    expInfo['00_coordinate'],
    expInfo['starting corner'],
    fileidx,
    trainidx
    )

# _________________________________________________
# choices and accuracy
choice  = 99
corrAns = 0
saveAcc = 0
aCorr = 0
#cumAcctrain = 0 # this variable is used to compare performance to determine whether people move on or repeat practice round
# _________________________________________________
# allowed keys:
allowKeys = ('up','down','left','right','return')



# moving coordinates according to choice:
#x_startPos = 0.3
#y_startPos = 0.3

x_movePos = x_startPos
y_movePos = y_startPos
moveDur  = 9999

# _________________________________________________
# to compare number of steps in x/y direction with feedback

y_dir = 0
x_dir = 0

# _________________________________________________
# some variables to check stuff:
presskey   = 0
icount     = 1
curlenkey  = 0
prevlenkey = 0
choice     = 0
getPress     = []




# _________________________________________________
# alien image:
alienStim = "stimuli/alien_stimuli/11.png"

# alien's text box:
#message = "Where am" '\n' "I hiding?"

# _________________________________________________
# colors:
whiteCol = (1,1,1)
blackCol = (-1,-1,-1)
greenCol = (-1,0.38,-0.37)
redCol   = (1 ,-1 ,-1)
yellCol  = (1, 0.68, -1)
msgCol   = blackCol
#startCol = (-0.1216, -0.6235, 0.2549)  # purple
startCol = blackCol
moveCol  = startCol


diff1=[]
diff2=[]
delta=[]
alldiff=[]


Choicebutton=[]
RTchoice_train = []
gridImage_4 = visual.ImageStim(
    win=win,
    name='gridImage_4', 
    image='stimuli/grid2.png', mask=None, anchor='center',
    ori=0.0, pos=gridCoord, size=gridSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
startPos = visual.ShapeStim(
    win=win, name='startPos',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=startCol, fillColor=startCol,
    opacity=None, depth=-2.0, interpolate=True)
movePos = visual.ShapeStim(
    win=win, name='movePos',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
key_resp = keyboard.Keyboard()
alienImage = visual.ImageStim(
    win=win,
    name='alienImage', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=alienCoord, size=alienSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# --- Initialize components for Routine "quickfixation" ---
text_2 = visual.TextStim(win=win, name='text_2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "PathFB_train" ---
# Run 'Begin Experiment' code from pathFB
pickAudio = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_corr.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])

messageFB = "test"
msgColFB  = whiteCol
moveColFB = whiteCol
x_corrPos = 99
y_corrPos = 99
corrColFB = whiteCol


# coordinates into x-direction
x_pathdirX = 99
y_pathdirX= 99
x_pathSize = 99

# coordinates into y-direction
x_pathdirY = 99
y_pathdirY = 99
y_pathSize = 99

pathLW = 8
faceSize = (0.08, 0.08)

alienCoord_y=2
alienCoord_x=2


messageFB = "test"
msgColFB  = whiteCol
moveColFB = whiteCol
x_corrPos = 99
y_corrPos = 99
corrColFB = whiteCol
startCol = blackCol
faceSize = (0.08, 0.08)



RT_FBtrain=[]
gridImage_6 = visual.ImageStim(
    win=win,
    name='gridImage_6', 
    image='stimuli/grid2.png', mask=None, anchor='center',
    ori=0.0, pos=gridCoord, size=gridSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
alienImageFB_2 = visual.ImageStim(
    win=win,
    name='alienImageFB_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=alienCoord, size=alienSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
startPosFB_2 = visual.ShapeStim(
    win=win, name='startPosFB_2',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=startCol, fillColor=startCol,
    opacity=None, depth=-3.0, interpolate=True)
movePosFB_2 = visual.ShapeStim(
    win=win, name='movePosFB_2',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
keyFB_2 = keyboard.Keyboard()
pathLine_xdir = visual.Line(
    win=win, name='pathLine_xdir',
    start=(-[1.0, 1.0][0]/2.0, 0), end=(+[1.0, 1.0][0]/2.0, 0),
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
pathLine_ydir = visual.Line(
    win=win, name='pathLine_ydir',
    start=(-[1.0, 1.0][0]/2.0, 0), end=(+[1.0, 1.0][0]/2.0, 0),
    ori=90.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-7.0, interpolate=True)
alienFace = visual.ImageStim(
    win=win,
    name='alienFace', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=faceSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
sounds_4 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sounds_4')
sounds_4.setVolume(1.0)

# --- Initialize components for Routine "quickfixation" ---
text_2 = visual.TextStim(win=win, name='text_2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "setconfig" ---
# Run 'Begin Experiment' code from resetStuff
nrepcount = 0


# --- Initialize components for Routine "checkPerf" ---
# Run 'Begin Experiment' code from code_4
#pracFile   = 'conditions/schedules/%s_first/%s/%s/inputTrain_1.1.xlsx' % (expInfo['train_first'], expInfo['direction of x'], expInfo['starting corner'])

# variable to check performance threshold
saveACC   = 0 
fileidx   = 1
trainidx = 1
addNrep   = 1
nextPrac  = 99
earlierperf = 0

#  performance threshold: 70% -> trial number = 30
#  30 (praclen) * 0.7 = 21, round down = 17 -> need to have 21 correct to move forward
percthres = 0.7
perfthres = 21
# as a reminder, this is the variable to compare the current accuracy to the performance threshold: compareACC

# --- Initialize components for Routine "loadparams" ---
# Run 'Begin Experiment' code from code_6
alienStim = "stimuli/alien_stimuli/11.png"

# to select the right rows
#nrtrain = 2 # how many total examples for each dimension
getRow = 0
strRow = str(getRow)
trialLength = 2
trialInstr=1

# define variables for online use


x_startPos=0
y_startPos=0

x_movePos = 0
y_movePos = 0

alienCoord_x=0
alienCoord_y =0

nrtrain = 0

nrepcount = 0

alienCoord_x=2
alienCoord_y=2


# formula:
all_x = [-0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56 ]
all_y = [-0.4, -0.32, -0.24, -0.16, -0.08, 0, 0.08, 0.16, 0.24, 0.32]





# --- Initialize components for Routine "testGrid" ---
# Run 'Begin Experiment' code from gridCode_test
# _________________________________________________
# input, ie csv file:
#trainRep = len(trialTrain)
iexp = 1

# _________________________________________________
# choices and accuracy
choice  = 99
corrAns = 99
cumAcctest = 0
# _________________________________________________
# initialise some positions
# size of dots on grid
#dotSize = (0.08, 0.08)
#step  = 0.08 # same as dotsize 
#gridSize = (0.8,0.8)

# stepsize of the dot
#x_recsize = 0.8
#y_recsize = 0.8    



# moving coordinates according to choice:
#x_startPos = 0.3
#y_startPos = 0.3

moveDur  = 9999

# _________________________________________________
# to compare number of steps in x/y direction with feedback

y_dir = 0
x_dir = 0

# _________________________________________________
# some variables to check stuff:
presskey   = 0
icount     = 1
curlenkey  = 0
prevlenkey = 0
choice     = 0


# _________________________________________________
# alien image:
alienStim = "stimuli/alien_stimuli/11.png"

# alien's text box:
#message = "Where am" '\n' "I hiding?"

# _________________________________________________
# colors:
whiteCol = (1,1,1)
blackCol = (-1,-1,-1)
greenCol = (-1,0.38,-0.37)
redCol   = (1 ,-1 ,-1)
msgCol   = blackCol
#startCol = (-0.1216, -0.6235, 0.2549)  # purple
startCol = blackCol
moveCol  = startCol





choice_test=[]
RTchoice_test = []

gridImage_3 = visual.ImageStim(
    win=win,
    name='gridImage_3', 
    image='stimuli/grid2.png', mask=None, anchor='center',
    ori=0.0, pos=gridCoord, size=gridSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
alienImage_test = visual.ImageStim(
    win=win,
    name='alienImage_test', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=alienCoord, size=alienSize,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
startPos_test = visual.ShapeStim(
    win=win, name='startPos_test',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=startCol, fillColor=startCol,
    opacity=None, depth=-3.0, interpolate=True)
movePos_test = visual.ShapeStim(
    win=win, name='movePos_test',
    size=dotSize, vertices='circle',
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
key_resp_test = keyboard.Keyboard()

# --- Initialize components for Routine "fixation_2" ---
text_3 = visual.TextStim(win=win, name='text_3',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "setconfig" ---
# Run 'Begin Experiment' code from resetStuff
nrepcount = 0


# --- Initialize components for Routine "earlyStop" ---
# Run 'Begin Experiment' code from code_5
endstatus = " "
endearly = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_earlystop.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
slide_stop = visual.ImageStim(
    win=win,
    name='slide_stop', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(4/3,3/4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
key_resp_3 = keyboard.Keyboard()
sound_stop = sound.Sound('A', secs=1.0, stereo=True, hamming=True,
    name='sound_stop')
sound_stop.setVolume(1.0)

# --- Initialize components for Routine "instr_2" ---
# Run 'Begin Experiment' code from code_12
# initiate first slide
slideStim2='conditions/schedules/%s_first/%s_00/%s/instructions/Slide32.png' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
audioStim3='conditions/schedules/%s_first/%s_00/%s/instructions/Audio32.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])


startidx2 = 33
loopidx2  = 1

# random number such that loop does not end before it should
instrep2  = 999


# this need to match the slides you want to show at each turn
#endidx2   = [33] # modify where to stop 

# last slide, then the loop terminates and the experiment starts
maxSlide2 = 34 

# it is making as many turnovers as there are numbers in endidx -> this is baically how many times it goes back and forth between isntruction slides and the grid showing different examples
beforeRep = len(endidx)


total_time=[]
end_all_time = []
start_all_time = []
slides_2 = visual.ImageStim(
    win=win,
    name='slides_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(4/3,3/4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
nextButton_2 = visual.ButtonStim(win, 
    text='next', font='Arvo',
    pos=(0.45, -0.45),
    letterHeight=0.02,
    size=(0.1, 0.02), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='nextButton_2'
)
nextButton_2.buttonClock = core.Clock()
nextBox_2 = visual.Rect(
    win=win, name='nextBox_2',
    width=(0.15, 0.05)[0], height=(0.15, 0.05)[1],
    ori=0.0, pos=(0.45, -0.45), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
nextText_2 = visual.TextStim(win=win, name='nextText_2',
    text='→',
    font='Open Sans',
    pos=(0.45, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
prev_but_2 = visual.ButtonStim(win, 
    text='previous', font='Arvo',
    pos=(-0.45,-0.45),
    letterHeight=0.02,
    size=(0.1, 0.02), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='bottom-center',
    name='prev_but_2'
)
prev_but_2.buttonClock = core.Clock()
prev_box_2 = visual.Rect(
    win=win, name='prev_box_2',
    width=(0.15, 0.05)[0], height=(0.15, 0.05)[1],
    ori=0.0, pos=(-0.45,-0.45), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
prev_text_2 = visual.TextStim(win=win, name='prev_text_2',
    text='←',
    font='Open Sans',
    pos=(-0.45,-0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
sounds_3 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sounds_3')
sounds_3.setVolume(1.0)

# --- Initialize components for Routine "endExp" ---
# Run 'Begin Experiment' code from bye_code
total_time=[]
end_all_time = []
start_all_time = []
#endlate = "stimuli/instructions/Audio_earlystop.wav"
bye = visual.ImageStim(
    win=win,
    name='bye', 
    image='stimuli/Slide33.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(4/3, 3/4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "setEnv" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from initateExp
start_all_time = globalClock.getTime()
thisExp.addData('start_all_time', 'start_all_time')

# Run 'Begin Routine' code from redirect_web
# if you want to run it locally, need to define url with "testround"

url="testround"
#psychoJS.setRedirectUrls(url)
thisExp.addData('url', url)

# keep track of which components have finished
setEnvComponents = []
for thisComponent in setEnvComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "setEnv" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from redirect_web
    # the url for completion of full experiment
    # however this is redefined depending on performance later on
    #urlredirect = "https://oxfordxpsy.az1.qualtrics.com/jfe/form/SV_bD7MzQZCI68RQTc"
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setEnvComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "setEnv" ---
for thisComponent in setEnvComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setEnv" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "skipRoutine" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
skipRoutineComponents = []
for thisComponent in skipRoutineComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "skipRoutine" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in skipRoutineComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "skipRoutine" ---
for thisComponent in skipRoutineComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "skipRoutine" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
beforeExpLoop = data.TrialHandler(nReps=beforeRep, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='beforeExpLoop')
thisExp.addLoop(beforeExpLoop)  # add the loop to the experiment
thisBeforeExpLoop = beforeExpLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBeforeExpLoop.rgb)
if thisBeforeExpLoop != None:
    for paramName in thisBeforeExpLoop:
        exec('{} = thisBeforeExpLoop[paramName]'.format(paramName))

for thisBeforeExpLoop in beforeExpLoop:
    currentLoop = beforeExpLoop
    # abbreviate parameter names if possible (e.g. rgb = thisBeforeExpLoop.rgb)
    if thisBeforeExpLoop != None:
        for paramName in thisBeforeExpLoop:
            exec('{} = thisBeforeExpLoop[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    mini_instr_trials = data.TrialHandler(nReps=instrep, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='mini_instr_trials')
    thisExp.addLoop(mini_instr_trials)  # add the loop to the experiment
    thisMini_instr_trial = mini_instr_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMini_instr_trial.rgb)
    if thisMini_instr_trial != None:
        for paramName in thisMini_instr_trial:
            exec('{} = thisMini_instr_trial[paramName]'.format(paramName))
    
    for thisMini_instr_trial in mini_instr_trials:
        currentLoop = mini_instr_trials
        # abbreviate parameter names if possible (e.g. rgb = thisMini_instr_trial.rgb)
        if thisMini_instr_trial != None:
            for paramName in thisMini_instr_trial:
                exec('{} = thisMini_instr_trial[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "instr_1" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from loadSlides
        #audioStim.stop(reset=True) #False
        # load slides according to index
        slideStim = 'conditions/schedules/%s_first/%s_00/%s/instructions/Slide%d.png' % (
            expInfo['train_first'],
            expInfo['00_coordinate'],
            expInfo['starting corner'],
            startidx
        ) #"stimuli/instructions/Slide"+str(startidx)+".png"
        thisExp.addData('slideStim', slideStim)
        
        audioStim = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio%d.wav' % (
            expInfo['train_first'],
            expInfo['00_coordinate'],
            expInfo['starting corner'],
            startidx
        ) #"stimuli/instructions/Audio"+str(startidx)+".wav"
        thisExp.addData('audioStim', audioStim)
        
        # note, startidx is increased in 'nextButton' component; once button pressed, idx goes up by 1
        slides.setImage(slideStim)
        sounds.setSound(audioStim, hamming=True)
        sounds.setVolume(1.0, log=False)
        # keep track of which components have finished
        instr_1Components = [slides, nextButton, nextBox, nextText, prev_but, prev_box, prev_text, sounds]
        for thisComponent in instr_1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instr_1" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *slides* updates
            if slides.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                slides.frameNStart = frameN  # exact frame index
                slides.tStart = t  # local t and not account for scr refresh
                slides.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(slides, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'slides.started')
                slides.setAutoDraw(True)
            
            # *nextButton* updates
            if nextButton.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                nextButton.frameNStart = frameN  # exact frame index
                nextButton.tStart = t  # local t and not account for scr refresh
                nextButton.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(nextButton, 'tStartRefresh')  # time at next scr refresh
                nextButton.setAutoDraw(True)
            if nextButton.status == STARTED:
                # check whether nextButton has been pressed
                if nextButton.isClicked:
                    if not nextButton.wasClicked:
                        nextButton.timesOn.append(nextButton.buttonClock.getTime()) # store time of first click
                        nextButton.timesOff.append(nextButton.buttonClock.getTime()) # store time clicked until
                    else:
                        nextButton.timesOff[-1] = nextButton.buttonClock.getTime() # update time clicked until
                    if not nextButton.wasClicked:
                        continueRoutine = False  # end routine when nextButton is clicked
                        startidx += 1
                        button_name = "next"
                    nextButton.wasClicked = True  # if nextButton is still clicked next frame, it is not a new click
                else:
                    nextButton.wasClicked = False  # if nextButton is clicked next frame, it is a new click
            else:
                nextButton.wasClicked = False  # if nextButton is clicked next frame, it is a new click
            
            # *nextBox* updates
            if nextBox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                nextBox.frameNStart = frameN  # exact frame index
                nextBox.tStart = t  # local t and not account for scr refresh
                nextBox.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(nextBox, 'tStartRefresh')  # time at next scr refresh
                nextBox.setAutoDraw(True)
            
            # *nextText* updates
            if nextText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                nextText.frameNStart = frameN  # exact frame index
                nextText.tStart = t  # local t and not account for scr refresh
                nextText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(nextText, 'tStartRefresh')  # time at next scr refresh
                nextText.setAutoDraw(True)
            
            # *prev_but* updates
            if prev_but.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                prev_but.frameNStart = frameN  # exact frame index
                prev_but.tStart = t  # local t and not account for scr refresh
                prev_but.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prev_but, 'tStartRefresh')  # time at next scr refresh
                prev_but.setAutoDraw(True)
            if prev_but.status == STARTED:
                # check whether prev_but has been pressed
                if prev_but.isClicked:
                    if not prev_but.wasClicked:
                        prev_but.timesOn.append(prev_but.buttonClock.getTime()) # store time of first click
                        prev_but.timesOff.append(prev_but.buttonClock.getTime()) # store time clicked until
                    else:
                        prev_but.timesOff[-1] = prev_but.buttonClock.getTime() # update time clicked until
                    if not prev_but.wasClicked:
                        continueRoutine = False  # end routine when prev_but is clicked
                        startidx -= 1
                        button_name = "previous"
                    prev_but.wasClicked = True  # if prev_but is still clicked next frame, it is not a new click
                else:
                    prev_but.wasClicked = False  # if prev_but is clicked next frame, it is a new click
            else:
                prev_but.wasClicked = False  # if prev_but is clicked next frame, it is a new click
            
            # *prev_box* updates
            if prev_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prev_box.frameNStart = frameN  # exact frame index
                prev_box.tStart = t  # local t and not account for scr refresh
                prev_box.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prev_box, 'tStartRefresh')  # time at next scr refresh
                prev_box.setAutoDraw(True)
            
            # *prev_text* updates
            if prev_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prev_text.frameNStart = frameN  # exact frame index
                prev_text.tStart = t  # local t and not account for scr refresh
                prev_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prev_text, 'tStartRefresh')  # time at next scr refresh
                prev_text.setAutoDraw(True)
            # start/stop sounds
            if sounds.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sounds.frameNStart = frameN  # exact frame index
                sounds.tStart = t  # local t and not account for scr refresh
                sounds.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sounds.started', tThisFlipGlobal)
                sounds.play(when=win)  # sync with win flip
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instr_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instr_1" ---
        for thisComponent in instr_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from loadSlides
        # finish routine once hit slide number
        # startidx is increased with each button press
        
        if startidx > endidx[loopidx-1]:
            mini_instr_trials.finished = True
            loopidx+=1
            if startidx > maxSlide:
                beforeExpLoop.finished = True
        mini_instr_trials.addData('nextButton.numClicks', nextButton.numClicks)
        if nextButton.numClicks:
           mini_instr_trials.addData('nextButton.timesOn', nextButton.timesOn)
           mini_instr_trials.addData('nextButton.timesOff', nextButton.timesOff)
        else:
           mini_instr_trials.addData('nextButton.timesOn', "")
           mini_instr_trials.addData('nextButton.timesOff', "")
        mini_instr_trials.addData('prev_but.numClicks', prev_but.numClicks)
        if prev_but.numClicks:
           mini_instr_trials.addData('prev_but.timesOn', prev_but.timesOn)
           mini_instr_trials.addData('prev_but.timesOff', prev_but.timesOff)
        else:
           mini_instr_trials.addData('prev_but.timesOn', "")
           mini_instr_trials.addData('prev_but.timesOff', "")
        sounds.stop()  # ensure sound has stopped at end of routine
        # the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed instrep repeats of 'mini_instr_trials'
    
    
    # --- Prepare to start Routine "getSkip" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_3
    # checks which routines/components should be skipped
     
    # grid examples:
    if showGexam[loopidx-1] == 1:
       instrSkipRep = 1
    else:
        instrSkipRep = 0
        
    # practice rounds:
    if showTrain[loopidx-1] == 1:
         trainRep = 1
      
    else:
        trainRep = 0
    # keep track of which components have finished
    getSkipComponents = []
    for thisComponent in getSkipComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "getSkip" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in getSkipComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "getSkip" ---
    for thisComponent in getSkipComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "getSkip" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    instrLoop = data.TrialHandler(nReps=instrSkipRep, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(instrFile, selection=strRow),
        seed=None, name='instrLoop')
    thisExp.addLoop(instrLoop)  # add the loop to the experiment
    thisInstrLoop = instrLoop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisInstrLoop.rgb)
    if thisInstrLoop != None:
        for paramName in thisInstrLoop:
            exec('{} = thisInstrLoop[paramName]'.format(paramName))
    
    for thisInstrLoop in instrLoop:
        currentLoop = instrLoop
        # abbreviate parameter names if possible (e.g. rgb = thisInstrLoop.rgb)
        if thisInstrLoop != None:
            for paramName in thisInstrLoop:
                exec('{} = thisInstrLoop[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "loadparams" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_6
        # load some params such that they can be shown in first trial
        # psychopy has some problems loading otherwise 
        
        alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
        thisExp.addData('alienStim', alienStim) 
        
        
        nrtrain = trialLength
        
        # currently the input starts at 1, in python numbers start at 0
        
        x_startPos = all_x[x_fixStart] 
        y_startPos = all_y[y_fixStart]  
        
        x_movePos = x_startPos
        y_movePos = y_startPos
        
        
        
        # keep track of which components have finished
        loadparamsComponents = []
        for thisComponent in loadparamsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "loadparams" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in loadparamsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "loadparams" ---
        for thisComponent in loadparamsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "loadparams" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "instrGrid" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from gridCode_instr
        # _________________________________________________
        # reset these for each routine
        choice_start = globalClock.getTime()
        # alien image:
        
        
        alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
        Audio_intr = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_intr1.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
        
        
        thisExp.addData('instrFile', instrFile) 
        thisExp.addData('alienStim_instr', alienStim) 
        
        startPos_3.setPos((x_startPos,y_startPos))
        key_instr.keys = []
        key_instr.rt = []
        _key_instr_allKeys = []
        alienImage_3.setImage(alienStim)
        sounds_1.setSound(Audio_intr, hamming=True)
        sounds_1.setVolume(1.0, log=False)
        # keep track of which components have finished
        instrGridComponents = [gridImage_instr, startPos_3, key_instr, alienImage_3, sounds_1]
        for thisComponent in instrGridComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instrGrid" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *gridImage_instr* updates
            if gridImage_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                gridImage_instr.frameNStart = frameN  # exact frame index
                gridImage_instr.tStart = t  # local t and not account for scr refresh
                gridImage_instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(gridImage_instr, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'gridImage_instr.started')
                gridImage_instr.setAutoDraw(True)
            
            # *startPos_3* updates
            if startPos_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                startPos_3.frameNStart = frameN  # exact frame index
                startPos_3.tStart = t  # local t and not account for scr refresh
                startPos_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(startPos_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'startPos_3.started')
                startPos_3.setAutoDraw(True)
            
            # *key_instr* updates
            waitOnFlip = False
            if key_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_instr.frameNStart = frameN  # exact frame index
                key_instr.tStart = t  # local t and not account for scr refresh
                key_instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_instr, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_instr.started')
                key_instr.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_instr.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_instr.status == STARTED and not waitOnFlip:
                theseKeys = key_instr.getKeys(keyList=['return'], waitRelease=False)
                _key_instr_allKeys.extend(theseKeys)
                if len(_key_instr_allKeys):
                    key_instr.keys = _key_instr_allKeys[-1].name  # just the last key pressed
                    key_instr.rt = _key_instr_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *alienImage_3* updates
            if alienImage_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                alienImage_3.frameNStart = frameN  # exact frame index
                alienImage_3.tStart = t  # local t and not account for scr refresh
                alienImage_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(alienImage_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'alienImage_3.started')
                alienImage_3.setAutoDraw(True)
            # start/stop sounds_1
            if sounds_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sounds_1.frameNStart = frameN  # exact frame index
                sounds_1.tStart = t  # local t and not account for scr refresh
                sounds_1.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sounds_1.started', tThisFlipGlobal)
                sounds_1.play(when=win)  # sync with win flip
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instrGridComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instrGrid" ---
        for thisComponent in instrGridComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_instr.keys in ['', [], None]:  # No response was made
            key_instr.keys = None
        instrLoop.addData('key_instr.keys',key_instr.keys)
        if key_instr.keys != None:  # we had a response
            instrLoop.addData('key_instr.rt', key_instr.rt)
        sounds_1.stop()  # ensure sound has stopped at end of routine
        # the Routine "instrGrid" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "PathFB_instr" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from pathFB_2
        # timings
        start = globalClock.getTime()
        # _________________________________________________
        
        
        
        #messageFBinstr = "This is where I hide." '\n' "Let me show" '\n' "you my route."
        #msgColFB   = blackCol
        intrAudio = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_intr2.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
        
        
        alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
        
        # _________________________________________________
        #  show the whole path
        # _________________________________________________
        
        x_corrPos = all_x[x_corrSteps]
        y_corrPos = all_y[y_corrSteps]
        
        # path in x-direction:
        if x_corrSteps >= x_fixStart:
            x_pathdirX = (x_corrPos+x_startPos)/2
            y_pathdirX = y_startPos
            x_pathSize = abs(x_fixStart-x_corrSteps)*step 
        
        elif x_corrSteps < x_fixStart:
            x_pathdirX = (x_corrPos+x_startPos)/2
            y_pathdirX = y_startPos
            x_pathSize = abs(x_fixStart-x_corrSteps)*step 
        
        # path in y-direction: 
        if  y_corrSteps >= y_fixStart:
            # path in y-direction:
            y_pathdirY = (y_corrPos+y_startPos)/2
            x_pathdirY = x_corrPos
            y_pathSize = abs(y_fixStart-y_corrSteps)*step
            
        elif  y_corrSteps < y_fixStart:
            # path in y-direction:
            y_pathdirY = (y_corrPos+y_startPos)/2
            x_pathdirY = x_corrPos
            # adding one step in case it is zero steps
            y_pathSize = abs(y_fixStart-y_corrSteps)*step
        
            
            
        
        thisExp.addData('all_x', all_x) 
        thisExp.addData('all_y', all_y) 
        
        thisExp.addData('FBy_corrSteps', y_corrSteps) 
        thisExp.addData('FBy_fixStart', y_fixStart) 
        
        thisExp.addData('FBx_corrSteps', x_corrSteps) 
        thisExp.addData('FBx_fixStart', x_fixStart) 
        
        thisExp.addData('FBy_pathSize_check', y_pathSize) 
        thisExp.addData('FBx_pathSize_check', x_pathSize) 
           
        alienImageFB_3.setImage(alienStim)
        startPosFB_3.setPos((x_startPos,y_startPos))
        keyFB_3.keys = []
        keyFB_3.rt = []
        _keyFB_3_allKeys = []
        alienFace_3.setImage(alienStim)
        sounds_2.setSound(intrAudio, hamming=True)
        sounds_2.setVolume(1.0, log=False)
        # keep track of which components have finished
        PathFB_instrComponents = [gridImage_9, alienImageFB_3, startPosFB_3, keyFB_3, pathLine_ydir_2, pathLine_xdir_2, alienFace_3, sounds_2]
        for thisComponent in PathFB_instrComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "PathFB_instr" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *gridImage_9* updates
            if gridImage_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                gridImage_9.frameNStart = frameN  # exact frame index
                gridImage_9.tStart = t  # local t and not account for scr refresh
                gridImage_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(gridImage_9, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'gridImage_9.started')
                gridImage_9.setAutoDraw(True)
            
            # *alienImageFB_3* updates
            if alienImageFB_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                alienImageFB_3.frameNStart = frameN  # exact frame index
                alienImageFB_3.tStart = t  # local t and not account for scr refresh
                alienImageFB_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(alienImageFB_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'alienImageFB_3.started')
                alienImageFB_3.setAutoDraw(True)
            
            # *startPosFB_3* updates
            if startPosFB_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                startPosFB_3.frameNStart = frameN  # exact frame index
                startPosFB_3.tStart = t  # local t and not account for scr refresh
                startPosFB_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(startPosFB_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'startPosFB_3.started')
                startPosFB_3.setAutoDraw(True)
            
            # *keyFB_3* updates
            waitOnFlip = False
            if keyFB_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                keyFB_3.frameNStart = frameN  # exact frame index
                keyFB_3.tStart = t  # local t and not account for scr refresh
                keyFB_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(keyFB_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'keyFB_3.started')
                keyFB_3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(keyFB_3.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(keyFB_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if keyFB_3.status == STARTED and not waitOnFlip:
                theseKeys = keyFB_3.getKeys(keyList=['return'], waitRelease=False)
                _keyFB_3_allKeys.extend(theseKeys)
                if len(_keyFB_3_allKeys):
                    keyFB_3.keys = _keyFB_3_allKeys[-1].name  # just the last key pressed
                    keyFB_3.rt = _keyFB_3_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *pathLine_ydir_2* updates
            if pathLine_ydir_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pathLine_ydir_2.frameNStart = frameN  # exact frame index
                pathLine_ydir_2.tStart = t  # local t and not account for scr refresh
                pathLine_ydir_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pathLine_ydir_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pathLine_ydir_2.started')
                pathLine_ydir_2.setAutoDraw(True)
            if pathLine_ydir_2.status == STARTED:  # only update if drawing
                pathLine_ydir_2.setFillColor([1.0000, 0.6863, -1.0000], log=False)
                pathLine_ydir_2.setPos((x_pathdirY,y_pathdirY), log=False)
                pathLine_ydir_2.setSize(y_pathSize, log=False)
                pathLine_ydir_2.setLineColor([1.0000, 0.6863, -1.0000], log=False)
                pathLine_ydir_2.setLineWidth(8.0, log=False)
            
            # *pathLine_xdir_2* updates
            if pathLine_xdir_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pathLine_xdir_2.frameNStart = frameN  # exact frame index
                pathLine_xdir_2.tStart = t  # local t and not account for scr refresh
                pathLine_xdir_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pathLine_xdir_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pathLine_xdir_2.started')
                pathLine_xdir_2.setAutoDraw(True)
            if pathLine_xdir_2.status == STARTED:  # only update if drawing
                pathLine_xdir_2.setFillColor([1.0000, 0.6863, -1.0000], log=False)
                pathLine_xdir_2.setPos((x_pathdirX,y_pathdirX), log=False)
                pathLine_xdir_2.setSize(x_pathSize, log=False)
                pathLine_xdir_2.setLineColor([1.0000, 0.6863, -1.0000], log=False)
                pathLine_xdir_2.setLineWidth(8.0, log=False)
            
            # *alienFace_3* updates
            if alienFace_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                alienFace_3.frameNStart = frameN  # exact frame index
                alienFace_3.tStart = t  # local t and not account for scr refresh
                alienFace_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(alienFace_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'alienFace_3.started')
                alienFace_3.setAutoDraw(True)
            if alienFace_3.status == STARTED:  # only update if drawing
                alienFace_3.setPos((x_corrPos,y_corrPos), log=False)
            # start/stop sounds_2
            if sounds_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sounds_2.frameNStart = frameN  # exact frame index
                sounds_2.tStart = t  # local t and not account for scr refresh
                sounds_2.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sounds_2.started', tThisFlipGlobal)
                sounds_2.play(when=win)  # sync with win flip
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in PathFB_instrComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "PathFB_instr" ---
        for thisComponent in PathFB_instrComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from pathFB_2
        
        # still within the loop      
        if getRow < nrtrain-1:
             getRow = getRow+1
        elif getRow >= nrtrain-1:
         # reset for the next 
             getRow = 0
        strRow = str(getRow)     
        
        
        # _________________________________________________
        now = globalClock.getTime()
        # _________________________________________________
        
        RTFB_instr = now - start
        thisExp.addData('RTFB_instr', RTFB_instr)
        
        
        
        
        
        
        
        # check responses
        if keyFB_3.keys in ['', [], None]:  # No response was made
            keyFB_3.keys = None
        instrLoop.addData('keyFB_3.keys',keyFB_3.keys)
        if keyFB_3.keys != None:  # we had a response
            instrLoop.addData('keyFB_3.rt', keyFB_3.rt)
        sounds_2.stop()  # ensure sound has stopped at end of routine
        # the Routine "PathFB_instr" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "setconfig" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from resetStuff
        # _________________________________________________
        # update alien ID for next trial
        alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
        thisExp.addData('draw_alienStim', alienStim)
        thisExp.addData('draw_alienID', alienID)
        
        # _________________________________________________
        # starting position
        thisExp.addData('test_x', x_fixStart)
        
        x_startPos = all_x[x_fixStart] 
        y_startPos = all_y[y_fixStart] 
        
        x_movePos =x_startPos
        y_movePos =y_startPos
        moveCol   = startCol
        
        x_corrPos = 99
        y_corrPos = 99
        corrColFB = whiteCol
        
        # _________________________________________________
        # choice
        choice=0
        corrAns = 99        
                
        keyFB_3.keys=[]
        
        # keep track of which components have finished
        setconfigComponents = []
        for thisComponent in setconfigComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "setconfig" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from resetStuff
            nrepcount = nrepcount+1
            thisExp.addData('nrepcount', nrepcount)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in setconfigComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "setconfig" ---
        for thisComponent in setconfigComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from resetStuff
        counter +=1
        # the Routine "setconfig" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed instrSkipRep repeats of 'instrLoop'
    
    
    # set up handler to look after randomisation of conditions etc
    repeat_prac = data.TrialHandler(nReps=maxRep, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='repeat_prac')
    thisExp.addLoop(repeat_prac)  # add the loop to the experiment
    thisRepeat_prac = repeat_prac.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat_prac.rgb)
    if thisRepeat_prac != None:
        for paramName in thisRepeat_prac:
            exec('{} = thisRepeat_prac[paramName]'.format(paramName))
    
    for thisRepeat_prac in repeat_prac:
        currentLoop = repeat_prac
        # abbreviate parameter names if possible (e.g. rgb = thisRepeat_prac.rgb)
        if thisRepeat_prac != None:
            for paramName in thisRepeat_prac:
                exec('{} = thisRepeat_prac[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        trainLoop = data.TrialHandler(nReps=trainRep, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(pracFile),
            seed=None, name='trainLoop')
        thisExp.addLoop(trainLoop)  # add the loop to the experiment
        thisTrainLoop = trainLoop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrainLoop.rgb)
        if thisTrainLoop != None:
            for paramName in thisTrainLoop:
                exec('{} = thisTrainLoop[paramName]'.format(paramName))
        
        for thisTrainLoop in trainLoop:
            currentLoop = trainLoop
            # abbreviate parameter names if possible (e.g. rgb = thisTrainLoop.rgb)
            if thisTrainLoop != None:
                for paramName in thisTrainLoop:
                    exec('{} = thisTrainLoop[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "loadparams" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_6
            # load some params such that they can be shown in first trial
            # psychopy has some problems loading otherwise 
            
            alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
            thisExp.addData('alienStim', alienStim) 
            
            
            nrtrain = trialLength
            
            # currently the input starts at 1, in python numbers start at 0
            
            x_startPos = all_x[x_fixStart] 
            y_startPos = all_y[y_fixStart]  
            
            x_movePos = x_startPos
            y_movePos = y_startPos
            
            
            
            # keep track of which components have finished
            loadparamsComponents = []
            for thisComponent in loadparamsComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "loadparams" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in loadparamsComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "loadparams" ---
            for thisComponent in loadparamsComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "loadparams" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            moveLoop_train = data.TrialHandler(nReps=repChoice, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=[None],
                seed=None, name='moveLoop_train')
            thisExp.addLoop(moveLoop_train)  # add the loop to the experiment
            thisMoveLoop_train = moveLoop_train.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisMoveLoop_train.rgb)
            if thisMoveLoop_train != None:
                for paramName in thisMoveLoop_train:
                    exec('{} = thisMoveLoop_train[paramName]'.format(paramName))
            
            for thisMoveLoop_train in moveLoop_train:
                currentLoop = moveLoop_train
                # abbreviate parameter names if possible (e.g. rgb = thisMoveLoop_train.rgb)
                if thisMoveLoop_train != None:
                    for paramName in thisMoveLoop_train:
                        exec('{} = thisMoveLoop_train[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "trainGrid" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from gridCode
                start = globalClock.getTime()
                
                
                # _________________________________________________
                # reset these for each routine
                choice_start = globalClock.getTime()
                choice_now   = 0
                counttime    = 0
                moveDur      = 9999
                
                alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
                startPos.setPos((x_startPos,y_startPos))
                key_resp.keys = []
                key_resp.rt = []
                _key_resp_allKeys = []
                alienImage.setImage(alienStim)
                # keep track of which components have finished
                trainGridComponents = [gridImage_4, startPos, movePos, key_resp, alienImage]
                for thisComponent in trainGridComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                frameN = -1
                
                # --- Run Routine "trainGrid" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from gridCode
                    # check decision, adjust movePos
                    # left/right, change x-axis
                    # up/down, change y-axis
                    # adjust position of movePos stimulus:
                    
                    if key_resp.keys: 
                        if key_resp.keys == "left":
                            x_movePos = x_movePos-step
                            moveCol  = (1,1,1)  # white
                            x_dir -= 1 # compares the amount of button presses to the correct answer
                        elif key_resp.keys == "right":
                            x_movePos = x_movePos+step
                            moveCol  = (1,1,1)  # white
                            x_dir += 1 
                        elif key_resp.keys == "up":
                            y_movePos = y_movePos + step
                            moveCol  = (1,1,1)  # white
                            y_dir += 1
                        elif key_resp.keys == "down":
                            moveCol  = (1,1,1)  # white
                            y_movePos = y_movePos - step
                            y_dir -= 1 
                        elif key_resp.keys == "return": 
                            choice = 1
                            moveCol = (-1,-1,-1) 
                            thisExp.addData('wLy_dir', y_dir) 
                            thisExp.addData('wLx_dir', x_dir) 
                            choice_now = globalClock.getTime() 
                            thisExp.addData('x_movePos', x_movePos) 
                            thisExp.addData('y_movePos', y_movePos) 
                        if prevlenkey == curlenkey:
                            continueRoutine = False
                            curlenkey = 0
                            prevlenkey = 0
                    
                        choice_now = globalClock.getTime() 
                        RTchoice_train = choice_now- start 
                        Choicebutton = key_resp.keys
                        thisExp.addData('buttonPress_train',Choicebutton) 
                        thisExp.addData('RTchoice_train',RTchoice_train)
                    
                    # *gridImage_4* updates
                    if gridImage_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        gridImage_4.frameNStart = frameN  # exact frame index
                        gridImage_4.tStart = t  # local t and not account for scr refresh
                        gridImage_4.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(gridImage_4, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'gridImage_4.started')
                        gridImage_4.setAutoDraw(True)
                    
                    # *startPos* updates
                    if startPos.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        startPos.frameNStart = frameN  # exact frame index
                        startPos.tStart = t  # local t and not account for scr refresh
                        startPos.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(startPos, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'startPos.started')
                        startPos.setAutoDraw(True)
                    
                    # *movePos* updates
                    if movePos.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        movePos.frameNStart = frameN  # exact frame index
                        movePos.tStart = t  # local t and not account for scr refresh
                        movePos.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(movePos, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'movePos.started')
                        movePos.setAutoDraw(True)
                    if movePos.status == STARTED:  # only update if drawing
                        movePos.setFillColor(moveCol, log=False)
                        movePos.setPos((x_movePos,y_movePos), log=False)
                        movePos.setLineColor(moveCol, log=False)
                    
                    # *key_resp* updates
                    waitOnFlip = False
                    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        key_resp.frameNStart = frameN  # exact frame index
                        key_resp.tStart = t  # local t and not account for scr refresh
                        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp.started')
                        key_resp.status = STARTED
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if key_resp.status == STARTED and not waitOnFlip:
                        theseKeys = key_resp.getKeys(keyList=['up','down','left','right','return'], waitRelease=False)
                        _key_resp_allKeys.extend(theseKeys)
                        if len(_key_resp_allKeys):
                            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                            key_resp.rt = _key_resp_allKeys[-1].rt
                    
                    # *alienImage* updates
                    if alienImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        alienImage.frameNStart = frameN  # exact frame index
                        alienImage.tStart = t  # local t and not account for scr refresh
                        alienImage.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(alienImage, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'alienImage.started')
                        alienImage.setAutoDraw(True)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in trainGridComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "trainGrid" ---
                for thisComponent in trainGridComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # Run 'End Routine' code from gridCode
                
                # _________________________________________________
                #  check choice accuracy:
                # _________________________________________________
                delta = 0.0001
                if choice == 1: 
                    
                    diff1= abs(all_x[x_corrSteps] - x_movePos)
                    diff2= abs(all_y[y_corrSteps] - y_movePos)
                    
                    alldiff = diff1+diff2
                    
                    if alldiff<=delta:
                        corrAns = 1
                        saveAcc +=1
                        aCorr =0
                        diff1=99
                        diff2=99
                        alldiff=99
                        cumAcctrain = cumAcctrain + corrAns
                       
                    elif alldiff<=delta+0.1:
                        corrAns =0
                        saveAcc +=0
                        aCorr =1 # almost correct condition 
                        diff1=99
                        diff2=99
                        alldiff=99
                        cumAcctrain = cumAcctrain + corrAns
                        
                    elif alldiff>delta+0.1: #alldiff>delta:
                        corrAns =0
                        saveAcc +=0
                        aCorr =0
                        diff1=99
                        diff2=99
                        alldiff=99
                        cumAcctrain = cumAcctrain + corrAns
                    moveLoop_train.finished=True
                    choice=0
                
                
                
                thisExp.addData('cumAcctrain', cumAcctrain) 
                thisExp.addData('aCorr', aCorr) 
                thisExp.addData('saveACC_choice', saveACC) 
                thisExp.addData('corrAns', corrAns) 
                thisExp.addData('x_movePos_end', x_movePos) 
                thisExp.addData('y_movePos_end', y_movePos) 
                
                
                # check responses
                if key_resp.keys in ['', [], None]:  # No response was made
                    key_resp.keys = None
                moveLoop_train.addData('key_resp.keys',key_resp.keys)
                if key_resp.keys != None:  # we had a response
                    moveLoop_train.addData('key_resp.rt', key_resp.rt)
                # the Routine "trainGrid" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed repChoice repeats of 'moveLoop_train'
            
            
            # --- Prepare to start Routine "quickfixation" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # keep track of which components have finished
            quickfixationComponents = [text_2]
            for thisComponent in quickfixationComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "quickfixation" ---
            while continueRoutine and routineTimer.getTime() < 1.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_2* updates
                if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_2.frameNStart = frameN  # exact frame index
                    text_2.tStart = t  # local t and not account for scr refresh
                    text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_2.started')
                    text_2.setAutoDraw(True)
                if text_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_2.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        text_2.tStop = t  # not accounting for scr refresh
                        text_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_2.stopped')
                        text_2.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in quickfixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "quickfixation" ---
            for thisComponent in quickfixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.500000)
            
            # --- Prepare to start Routine "PathFB_train" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from pathFB
            # new message:
            msgColFB   = blackCol
            
            alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
            
            # _________________________________________________
            #  feedback
            # _________________________________________________
            
            start = globalClock.getTime() 
            thisExp.addData('corrAns', corrAns) 
            
            
            # show the whole path
            # ---------------------------------
            
            
            # COMPARE ANSWER: steps into x/y direction
            # ---------------------------------
            if corrAns==1:
                #messageFB = "CORRECT!" '\n' "Let me show" '\n' "you my route."
                pickAudio = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_corr.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
                msgColFB  = greenCol
                moveColFB = greenCol
                corrColFB = greenCol
                
                x_corrPos = all_x[x_corrSteps]
                y_corrPos = all_y[y_corrSteps]
                
                
            elif corrAns ==0 and aCorr==0:
                #messageFB = "INCORRECT!" '\n' "Let me show" '\n' "you my route."
                pickAudio = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_fals.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
                msgColFB  = redCol
                moveColFB = redCol
             
             # show correct location:   
                corrColFB = redCol
            
                x_corrPos = all_x[x_corrSteps]
                y_corrPos = all_y[y_corrSteps]
                
                
            elif corrAns ==0 and aCorr==1:
                #messageFB = "INCORRECT!" '\n' "Let me show" '\n' "you my route."
                pickAudio = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_acorr.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
                msgColFB  = yellCol
                moveColFB = yellCol
             
             # show correct location:   
                corrColFB = yellCol
            
                x_corrPos = all_x[x_corrSteps]
                y_corrPos = all_y[y_corrSteps]
            
            thisExp.addData('aft_x_corrPos', x_corrPos) 
            thisExp.addData('aft_y_corrPos', y_corrPos) 
            
            
            
            # _________________________________________________
            #  show the whole path
            # _________________________________________________
            
            x_corrPos = all_x[x_corrSteps]
            y_corrPos = all_y[y_corrSteps]
            
            
            
            # path in x-direction:
            if x_corrSteps >= x_fixStart:
                x_pathdirX = (x_corrPos+x_startPos)/2
                y_pathdirX = y_startPos
                x_pathSize = abs(x_fixStart-x_corrSteps)*step 
            
            elif x_corrSteps < x_fixStart:
                x_pathdirX = (x_corrPos+x_startPos)/2
                y_pathdirX = y_startPos
                x_pathSize = abs(x_fixStart-x_corrSteps)*step 
            
            # path in y-direction: 
            if  y_corrSteps >= y_fixStart:
                # path in y-direction:
                y_pathdirY = (y_corrPos+y_startPos)/2
                x_pathdirY = x_corrPos
                y_pathSize = abs(y_fixStart-y_corrSteps)*step
                
            elif  y_corrSteps < y_fixStart:
                # path in y-direction:
                y_pathdirY = (y_corrPos+y_startPos)/2
                #x_pathdirY = x_corrPos
                x_pathdirY = x_corrPos
                # adding one step in case it is zero steps
                y_pathSize = abs(y_fixStart-y_corrSteps)*step
            
                
            thisExp.addData('y_pathSize_check', y_pathSize) 
            thisExp.addData('x_pathSize_check', x_pathSize) 
            thisExp.addData('y_pathdirY', y_pathdirY) 
            thisExp.addData('x_pathdirY', x_pathdirY) 
            thisExp.addData('x_pathdirY', x_pathdirY) 
            thisExp.addData('x_pathdirX', x_pathdirX) 
            
            thisExp.addData('x_corrPos', x_corrPos) 
            thisExp.addData('y_corrPos', y_corrPos) 
            
            alienImageFB_2.setImage(alienStim)
            startPosFB_2.setPos((x_startPos,y_startPos))
            keyFB_2.keys = []
            keyFB_2.rt = []
            _keyFB_2_allKeys = []
            pathLine_xdir.setSize(x_pathSize)
            alienFace.setImage(alienStim)
            sounds_4.setSound(pickAudio, hamming=True)
            sounds_4.setVolume(1.0, log=False)
            # keep track of which components have finished
            PathFB_trainComponents = [gridImage_6, alienImageFB_2, startPosFB_2, movePosFB_2, keyFB_2, pathLine_xdir, pathLine_ydir, alienFace, sounds_4]
            for thisComponent in PathFB_trainComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "PathFB_train" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *gridImage_6* updates
                if gridImage_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    gridImage_6.frameNStart = frameN  # exact frame index
                    gridImage_6.tStart = t  # local t and not account for scr refresh
                    gridImage_6.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(gridImage_6, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'gridImage_6.started')
                    gridImage_6.setAutoDraw(True)
                
                # *alienImageFB_2* updates
                if alienImageFB_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    alienImageFB_2.frameNStart = frameN  # exact frame index
                    alienImageFB_2.tStart = t  # local t and not account for scr refresh
                    alienImageFB_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(alienImageFB_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'alienImageFB_2.started')
                    alienImageFB_2.setAutoDraw(True)
                
                # *startPosFB_2* updates
                if startPosFB_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    startPosFB_2.frameNStart = frameN  # exact frame index
                    startPosFB_2.tStart = t  # local t and not account for scr refresh
                    startPosFB_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(startPosFB_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'startPosFB_2.started')
                    startPosFB_2.setAutoDraw(True)
                
                # *movePosFB_2* updates
                if movePosFB_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    movePosFB_2.frameNStart = frameN  # exact frame index
                    movePosFB_2.tStart = t  # local t and not account for scr refresh
                    movePosFB_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(movePosFB_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'movePosFB_2.started')
                    movePosFB_2.setAutoDraw(True)
                if movePosFB_2.status == STARTED:  # only update if drawing
                    movePosFB_2.setFillColor(moveColFB, log=False)
                    movePosFB_2.setPos((x_movePos,y_movePos), log=False)
                    movePosFB_2.setLineColor(moveColFB, log=False)
                
                # *keyFB_2* updates
                waitOnFlip = False
                if keyFB_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    keyFB_2.frameNStart = frameN  # exact frame index
                    keyFB_2.tStart = t  # local t and not account for scr refresh
                    keyFB_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(keyFB_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'keyFB_2.started')
                    keyFB_2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(keyFB_2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(keyFB_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if keyFB_2.status == STARTED and not waitOnFlip:
                    theseKeys = keyFB_2.getKeys(keyList=['return'], waitRelease=False)
                    _keyFB_2_allKeys.extend(theseKeys)
                    if len(_keyFB_2_allKeys):
                        keyFB_2.keys = _keyFB_2_allKeys[-1].name  # just the last key pressed
                        keyFB_2.rt = _keyFB_2_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *pathLine_xdir* updates
                if pathLine_xdir.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    pathLine_xdir.frameNStart = frameN  # exact frame index
                    pathLine_xdir.tStart = t  # local t and not account for scr refresh
                    pathLine_xdir.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(pathLine_xdir, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'pathLine_xdir.started')
                    pathLine_xdir.setAutoDraw(True)
                if pathLine_xdir.status == STARTED:  # only update if drawing
                    pathLine_xdir.setFillColor([1.0000, 0.6863, -1.0000], log=False)
                    pathLine_xdir.setPos((x_pathdirX,y_pathdirX), log=False)
                    pathLine_xdir.setLineColor([1.0000, 0.6863, -1.0000], log=False)
                    pathLine_xdir.setLineWidth(pathLW, log=False)
                
                # *pathLine_ydir* updates
                if pathLine_ydir.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    pathLine_ydir.frameNStart = frameN  # exact frame index
                    pathLine_ydir.tStart = t  # local t and not account for scr refresh
                    pathLine_ydir.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(pathLine_ydir, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'pathLine_ydir.started')
                    pathLine_ydir.setAutoDraw(True)
                if pathLine_ydir.status == STARTED:  # only update if drawing
                    pathLine_ydir.setFillColor([1.0000, 0.6863, -1.0000], log=False)
                    pathLine_ydir.setPos((x_pathdirY,y_pathdirY), log=False)
                    pathLine_ydir.setSize(y_pathSize, log=False)
                    pathLine_ydir.setLineColor([1.0000, 0.6863, -1.0000], log=False)
                    pathLine_ydir.setLineWidth(pathLW, log=False)
                
                # *alienFace* updates
                if alienFace.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    alienFace.frameNStart = frameN  # exact frame index
                    alienFace.tStart = t  # local t and not account for scr refresh
                    alienFace.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(alienFace, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'alienFace.started')
                    alienFace.setAutoDraw(True)
                if alienFace.status == STARTED:  # only update if drawing
                    alienFace.setPos((x_corrPos,y_corrPos), log=False)
                # start/stop sounds_4
                if sounds_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    sounds_4.frameNStart = frameN  # exact frame index
                    sounds_4.tStart = t  # local t and not account for scr refresh
                    sounds_4.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('sounds_4.started', tThisFlipGlobal)
                    sounds_4.play(when=win)  # sync with win flip
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in PathFB_trainComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "PathFB_train" ---
            for thisComponent in PathFB_trainComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # Run 'End Routine' code from pathFB
            FBstart = globalClock.getTime() 
            
            RT_FBtrain = FBstart - start
            thisExp.addData('RT_FBtrain', RT_FBtrain) 
            
            # check responses
            if keyFB_2.keys in ['', [], None]:  # No response was made
                keyFB_2.keys = None
            trainLoop.addData('keyFB_2.keys',keyFB_2.keys)
            if keyFB_2.keys != None:  # we had a response
                trainLoop.addData('keyFB_2.rt', keyFB_2.rt)
            sounds_4.stop()  # ensure sound has stopped at end of routine
            # the Routine "PathFB_train" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "quickfixation" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # keep track of which components have finished
            quickfixationComponents = [text_2]
            for thisComponent in quickfixationComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "quickfixation" ---
            while continueRoutine and routineTimer.getTime() < 1.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_2* updates
                if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_2.frameNStart = frameN  # exact frame index
                    text_2.tStart = t  # local t and not account for scr refresh
                    text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_2.started')
                    text_2.setAutoDraw(True)
                if text_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_2.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        text_2.tStop = t  # not accounting for scr refresh
                        text_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_2.stopped')
                        text_2.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in quickfixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "quickfixation" ---
            for thisComponent in quickfixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.500000)
            
            # --- Prepare to start Routine "setconfig" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from resetStuff
            # _________________________________________________
            # update alien ID for next trial
            alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
            thisExp.addData('draw_alienStim', alienStim)
            thisExp.addData('draw_alienID', alienID)
            
            # _________________________________________________
            # starting position
            thisExp.addData('test_x', x_fixStart)
            
            x_startPos = all_x[x_fixStart] 
            y_startPos = all_y[y_fixStart] 
            
            x_movePos =x_startPos
            y_movePos =y_startPos
            moveCol   = startCol
            
            x_corrPos = 99
            y_corrPos = 99
            corrColFB = whiteCol
            
            # _________________________________________________
            # choice
            choice=0
            corrAns = 99        
                    
            keyFB_3.keys=[]
            
            # keep track of which components have finished
            setconfigComponents = []
            for thisComponent in setconfigComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "setconfig" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # Run 'Each Frame' code from resetStuff
                nrepcount = nrepcount+1
                thisExp.addData('nrepcount', nrepcount)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in setconfigComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "setconfig" ---
            for thisComponent in setconfigComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # Run 'End Routine' code from resetStuff
            counter +=1
            # the Routine "setconfig" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed trainRep repeats of 'trainLoop'
        
        
        # --- Prepare to start Routine "checkPerf" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_4
        # checks performance on practice trials and
        # repeats practice rounds if necessary
        
        # note,order of presenting stimuli random,
        # even if they repeat the practice 
        # the stim order will not be the same as before
        
        # only check when all trials are done within the round
        if nrepcount > praclen-1: #test amount(start from 0) > len(24-1)
            thisExp.addData('saveACC_pre', saveACC) 
            # ACC = (cumAcctrain/(24/100)/100) + (earlierperf*(4/24))
            # ACC = (cumAcctrain/(30/100)/100) + (earlierperf*(5/30))
            ACC = 0.9
            thisExp.addData('ACC', ACC)
            #saveACC= 25
            # for debugging, when want to have accuracy to continue
           # set this to 25 if you just 'pretend' all choices were made correctly
           
        
             # check performance threshold:
             #  is this performance threshold too high? YES
            thisExp.addData('within_saveACC_train', saveACC) 
            #if saveACC >= praclen-1:
             #       nextPrac = 1
            #elif saveACC < praclen-1:
             #   nextPrac = 0
            #if fileidx < 3: # only for the dim 1 training sessions
            #    earlystop +=1
            #    thisExp.addData('earlystop_wloop', earlystop) 
        
            if ACC >= percthres:
               nextPrac = 1
            elif ACC < percthres:
                 nextPrac = 0
            if fileidx < 3:# only for the dim 1 training sessions
               earlystop +=1
               thisExp.addData('earlystop_wloop', earlystop) 
        
        #    if cumAcctrain >= perfthres:
        #            nextPrac = 1
        #    elif cumAcctrain < perfthres:
        #        nextPrac = 0
        #    if fileidx < 7:#3: # only for the dim 1 training sessions
        #        earlystop +=1
        #        thisExp.addData('earlystop_wloop', earlystop) 
           # reset test variable
            earlierperf = earlierperf + (cumAcctrain/(24/100)/100)
            # earlierperf = earlierperf + (cumAcctrain/(30/100)/100)
            thisExp.addData('cumAcctrain_check', cumAcctrain)
            cumAcctrain =0
        
        thisExp.addData('perfthres', perfthres) 
        thisExp.addData('percthres', percthres) 
        thisExp.addData('earlierperf', earlierperf) 
        
        thisExp.addData('earlystop', earlystop) 
        thisExp.addData('nextPrac', nextPrac) 
        thisExp.addData('fileidx', fileidx) 
        thisExp.addData('praclen', praclen) 
        thisExp.addData('saveACC_train', saveACC) 
        
        # keep track of which components have finished
        checkPerfComponents = []
        for thisComponent in checkPerfComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "checkPerf" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in checkPerfComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "checkPerf" ---
        for thisComponent in checkPerfComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_4
        # update files to read in if performance threshold is exceeded
        if nextPrac ==1: # stops practice phase
            repeat_prac.finished = True 
            # reset
            saveACC   = 0
            nextPrac  = 99
            nrepcount = 0
            fileidx += 1
            trainidx = 1
        elif nextPrac ==0: # repeats practice phase
            # reset
            saveACC   = 0
            nextPrac  = 99
            nrepcount = 0
            trainidx += 1
        
        # only read in files for practice
        if fileidx < 4:
        ## prep files:
            #pracFile   = "conditions/inputTrain_"+str(fileidx)+ "." +str(trainidx)+".xlsx"
            pracFile = 'conditions/schedules/%s_first/%s_00/%s/inputTrain_%d.%d.xlsx' % (
            expInfo['train_first'],
            expInfo['00_coordinate'],
            expInfo['starting corner'],
            fileidx,
            trainidx
        )
            instrFile = 'conditions/schedules/%s_first/%s_00/%s/inputInstr_%d.xlsx' % (
            expInfo['train_first'],
            expInfo['00_coordinate'],
            expInfo['starting corner'],
            fileidx
        )
        
        
        ## save data:
        thisExp.addData('pracFile', pracFile) 
        thisExp.addData('nextPrac_train', nextPrac) 
        thisExp.addData('addNrep', addNrep) 
        thisExp.addData('fileidx_endr', fileidx) 
        
        
        #### quit experiment when not reaching performannce threshold in time 
        
        if earlystop >= maxPracRep: 
            # set outer loop to 0 -> terminates everything
            showearly = 1
            continueRoutine = False
            # set all resps to 0
            maxRep = 0
            trainRep=0
            beforeRep = 0
            instrSkipRep=0
            instrep = 0
            nrepExp = 0
            repChoice = 0
            nrepPause = 0
            
            beforeExpLoop.finished= True
            repeat_prac.finished = True
            trainLoop.finished = True
            moveLoop_train.finished = True
            instrLoop.finished = True
            mini_instr_trials.finished = True
        
            
        thisExp.addData('repExp', repExp) 
        thisExp.addData('showearly', showearly) 
        
        
        # the Routine "checkPerf" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed maxRep repeats of 'repeat_prac'
    
    thisExp.nextEntry()
    
# completed beforeRep repeats of 'beforeExpLoop'


# set up handler to look after randomisation of conditions etc
experiment = data.TrialHandler(nReps=nrepExp, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(condition_path),
    seed=None, name='experiment')
thisExp.addLoop(experiment)  # add the loop to the experiment
thisExperiment = experiment.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExperiment.rgb)
if thisExperiment != None:
    for paramName in thisExperiment:
        exec('{} = thisExperiment[paramName]'.format(paramName))

for thisExperiment in experiment:
    currentLoop = experiment
    # abbreviate parameter names if possible (e.g. rgb = thisExperiment.rgb)
    if thisExperiment != None:
        for paramName in thisExperiment:
            exec('{} = thisExperiment[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "loadparams" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_6
    # load some params such that they can be shown in first trial
    # psychopy has some problems loading otherwise 
    
    alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
    thisExp.addData('alienStim', alienStim) 
    
    
    nrtrain = trialLength
    
    # currently the input starts at 1, in python numbers start at 0
    
    x_startPos = all_x[x_fixStart] 
    y_startPos = all_y[y_fixStart]  
    
    x_movePos = x_startPos
    y_movePos = y_startPos
    
    
    
    # keep track of which components have finished
    loadparamsComponents = []
    for thisComponent in loadparamsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "loadparams" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in loadparamsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "loadparams" ---
    for thisComponent in loadparamsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "loadparams" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    moveLoop_test = data.TrialHandler(nReps=repChoice, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='moveLoop_test')
    thisExp.addLoop(moveLoop_test)  # add the loop to the experiment
    thisMoveLoop_test = moveLoop_test.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMoveLoop_test.rgb)
    if thisMoveLoop_test != None:
        for paramName in thisMoveLoop_test:
            exec('{} = thisMoveLoop_test[paramName]'.format(paramName))
    
    for thisMoveLoop_test in moveLoop_test:
        currentLoop = moveLoop_test
        # abbreviate parameter names if possible (e.g. rgb = thisMoveLoop_test.rgb)
        if thisMoveLoop_test != None:
            for paramName in thisMoveLoop_test:
                exec('{} = thisMoveLoop_test[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "testGrid" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from gridCode_test
        start = globalClock.getTime()
        
        
        
        # _________________________________________________
        # reset these for each routine
        choice_now   = 0
        counttime    = 0
        moveDur      = 9999
        # alien image:
        alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
        
        alienImage_test.setImage(alienStim)
        startPos_test.setPos((x_startPos,y_startPos))
        key_resp_test.keys = []
        key_resp_test.rt = []
        _key_resp_test_allKeys = []
        # keep track of which components have finished
        testGridComponents = [gridImage_3, alienImage_test, startPos_test, movePos_test, key_resp_test]
        for thisComponent in testGridComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "testGrid" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from gridCode_test
            # check decision, adjust movePos
            # left/right, change x-axis
            # up/down, change y-axis
            # adjust position of movePos stimulus:
            if key_resp_test.keys:
                    # MOVE DOT ACCORDING TO BUTTON KEYS:
                    # ---------------------------------
                    if key_resp_test.keys == "left":
                        x_movePos = x_movePos-step
                        moveCol  = (1,1,1)  # white
                        x_dir -= 1 # compares the amount of button presses to the correct answer
                    elif key_resp_test.keys == "right":
                        x_movePos = x_movePos+step
                        moveCol  = (1,1,1)  # white
                        x_dir += 1 
                    elif key_resp_test.keys == "up":   
                        y_movePos = y_movePos + step
                        moveCol  = (1,1,1)  # white
                        y_dir += 1 
                    elif key_resp_test.keys == "down":
                         moveCol  = (1,1,1)  # white
                         y_movePos = y_movePos - step
                         y_dir -= 1 
                         
                    # button keys to indicate choice:   
                    elif key_resp_test.keys == "return":
                         choice = 1
                         moveCol = (-1,-1,-1) 
                         #choiceT = key_resp.rt()
            
                    if prevlenkey == curlenkey:
                        continueRoutine = False
                        curlenkey = 0
                        prevlenkey = 0
                    
               
                    thisExp.addData('wLy_dir_test', y_dir) 
                    thisExp.addData('wLx_dir_test', x_dir) 
                    
                    
                    choice_now = globalClock.getTime() 
                    RTchoice_test = choice_now- start 
                    Choicebutton =key_resp_test.keys
                    thisExp.addData('buttonPress_test',Choicebutton) 
                    thisExp.addData('RTchoice_test',RTchoice_test)
                    
                    
                   
            
            
            # *gridImage_3* updates
            if gridImage_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                gridImage_3.frameNStart = frameN  # exact frame index
                gridImage_3.tStart = t  # local t and not account for scr refresh
                gridImage_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(gridImage_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'gridImage_3.started')
                gridImage_3.setAutoDraw(True)
            
            # *alienImage_test* updates
            if alienImage_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                alienImage_test.frameNStart = frameN  # exact frame index
                alienImage_test.tStart = t  # local t and not account for scr refresh
                alienImage_test.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(alienImage_test, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'alienImage_test.started')
                alienImage_test.setAutoDraw(True)
            
            # *startPos_test* updates
            if startPos_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                startPos_test.frameNStart = frameN  # exact frame index
                startPos_test.tStart = t  # local t and not account for scr refresh
                startPos_test.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(startPos_test, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'startPos_test.started')
                startPos_test.setAutoDraw(True)
            
            # *movePos_test* updates
            if movePos_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                movePos_test.frameNStart = frameN  # exact frame index
                movePos_test.tStart = t  # local t and not account for scr refresh
                movePos_test.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(movePos_test, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'movePos_test.started')
                movePos_test.setAutoDraw(True)
            if movePos_test.status == STARTED:  # only update if drawing
                movePos_test.setFillColor(moveCol, log=False)
                movePos_test.setPos((x_movePos,y_movePos), log=False)
                movePos_test.setLineColor(moveCol, log=False)
            
            # *key_resp_test* updates
            waitOnFlip = False
            if key_resp_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_test.frameNStart = frameN  # exact frame index
                key_resp_test.tStart = t  # local t and not account for scr refresh
                key_resp_test.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_test, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_test.started')
                key_resp_test.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_test.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_test.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_test.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_test.getKeys(keyList=['up','down','left','right','return'], waitRelease=False)
                _key_resp_test_allKeys.extend(theseKeys)
                if len(_key_resp_test_allKeys):
                    key_resp_test.keys = _key_resp_test_allKeys[-1].name  # just the last key pressed
                    key_resp_test.rt = _key_resp_test_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in testGridComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "testGrid" ---
        for thisComponent in testGridComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from gridCode_test
          
        # _________________________________________________
        #  check choice accuracy:
        # _________________________________________________
        
        if choice == 1: 
            if round(all_x[x_corrSteps],3) == round(x_movePos,3) and round(all_y[y_corrSteps],3) == round(y_movePos,3):
                corrAns = 1
                saveAcc +=1
                cumAcctest = cumAcctest+corrAns
        
               
            else:
                corrAns =0
                saveAcc +=0
                cumAcctest = cumAcctest+corrAns
            moveLoop_test.finished=True
            choice=0
            
        thisExp.addData('cumAcctest', cumAcctest) 
        thisExp.addData('saveACC_choice', saveACC) 
        thisExp.addData('corrAns_test', corrAns) 
        thisExp.addData('x_movePos_end', x_movePos) 
        thisExp.addData('y_movePos_end', y_movePos) 
        
        # check responses
        if key_resp_test.keys in ['', [], None]:  # No response was made
            key_resp_test.keys = None
        moveLoop_test.addData('key_resp_test.keys',key_resp_test.keys)
        if key_resp_test.keys != None:  # we had a response
            moveLoop_test.addData('key_resp_test.rt', key_resp_test.rt)
        # the Routine "testGrid" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed repChoice repeats of 'moveLoop_test'
    
    
    # --- Prepare to start Routine "fixation_2" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_2Components = [text_3]
    for thisComponent in fixation_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "fixation_2" ---
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_3.started')
            text_3.setAutoDraw(True)
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3.stopped')
                text_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "fixation_2" ---
    for thisComponent in fixation_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    
    # --- Prepare to start Routine "setconfig" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from resetStuff
    # _________________________________________________
    # update alien ID for next trial
    alienStim = "stimuli/alien_stimuli/"+str(alienID)+".png"
    thisExp.addData('draw_alienStim', alienStim)
    thisExp.addData('draw_alienID', alienID)
    
    # _________________________________________________
    # starting position
    thisExp.addData('test_x', x_fixStart)
    
    x_startPos = all_x[x_fixStart] 
    y_startPos = all_y[y_fixStart] 
    
    x_movePos =x_startPos
    y_movePos =y_startPos
    moveCol   = startCol
    
    x_corrPos = 99
    y_corrPos = 99
    corrColFB = whiteCol
    
    # _________________________________________________
    # choice
    choice=0
    corrAns = 99        
            
    keyFB_3.keys=[]
    
    # keep track of which components have finished
    setconfigComponents = []
    for thisComponent in setconfigComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "setconfig" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from resetStuff
        nrepcount = nrepcount+1
        thisExp.addData('nrepcount', nrepcount)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in setconfigComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "setconfig" ---
    for thisComponent in setconfigComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from resetStuff
    counter +=1
    # the Routine "setconfig" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed nrepExp repeats of 'experiment'


# --- Prepare to start Routine "earlyStop" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_5
#endearly.stop(reset=False)
if showearly == 0: # finish to the end
    continueRoutine = False
    #url = "https://mpib.qualtrics.com/jfe/form/SV_5BmsK5GOa7G6BYq?participant="+expInfo['participant']
    #psychoJS.setRedirectUrls(url)
elif showearly ==1:
    endearly = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio_earlystop.wav' % (expInfo['train_first'], expInfo['00_coordinate'], expInfo['starting corner'])
    #urlredirect = ""
    endstatus = "experiment_finished_early"
    thisExp.addData('endstatus', endstatus)
    thisExp.addData('url_stopearly', urlredirect)
    #url ="https://mpib.qualtrics.com/jfe/form/SV_6LJSuyOrMfljMG2?participant="+expInfo['participant']
    #psychoJS.setRedirectUrls(url)
     
slide_stop.setImage('stimuli/Slide31.png')
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
sound_stop.setSound(endearly, secs=1.0, hamming=True)
sound_stop.setVolume(1.0, log=False)
# keep track of which components have finished
earlyStopComponents = [slide_stop, key_resp_3, sound_stop]
for thisComponent in earlyStopComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "earlyStop" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *slide_stop* updates
    if slide_stop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slide_stop.frameNStart = frameN  # exact frame index
        slide_stop.tStart = t  # local t and not account for scr refresh
        slide_stop.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slide_stop, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'slide_stop.started')
        slide_stop.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_3.started')
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # start/stop sound_stop
    if sound_stop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_stop.frameNStart = frameN  # exact frame index
        sound_stop.tStart = t  # local t and not account for scr refresh
        sound_stop.tStartRefresh = tThisFlipGlobal  # on global time
        # add timestamp to datafile
        thisExp.addData('sound_stop.started', tThisFlipGlobal)
        sound_stop.play(when=win)  # sync with win flip
    if sound_stop.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_stop.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            sound_stop.tStop = t  # not accounting for scr refresh
            sound_stop.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sound_stop.stopped')
            sound_stop.stop()
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in earlyStopComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "earlyStop" ---
for thisComponent in earlyStopComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_5
end_all_time = globalClock.getTime()

total_time = end_all_time - start_all_time
thisExp.addData('total_time',total_time)
thisExp.addData('end_all_time', 'end_all_time')
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.nextEntry()
sound_stop.stop()  # ensure sound has stopped at end of routine
# the Routine "earlyStop" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
mini_instr2_trials = data.TrialHandler(nReps=instrep2, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='mini_instr2_trials')
thisExp.addLoop(mini_instr2_trials)  # add the loop to the experiment
thisMini_instr2_trial = mini_instr2_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisMini_instr2_trial.rgb)
if thisMini_instr2_trial != None:
    for paramName in thisMini_instr2_trial:
        exec('{} = thisMini_instr2_trial[paramName]'.format(paramName))

for thisMini_instr2_trial in mini_instr2_trials:
    currentLoop = mini_instr2_trials
    # abbreviate parameter names if possible (e.g. rgb = thisMini_instr2_trial.rgb)
    if thisMini_instr2_trial != None:
        for paramName in thisMini_instr2_trial:
            exec('{} = thisMini_instr2_trial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "instr_2" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_12
    #audioStim3.stop(reset=False)
    if showearly == 1:
        continueRoutine = False
        
    # load slides according to index
    slideStim2 = slideStim = 'conditions/schedules/%s_first/%s_00/%s/instructions/Slide%d.png' % (
        expInfo['train_first'],
        expInfo['00_coordinate'],
        expInfo['starting corner'],
        startidx2
    )
    thisExp.addData('slideStim', slideStim)
    
    audioStim3 = slideStim = 'conditions/schedules/%s_first/%s_00/%s/instructions/Audio%d.wav' % (
        expInfo['train_first'],
        expInfo['00_coordinate'],
        expInfo['starting corner'],
        startidx2
    )
    thisExp.addData('audioStim', audioStim)
    
    # note, startidx is increased in 'nextButton' component; once button pressed, idx goes up by 1
    slides_2.setImage(slideStim2)
    sounds_3.setSound(audioStim3, hamming=True)
    sounds_3.setVolume(1.0, log=False)
    # keep track of which components have finished
    instr_2Components = [slides_2, nextButton_2, nextBox_2, nextText_2, prev_but_2, prev_box_2, prev_text_2, sounds_3]
    for thisComponent in instr_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr_2" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *slides_2* updates
        if slides_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slides_2.frameNStart = frameN  # exact frame index
            slides_2.tStart = t  # local t and not account for scr refresh
            slides_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slides_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slides_2.started')
            slides_2.setAutoDraw(True)
        
        # *nextButton_2* updates
        if nextButton_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            nextButton_2.frameNStart = frameN  # exact frame index
            nextButton_2.tStart = t  # local t and not account for scr refresh
            nextButton_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextButton_2, 'tStartRefresh')  # time at next scr refresh
            nextButton_2.setAutoDraw(True)
        if nextButton_2.status == STARTED:
            # check whether nextButton_2 has been pressed
            if nextButton_2.isClicked:
                if not nextButton_2.wasClicked:
                    nextButton_2.timesOn.append(nextButton_2.buttonClock.getTime()) # store time of first click
                    nextButton_2.timesOff.append(nextButton_2.buttonClock.getTime()) # store time clicked until
                else:
                    nextButton_2.timesOff[-1] = nextButton_2.buttonClock.getTime() # update time clicked until
                if not nextButton_2.wasClicked:
                    continueRoutine = False  # end routine when nextButton_2 is clicked
                    startidx2 += 1
                    button_name = "next"
                nextButton_2.wasClicked = True  # if nextButton_2 is still clicked next frame, it is not a new click
            else:
                nextButton_2.wasClicked = False  # if nextButton_2 is clicked next frame, it is a new click
        else:
            nextButton_2.wasClicked = False  # if nextButton_2 is clicked next frame, it is a new click
        
        # *nextBox_2* updates
        if nextBox_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextBox_2.frameNStart = frameN  # exact frame index
            nextBox_2.tStart = t  # local t and not account for scr refresh
            nextBox_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextBox_2, 'tStartRefresh')  # time at next scr refresh
            nextBox_2.setAutoDraw(True)
        
        # *nextText_2* updates
        if nextText_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextText_2.frameNStart = frameN  # exact frame index
            nextText_2.tStart = t  # local t and not account for scr refresh
            nextText_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextText_2, 'tStartRefresh')  # time at next scr refresh
            nextText_2.setAutoDraw(True)
        
        # *prev_but_2* updates
        if prev_but_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            prev_but_2.frameNStart = frameN  # exact frame index
            prev_but_2.tStart = t  # local t and not account for scr refresh
            prev_but_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prev_but_2, 'tStartRefresh')  # time at next scr refresh
            prev_but_2.setAutoDraw(True)
        if prev_but_2.status == STARTED:
            # check whether prev_but_2 has been pressed
            if prev_but_2.isClicked:
                if not prev_but_2.wasClicked:
                    prev_but_2.timesOn.append(prev_but_2.buttonClock.getTime()) # store time of first click
                    prev_but_2.timesOff.append(prev_but_2.buttonClock.getTime()) # store time clicked until
                else:
                    prev_but_2.timesOff[-1] = prev_but_2.buttonClock.getTime() # update time clicked until
                if not prev_but_2.wasClicked:
                    continueRoutine = False  # end routine when prev_but_2 is clicked
                    if startidx2 > 1:
                        startidx2 -= 1
                    button_name = "previous"
                prev_but_2.wasClicked = True  # if prev_but_2 is still clicked next frame, it is not a new click
            else:
                prev_but_2.wasClicked = False  # if prev_but_2 is clicked next frame, it is a new click
        else:
            prev_but_2.wasClicked = False  # if prev_but_2 is clicked next frame, it is a new click
        
        # *prev_box_2* updates
        if prev_box_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prev_box_2.frameNStart = frameN  # exact frame index
            prev_box_2.tStart = t  # local t and not account for scr refresh
            prev_box_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prev_box_2, 'tStartRefresh')  # time at next scr refresh
            prev_box_2.setAutoDraw(True)
        
        # *prev_text_2* updates
        if prev_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prev_text_2.frameNStart = frameN  # exact frame index
            prev_text_2.tStart = t  # local t and not account for scr refresh
            prev_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prev_text_2, 'tStartRefresh')  # time at next scr refresh
            prev_text_2.setAutoDraw(True)
        # start/stop sounds_3
        if sounds_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sounds_3.frameNStart = frameN  # exact frame index
            sounds_3.tStart = t  # local t and not account for scr refresh
            sounds_3.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sounds_3.started', tThisFlipGlobal)
            sounds_3.play(when=win)  # sync with win flip
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr_2" ---
    for thisComponent in instr_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_12
    # finish routine once hit slide number
    # startidx is increased with each button press
    
    if startidx2 > maxSlide2:
        mini_instr2_trials.finished = True
        loopidx2+=1
    mini_instr2_trials.addData('nextButton_2.numClicks', nextButton_2.numClicks)
    if nextButton_2.numClicks:
       mini_instr2_trials.addData('nextButton_2.timesOn', nextButton_2.timesOn)
       mini_instr2_trials.addData('nextButton_2.timesOff', nextButton_2.timesOff)
    else:
       mini_instr2_trials.addData('nextButton_2.timesOn', "")
       mini_instr2_trials.addData('nextButton_2.timesOff', "")
    mini_instr2_trials.addData('prev_but_2.numClicks', prev_but_2.numClicks)
    if prev_but_2.numClicks:
       mini_instr2_trials.addData('prev_but_2.timesOn', prev_but_2.timesOn)
       mini_instr2_trials.addData('prev_but_2.timesOff', prev_but_2.timesOff)
    else:
       mini_instr2_trials.addData('prev_but_2.timesOn', "")
       mini_instr2_trials.addData('prev_but_2.timesOff', "")
    sounds_3.stop()  # ensure sound has stopped at end of routine
    # the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed instrep2 repeats of 'mini_instr2_trials'


# --- Prepare to start Routine "endExp" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from bye_code
#endlate.stop(reset=False)
if showearly == 1:
    continueRoutine = False
    #endlate = "stimuli/instructions/Audio_earlystop.wav"
    #sound_1.isFinished = True
# keep track of which components have finished
endExpComponents = [bye]
for thisComponent in endExpComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "endExp" ---
while continueRoutine and routineTimer.getTime() < 3.0:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *bye* updates
    if bye.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        bye.frameNStart = frameN  # exact frame index
        bye.tStart = t  # local t and not account for scr refresh
        bye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(bye, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'bye.started')
        bye.setAutoDraw(True)
    if bye.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > bye.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            bye.tStop = t  # not accounting for scr refresh
            bye.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bye.stopped')
            bye.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endExpComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "endExp" ---
for thisComponent in endExpComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from bye_code
end_all_time = globalClock.getTime()

total_time = end_all_time - start_all_time
thisExp.addData('total_time',total_time)
thisExp.addData('end_all_time', 'end_all_time')

#import shutil
#source_file = thisExp.dataFileName + '.csv'
#target_path = 'Z:\private\children_task_data'
#shutil.copy(source_file, target_path)
# using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
if routineForceEnded:
    routineTimer.reset()
else:
    routineTimer.addTime(-3.000000)

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
