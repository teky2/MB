/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

type SoundscapeType = 'drone' | 'battlefield' | 'chakravyuha' | 'gita' | 'sabha' | 'wind';

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = true;
  private currentSoundscape: SoundscapeType = 'drone';
  private activeNodes: { [key: string]: any } = {};
  private loopInterval: number | null = null;

  public init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.6, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn('Web Audio not supported on this browser', e);
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended' && !muted) {
      this.ctx.resume();
    }
    if (this.masterGain && this.ctx) {
      const targetGain = muted ? 0 : 0.65;
      this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.4);
    }
    if (!muted && Object.keys(this.activeNodes).length === 0) {
      this.playCurrentSoundscape();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public setSoundscape(type: SoundscapeType) {
    if (this.currentSoundscape === type && Object.keys(this.activeNodes).length > 0) return;
    this.currentSoundscape = type;
    if (!this.isMuted) {
      this.stopCurrentSoundscape();
      this.playCurrentSoundscape();
    }
  }

  private stopCurrentSoundscape() {
    if (this.loopInterval) {
      window.clearInterval(this.loopInterval);
      this.loopInterval = null;
    }
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    Object.values(this.activeNodes).forEach((node: any) => {
      try {
        if (node.gain) {
          node.gain.setTargetAtTime(0, now, 0.5);
        }
        if (node.stop) {
          node.stop(now + 0.6);
        }
      } catch (err) {
        // ignore
      }
    });
    this.activeNodes = {};
  }

  private playCurrentSoundscape() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    switch (this.currentSoundscape) {
      case 'drone':
        this.startDroneScapes();
        break;
      case 'battlefield':
        this.startBattlefieldScapes();
        break;
      case 'chakravyuha':
        this.startChakravyuhaScapes();
        break;
      case 'gita':
        this.startGitaScapes();
        break;
      case 'sabha':
        this.startSabhaScapes();
        break;
      case 'wind':
        this.startHimalayanWindScapes();
        break;
    }
  }

  // Atmospheric Opening Drone & Singing Bowl
  private startDroneScapes() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Sub-bass 55Hz
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, now);
    gain1.gain.setValueAtTime(0.01, now);
    gain1.gain.exponentialRampToValueAtTime(0.35, now + 3);

    // Warm fifth 82.4Hz
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(82.4, now);
    gain2.gain.setValueAtTime(0.01, now);
    gain2.gain.exponentialRampToValueAtTime(0.15, now + 3);

    // Filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, now);
    filter.frequency.linearRampToValueAtTime(260, now + 6);

    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(filter);
    gain2.connect(filter);
    filter.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    this.activeNodes = { osc1, osc2, gain1, gain2, filter };
  }

  // Battlefield Winds, Conches & Distant Drums
  private startBattlefieldScapes() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Low rumble bass
    const rumble = this.ctx.createOscillator();
    const rumbleGain = this.ctx.createGain();
    rumble.type = 'sawtooth';
    rumble.frequency.setValueAtTime(65, now);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, now);

    rumbleGain.gain.setValueAtTime(0.01, now);
    rumbleGain.gain.linearRampToValueAtTime(0.2, now + 2);
    rumble.connect(filter);
    filter.connect(rumbleGain);
    rumbleGain.connect(this.masterGain);
    rumble.start(now);

    this.activeNodes = { rumble, rumbleGain, filter };

    // War drums every 4.2 seconds
    this.loopInterval = window.setInterval(() => {
      this.playWarDrumHit();
    }, 4200);
  }

  // Chakravyuha Claustrophobic Tension
  private startChakravyuhaScapes() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const baseOsc = this.ctx.createOscillator();
    const baseGain = this.ctx.createGain();
    baseOsc.type = 'triangle';
    baseOsc.frequency.setValueAtTime(43.6, now); // F1
    baseGain.gain.setValueAtTime(0.01, now);
    baseGain.gain.linearRampToValueAtTime(0.25, now + 2);

    baseOsc.connect(baseGain);
    baseGain.connect(this.masterGain);
    baseOsc.start(now);
    this.activeNodes = { baseOsc, baseGain };

    // Heartbeat-like battle pulse
    this.loopInterval = window.setInterval(() => {
      this.playTensionPulse();
    }, 1400);
  }

  // Bhagavad Gita - Cosmic Ethereal Shanti Drone
  private startGitaScapes() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // E-B-E Celestial Tanpura Chord (164.81Hz, 246.94Hz, 329.63Hz)
    const freqs = [164.81, 246.94, 329.63];
    const nodes: any = {};

    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12 / (idx + 1), now + 3);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      nodes[`osc_${idx}`] = osc;
      nodes[`gain_${idx}`] = gain;
    });

    this.activeNodes = nodes;
  }

  // Dyut Sabha - Echoing Vault & Torches
  private startSabhaScapes() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(58, now);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(110, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);

    this.activeNodes = { osc, gain, filter };

    // Occasional dice clatter
    this.loopInterval = window.setInterval(() => {
      if (Math.random() > 0.4) {
        this.playDiceClatter();
      }
    }, 5000);
  }

  // Himalayan Final Ascent Wind
  private startHimalayanWindScapes() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // High airy wind band
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(380, now);
    filter.Q.setValueAtTime(3, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 3);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    whiteNoise.start(now);

    this.activeNodes = { whiteNoise, filter, gain };
  }

  // Interactive Sound Effects
  public playSpokeHover() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.18); // A5

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.36);
  }

  public playPortalTransition() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.8);
    osc.frequency.exponentialRampToValueAtTime(110, now + 1.8);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 2.1);
  }

  public playWarDrumHit() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.35);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.85);
  }

  public playTensionPulse() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(75, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.32);
  }

  public playDiceClatter() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const delay = i * 0.07 + Math.random() * 0.04;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(240 + Math.random() * 200, now + delay);
      gain.gain.setValueAtTime(0.1, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + delay);
      osc.stop(now + delay + 0.09);
    }
  }

  public playChariotWheelRumble() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(40, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.65);
  }
}

export const audioEngine = new AudioEngine();
