import moduleData from './module.json' with { type: 'json' };
import { Infographic } from '../../components/Infographic/Infographic.js';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer.js';

export function initModule(containerEl, canvasId) {
  const info = new Infographic(containerEl);
  info.render({
    title: moduleData.title,
    subtitle: moduleData.summary,
    svgUrl: moduleData.svg,
    callouts: moduleData.keyConcepts.map(k => ({ label: k.term, desc: k.definition })),
    normReference: moduleData.normativeSources.join(' · ')
  });
  const player = new VideoPlayer(canvasId);
  player.loadModuleScene(moduleData.template, moduleData.title, moduleData.summary);
  return moduleData;
}
export default moduleData;
