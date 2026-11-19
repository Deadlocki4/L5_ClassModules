import { ExamGrade } from './ExamGrade.js';

const grades = [
  new ExamGrade(9, 'Математика', true, false),
  new ExamGrade(6, 'Физика', false, true),
];

grades.forEach((grade) => grade.show());
