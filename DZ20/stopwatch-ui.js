// stopwatch-ui.js
export default class StopwatchUI {
    constructor(initialTime) {
      this.initialTime = initialTime;
      this.clock = document.createElement('div');
      this.startButton = document.createElement('button');
      this.pauseButton = document.createElement('button');
      this.resetButton = document.createElement('button');
      
      this.clock.textContent = '00:00:00';
      this.startButton.textContent = 'Start';
      this.pauseButton.textContent = 'Pause';
      this.resetButton.textContent = 'Reset';
      
      this.startButton.addEventListener('click', () => this.onStartClick());
      this.pauseButton.addEventListener('click', () => this.onPauseClick());
      this.resetButton.addEventListener('click', () => this.onResetClick());
    }
    
    addStartBtnListener(callback) {
      this.startButton.addEventListener('click', callback);
    }
    
    addPauseBtnListener(callback) {
      this.pauseButton.addEventListener('click', callback);
    }
    
    addResetBtnListener(callback) {
      this.resetButton.addEventListener('click', callback);
    }
    
    appendStopwatch(element) {
      element.appendChild(this.clock);
      element.appendChild(this.startButton);
      element.appendChild(this.pauseButton);
      element.appendChild(this.resetButton);
    }
    
    setTime(time) {
      this.clock.textContent = `${this.formatNumber(time.hours)}:${this.formatNumber(time.minutes)}:${this.formatNumber(time.seconds)}`;
    }
    
    formatNumber(number) {
      return number < 10 ? `0${number}` : number.toString();
    }
    
    onStartClick() {
      this.startButton.disabled = true;
      this.pauseButton.disabled = false;
      this.resetButton.disabled = false;
    }
    
    onPauseClick() {
      this.startButton.disabled = false;
      this.pauseButton.disabled = true;
      this.resetButton.disabled = false;
    }
    
    onResetClick() {
      this.startButton.disabled = false;
      this.pauseButton.disabled = false;
      this.resetButton.disabled = true;
    }
  }