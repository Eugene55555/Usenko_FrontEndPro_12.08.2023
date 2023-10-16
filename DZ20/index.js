import Stopwatch from './stopwatch.js';
import StopwatchUI from './stopwatch-ui.js';

const initialTime1 = { hours: 0, minutes: 0, seconds: 0 };
const ui1 = new StopwatchUI(initialTime1);
const stopwatch1 = new Stopwatch(time => ui1.setTime(time));

ui1.addStartBtnListener(() => stopwatch1.start());
ui1.addPauseBtnListener(() => stopwatch1.pause());
ui1.addResetBtnListener(() => stopwatch1.reset());

ui1.appendStopwatch(document.getElementById('stopwatch1'));

const initialTime2 = { hours: 0, minutes: 0, seconds: 0 };
const ui2 = new StopwatchUI(initialTime2);
const stopwatch2 = new Stopwatch(time => ui2.setTime(time));

ui2.addStartBtnListener(() => stopwatch2.start());
ui2.addPauseBtnListener(() => stopwatch2.pause());
ui2.addResetBtnListener(() => stopwatch2.reset());

ui2.appendStopwatch(document.getElementById('stopwatch2'));