import { Component } from '@angular/core';
import { Curso } from '../interface/curso';
import { CommonModule } from '@angular/common';

type group = { quarter: number; cursos: Curso[] };

@Component({
  selector: 'app-malla',
  templateUrl: './malla.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./malla.component.css']
})
export class MallaComponent {

  ngOnInit() {
    const saved = localStorage.getItem('completedCourses');
    if (saved) {
      this.completedCourses = new Set(JSON.parse(saved));
    }
  }

  cursos: Curso[] = [
    // PRIMER CUATRIMESTRE
    { code: 'FA0113', name: 'Introducción a la Farmacia', credits: 3, requisites: [], quarter: 1 },
    { code: 'SS0113', name: 'Salud y Sociedad', credits: 3, requisites: [], quarter: 1 },
    { code: 'G0113', name: ' Expresión Oral y Escrita', credits: 3, requisites: [], quarter: 1 },
    { code: 'MA0113', name: 'Matemática I', credits: 3, requisites: [], quarter: 1 },
    { code: 'QU0113', name: 'Química General I', credits: 3, requisites: [], quarter: 1 },
    { code: 'IN0113', name: 'Introducción a la Informática', credits: 3, requisites: [], quarter: 1 },
    // SEGUNDO CUATRIMESTRE
    { code: 'EG0133', name: 'Historia y Desarrollo Cultural de Centroamérica', credits: 3, requisites: [], quarter: 2 },
    { code: 'BG0123', name: 'Biología General', credits: 3, requisites: [], quarter: 2 },
    { code: 'EG0123', name: 'Metodología de Investigación', credits: 3, requisites: [], quarter: 2 },
    { code: 'MA0123', name: 'Matemática II', credits: 3, requisites: ['MA0113'], quarter: 2 },
    { code: 'QU0123', name: 'Química General II', credits: 3, requisites: ['QU0113'], quarter: 2 },
    { code: 'FG0123', name: 'Física General ', credits: 3, requisites: ['MA0113'], quarter: 2 },
    // TERCER CUATRIMESTRE
    { code: 'FA0223', name: 'Administración Farmacéutica I', credits: 2, requisites: [], quarter: 3 },
    { code: 'BE0134', name: 'Bioestadística', credits: 4, requisites: ['MA0123'], quarter: 3 },
    { code: 'QO0134', name: 'Química Orgánica I', credits: 4, requisites: ['QU0123'], quarter: 3 },
    { code: 'MO0134', name: 'Anatomía General', credits: 5, requisites: ['BG0123'], quarter: 3 },
    { code: 'FA133', name: 'Fitoquímica', credits: 3, requisites: ['QU0123'], quarter: 3 },
    // CUARTO CUATRIMESTRE
    { code: 'FA0263', name: 'Administración Farmacéutica II', credits: 2, requisites: ['FA0223'], quarter: 4 },
    { code: 'ED0143', name: 'Epidemiología y Demografía', credits: 2, requisites: ['BE0134'], quarter: 4 },
    { code: 'QO0144', name: 'Química Orgánica II', credits: 4, requisites: ['QO0134'], quarter: 4 },
    { code: 'FS0144', name: 'Fisiología', credits: 6, requisites: ['FG0123', 'MO0134'], quarter: 4 },
    { code: 'AA0343', name: 'Química Analítica Cuantitativa', credits: 4, requisites: ['QU0123', 'QO0134', 'BE0134'], quarter: 4 },
    // QUINTO CUATRIMESTRE
    { code: 'FA0453', name: 'Farmacognosia I', credits: 3, requisites: ['QO0144'], quarter: 5 },
    { code: 'FA0553', name: 'Físico Farmacia I', credits: 3, requisites: ['MA0123', 'FG0123'], quarter: 5 },
    { code: 'BQ0154', name: 'Bioquímica', credits: 4, requisites: ['QO0144', 'MO0134'], quarter: 5 },
    { code: 'FP0154', name: 'Fisiopatología I', credits: 4, requisites: ['FS0144'], quarter: 5 },
    { code: 'LM0162', name: 'Inglés I', credits: 2, requisites: [], quarter: 5 },
    { code: 'EO0011', name: 'Curso Optativo I', credits: 1, requisites: [], quarter: 5 },
    // SEXTO CUATRIMESTRE
    { code: 'FA0463', name: 'Farmacognosia II', credits: 3, requisites: ['FA0453'], quarter: 6 },
    { code: 'FA0563', name: 'Físico Farmacia II', credits: 3, requisites: ['FA0553'], quarter: 6 },
    { code: 'FA0653', name: 'Farmacología I', credits: 4, requisites: ['FS0144', 'BQ0154'], quarter: 6 },
    { code: 'FP0164', name: 'Fisiopatología II', credits: 4, requisites: ['FP0154'], quarter: 6 },
    { code: 'FA1283', name: 'Ética y legislación Farmacéutica', credits: 2, requisites: ['SS0113'], quarter: 6 },
    { code: 'LM0172', name: 'Inglés II', credits: 2, requisites: ['LM0162'], quarter: 6 },
    // SEPTIMO CUATRIMESTRE
    { code: 'MQ0143', name: 'Microbiología', credits: 3, requisites: ['BG0123'], quarter: 7 },
    { code: 'FA0774', name: 'Química Medicinal I', credits: 3, requisites: ['FA0463', 'FA0563', 'FA0653', 'BQ0154'], quarter: 7 },
    { code: 'FA0663', name: 'Farmacología II', credits: 4, requisites: ['FA0653'], quarter: 7 },
    { code: 'FA1074', name: 'Análisis de Drogas I', credits: 4, requisites: ['FA0563', 'FA0553', 'AA0343'], quarter: 7 },
    { code: 'LM0182', name: 'Inglés Técnico', credits: 2, requisites: ['LM0172'], quarter: 7 },
    { code: 'FA1614', name: 'Biofarmacia', credits: 3, requisites: ['FA0663', 'FS0144'], quarter: 7 },
    // OCTAVO CUATRIMESTRE
    { code: 'FA2023', name: 'Investigación Dirigida', credits: 3, requisites: ['EG0123'], quarter: 8 },
    { code: 'FA0784', name: 'Química Medicinal II', credits: 3, requisites: ['FA0774'], quarter: 8 },
    { code: 'FA1084', name: 'Análisis de Drogas II', credits: 3, requisites: ['FA1074'], quarter: 8 },
    { code: 'FA0673', name: 'Farmacología III', credits: 4, requisites: ['FA0663'], quarter: 8 },
    { code: 'FA1924', name: 'Control de calidad I', credits: 4, requisites: ['BE0134'], quarter: 8 },
    { code: 'CO0782', name: 'Curso Optativo II', credits: 1, requisites: [], quarter: 8 },
    // NOVENO CUATRIMESTRE
    { code: 'FA1714', name: 'Control de Calidad II', credits: 4, requisites: ['FA1924'], quarter: 9 },
    { code: 'FA1313', name: 'Toxicología', credits: 4, requisites: ['FA0673', 'FP0164'], quarter: 9 },
    { code: 'FA1184', name: 'Fundamentos de Visita Médica', credits: 2, requisites: ['FA0673'], quarter: 9 },
    { code: 'FA0873', name: 'Atención Farmacéutica I', credits: 3, requisites: ['FA0673'], quarter: 9 },
    { code: 'FA1413', name: 'Homeopatía', credits: 2, requisites: ['FA0673'], quarter: 9 },
    { code: 'FA1514', name: 'Farmacia Industrial I', credits: 3, requisites: ['FA0673'], quarter: 9 },
    // DÉCIMO CUATRIMESTRE
    { code: 'FA0973', name: 'Terapéutica', credits: 2, requisites: ['FA0673'], quarter: 10 },
    { code: 'FA009', name: 'Integrando Conocimiento del perfil farmacéutico', credits: 2, requisites: ['FA0873'], quarter: 10 },
    { code: 'FA0103', name: 'Farmacocinética Clínica', credits: 3, requisites: ['FA1614'], quarter: 10 },
    { code: 'FA1624', name: 'Farmacia Industrial II', credits: 3, requisites: ['FA1514'], quarter: 10 },
    { code: 'FA1824', name: 'Farmacia Hospitalaria', credits: 4, requisites: ['FA0673'], quarter: 10 },
    { code: 'FA1063', name: 'Atención Farmacéutica II', credits: 3, requisites: ['FA0873'], quarter: 10 },
    // ONCEAVO CUATRIMESTRE
    { code: 'FA1101', name: 'Internado', credits: 1, requisites: ['FA0973', 'FA009', 'FA0103', 'FA1624', 'FA1824', 'FA1063'], quarter: 11 }

  ];
  trackByCurso = (_: number, c: Curso) => c.code;

  completedCourses = new Set<String>();
  totalCourseCount = this.cursos.length;
  progress = () => Math.round((this.completedCourses.size / this.totalCourseCount) * 100);

  get groupsByQuarter(): group[] {
    const sorted = [...this.cursos].sort((a, b) => a.quarter - b.quarter || a.code.localeCompare(b.code));
    const map = new Map<number, Curso[]>();
    for (const curso of sorted) {
      if (!map.has(curso.quarter)) map.set(curso.quarter, []);
      map.get(curso.quarter)?.push(curso);
    }
    return [...map.entries()].map(([quarter, cursos]) => ({ quarter, cursos }));
  }

  toggleCompleted(curso: Curso) {
    if (this.isBlocked(curso)) {
      this.warningMissingReqs(curso);
      return;
    }
    if (this.completedCourses.has(curso.code)) {
      this.completedCourses.delete(curso.code);
    } else {
      this.completedCourses.add(curso.code);
    }

    localStorage.setItem(
      'completedCourses', JSON.stringify(Array.from(this.completedCourses))
    );

  }

  isCompleted(id: String): boolean {
    return this.completedCourses.has(id);
  }

  isBlocked(curso: Curso): boolean {
    const req = curso.requisites ?? [];
    if (req.length === 0) return false;

    const todosCumplidos = req.every(r => this.completedCourses.has(String(r)));
    return !todosCumplidos;
  }

  warningMissingReqs(curso: Curso): void {
    const reqs = (curso.requisites ?? []).map(String);
    const missing = reqs.filter(r => !this.completedCourses.has(r));

    alert(`No puedes completar "${curso.name}". Faltan requisitos: ${missing.join(', ') || '(desconocidos)'}`);
  }
  isLastQuarter(cuatrimestre: number): boolean {
    const maxQuarter = Math.max(...this.cursos.map(c => c.quarter));
    return cuatrimestre === maxQuarter;
  }
  isLastGroup(group: group): boolean {
    const maxQuarter = Math.max(...this.cursos.map(c => c.quarter));
    return group.quarter === maxQuarter;
  }
}

