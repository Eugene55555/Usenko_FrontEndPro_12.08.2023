export default class Stopwatch {
    constructor(onTick) {
      this.onTick = onTick;
      this.intervalId = null;
      this.startTime = 0;
      this.elapsedTime = 0;
      this.running = false;
    }
    
    start() {
      if (!this.running) {
        this.startTime = Date.now() - this.elapsedTime;
        this.intervalId = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          this.onTick(this.formatTime(this.elapsedTime));
        }, 1000);
        this.running = true;
      }
    }
    
    pause() {
      if (this.running) {
        clearInterval(this.intervalId);
        this.running = false;
      }
    }
    
    reset() {
      this.elapsedTime = 0;
      this.onTick(this.formatTime(this.elapsedTime));
      
      if (this.running) {
        clearInterval(this.intervalId);
        this.running = false;
      }
    }
    
    formatTime(time) {
      const hours = Math.floor(time / 3600000);
      const minutes = Math.floor((time % 3600000) / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      
      return { hours, minutes, seconds };
    }
  }