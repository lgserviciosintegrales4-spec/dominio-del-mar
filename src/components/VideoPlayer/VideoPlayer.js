/**
 * Componente VideoPlayer — Reproductor Vectorial Naval sincronizado con NauticalVideoEngine
 */
export class VideoPlayer {
  constructor(canvasId, engine = window.NauticalVideoEngine) {
    this.canvasId = canvasId;
    this.engine = engine;
  }

  loadModuleScene(templateKey, title, subtitle, scenes = []) {
    if (!this.engine) return;
    this.engine.currentSceneKey = templateKey;
    this.engine.title = title;
    this.engine.subtitle = subtitle;
    this.engine.scenes = scenes;
    this.engine.currentSceneIdx = 0;
    this.engine.progress = 0;
    this.engine.drawFrame();
  }

  play() {
    if (this.engine) this.engine.togglePlay();
  }
}
