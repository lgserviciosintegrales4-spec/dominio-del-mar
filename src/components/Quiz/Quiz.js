/**
 * Componente Quiz — Evaluador con Corrección Automática y Fundamentación Reglamentaria PNA
 */
export class Quiz {
  constructor(questions = []) {
    this.questions = questions;
  }

  gradeSubmission(userAnswers = {}) {
    let correctCount = 0;
    const details = this.questions.map((q, idx) => {
      const selected = userAnswers[idx];
      const isCorrect = selected === q.correctIndex;
      if (isCorrect) correctCount++;
      return {
        question: q.question,
        selectedAnswer: q.options[selected] || 'Sin responder',
        correctAnswer: q.options[q.correctIndex],
        isCorrect,
        explanation: q.explanation,
        norm: q.norm
      };
    });
    const scorePct = this.questions.length ? Math.round((correctCount / this.questions.length) * 100) : 0;
    return {
      scorePct,
      passed: scorePct >= 75,
      requiredPct: 75,
      correctCount,
      total: this.questions.length,
      details
    };
  }
}
