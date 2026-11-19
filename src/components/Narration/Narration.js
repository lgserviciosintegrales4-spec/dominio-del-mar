/**
 * Componente Narration — Síntesis de Voz Naval (es-AR) y Subtítulos WebVTT
 */
export class Narration {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.enabled = true;
  }

  speak(text, lang = 'es-AR') {
    if (!this.synth || !this.enabled || !text) return;
    this.synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1.0;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) this.synth.cancel();
  }
}
