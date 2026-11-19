/**
 * Componente ShipSimulator — Simulador Cinemático de Maniobras RIPA, Luces y Balizamiento IALA B
 */
export class ShipSimulator {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext('2d') : null;
  }

  evaluateRipaScenario({ bearingDeg, ownVesselType, targetVesselType, visibilityMiles }) {
    if (visibilityMiles < 0.5) {
      return {
        rule: 'Regla 19 RIPA (Conducta en Visibilidad Reducida)',
        action: 'Ningún buque tiene prioridad. Reducir a velocidad de seguridad y evitar caer a babor para buque a proa del través.'
      };
    }
    if (ownVesselType === 'power' && targetVesselType === 'sail') {
      return {
        rule: 'Regla 18(a)(iv) RIPA (Obligaciones entre Categorías)',
        action: 'El buque de propulsión mecánica se mantiene apartado de la derrota del buque de vela.'
      };
    }
    if (bearingDeg >= 0 && bearingDeg <= 112.5) {
      return {
        rule: 'Regla 15 y 16 RIPA (Situación de Cruce por Estribor)',
        action: 'Usted es el buque que CEDE EL PASO (ve la luz roja de babor del otro). Caiga francamente a ESTRIBOR (1 pitada corta ●).'
      };
    }
    return {
      rule: 'Regla 17 RIPA (Buque que sigue a rumbo)',
      action: 'Mantenga rumbo y velocidad con vigilancia constante (Regla 5). Si el obligado no maniobra, emita 5 pitadas cortas (●●●●●).'
    };
  }
}
