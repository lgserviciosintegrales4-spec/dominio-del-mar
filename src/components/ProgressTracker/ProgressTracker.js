/**
 * Componente ProgressTracker — Seguimiento de Avance y Vigencia por Fecha de Examen COEV PNA
 */
export class ProgressTracker {
  constructor(storageKey = 'ddm_pna_progress') {
    this.storageKey = storageKey;
  }

  checkSubscriptionStatus(examDateIso) {
    if (!examDateIso) return { active: true, status: 'PENDIENTE_FECHA_COEV' };
    const now = new Date();
    const examEnd = new Date(examDateIso + 'T23:59:59');
    const expired = now > examEnd;
    return {
      active: !expired,
      examDateIso,
      status: expired ? 'SUSCRIPCION_FINALIZADA_EXAMEN_RENDIDO' : 'SUSCRIPCION_ACTIVA_HASTA_EXAMEN_PNA'
    };
  }
}
