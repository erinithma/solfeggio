export default class SoundTrack {
  
    constructor(context, buffer) {
      this.context = context;
      this.buffer = buffer;
      this.setup();
    }
    
    setup() {
      this.gainNode = this.context.createGain();
      this.source = this.context.createBufferSource();
      this.source.buffer = this.buffer;
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
    }
  
    play(time = 0, dur = 0) {
      this.gainNode.gain.setValueAtTime(0.8, this.context.currentTime + time);
      this.source.start(this.context.currentTime + time);
      if(dur) {
        let ct = this.context.currentTime + dur + 1;
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
        this.source.stop(ct);
      }
    }
    
    stop(time = 0) {
      var ct = this.context.currentTime + time + 1;
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
      this.source.stop(ct);
    }
    
  }