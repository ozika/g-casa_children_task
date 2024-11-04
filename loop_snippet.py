experiment = data.TrialHandler(nReps=nrepExp, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions/inputTest.xlsx'),
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