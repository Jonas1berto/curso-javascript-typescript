import React, { useEffect, useCallback } from 'react'
import { useInterval } from '../hooks/use-interval'
import { secondsToTime } from '../utils/seconds-to-time'
import { Button } from './button'
import { Timer } from './timer'

const bellStart = require('../sounds/src_sounds_bell-start.mp3')
const bellFinish = require('../sounds/src_sounds_bell-finish.mp3')

const audioStartWorking = new Audio(bellStart)
const audioStopWorking = new Audio(bellFinish)

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime)
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false)
  const [resting, setResting] = React.useState(false)
  const [cyclesQtdManager, setCyclesQtdManager] = React.useState(new Array(props.cycles - 1).fill(true))

  const [completedCycles, setCompletedCycles] = React.useState(0)
  const [fullWorkingTime, setFullWorkingTime] = React.useState(0)
  const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0)


  useInterval(() => {
    setMainTime(mainTime - 1)
    if (working) setFullWorkingTime(fullWorkingTime + 1)
  },
  timeCounting ? 1000 : null,
  )

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true)
    setResting(false)
    setMainTime(props.pomodoroTime)
    audioStartWorking.play()
  }, [setTimeCounting, setWorking, setResting, setMainTime, props.pomodoroTime])

  const configureResting = useCallback((long: boolean) => {
    setTimeCounting(true);
    setWorking(false)
    setResting(true)

    if (long) {
      setMainTime(props.longRestTime)
    } else {
      setMainTime(props.shortRestTime)
    }
    audioStopWorking.play()
  }, [setTimeCounting, setWorking, setResting, setMainTime, props.longRestTime, props.shortRestTime ])

  useEffect(() => {
    if (working) document.body.classList.add('working')
    if (resting) document.body.classList.remove('working')

    if (mainTime > 0) return

    if (working && cyclesQtdManager.length > 0) {
      configureResting(false)
      cyclesQtdManager.pop()
    } else if (working && cyclesQtdManager.length <= 0) {
      configureResting(true)
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true))
      setCompletedCycles(completedCycles + 1)
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1)
    if (resting) configureWork()
  }, [working, resting, mainTime, configureResting, setCyclesQtdManager, cyclesQtdManager, configureWork, props.cycles, completedCycles])

  return (
    <div className="pomodoro">
      <h2>Você está: {working ? 'Trabalhando' : 'Descansando'}</h2>
      <Timer mainTimer={mainTime}/>

      <div className="controls">
      <Button text='Work' onClick={() => configureWork()}></Button>
      <Button text='Resting' onClick={() => configureResting(false)}></Button>
      <Button
      className={!working && !resting ? 'hidden' : ''}
      text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)}></Button>
      </div>

      <div className="details">
        <p>Cíclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>
    </div>
  )
}
