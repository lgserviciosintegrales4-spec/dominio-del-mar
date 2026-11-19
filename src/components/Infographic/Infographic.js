/**
 * Componente Infographic — Renderizador de Planos Técnicos estilo "Código Náutico"
 * Paleta: Pergamino #F4F1E8, Tinta #162942, Corte de Mar #2C73B4, Acento #E26D24
 */
export class Infographic {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
  }

  render({ title, subtitle, svgUrl, callouts = [], normReference = '' }) {
    if (!this.container) return;
    this.container.innerHTML = `
      <figure class="ddm-infographic" style="background:#F4F1E8;border:2px solid #162942;border-radius:10px;padding:16px;color:#162942;">
        <header style="border-bottom:2px solid #E26D24;padding-bottom:8px;margin-bottom:12px;">
          <div style="font-size:11px;font-weight:800;color:#E26D24;letter-spacing:1.2px;">PLANO DE INGENIERÍA NAVAL · CÓDIGO NÁUTICO</div>
          <h3 style="margin:4px 0;font-family:Montserrat,sans-serif;font-weight:900;">${title}</h3>
          <p style="margin:0;font-size:13px;color:#2C73B4;font-weight:600;">${subtitle || ''}</p>
        </header>
        <div class="ddm-infographic-canvas">
          <img src="${svgUrl}" alt="${title}" style="width:100%;height:auto;display:block;border:1px solid #162942;" />
        </div>
        <ul style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px;margin-top:12px;padding:0;list-style:none;">
          ${callouts.map(c => `<li style="background:#EDE7D8;padding:6px 10px;border-left:3px solid #E26D24;font-size:12px;"><strong>●──── ${c.label}:</strong> ${c.desc}</li>`).join('')}
        </ul>
        <footer style="margin-top:10px;font-size:11px;font-family:monospace;color:#162942;">Fuente Reglamentaria: ${normReference}</footer>
      </figure>
    `;
  }
}
