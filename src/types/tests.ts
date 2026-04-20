export type SkillType = 'reading' | 'writing' | 'listening' | 'speaking' | 'overall';

export interface TestCategory {
  id: string;
  name: string;
  shortDescription: string;
  targetScore: string;
  progress: number; // 0 to 1
}

export interface Lesson {
  id: string;
  testId: string;
  title: string;
  explanation: string;
  example: string;
  keyTips: string[];
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface Question {
  id: string;
  testId: string;
  text: string;
  options: QuestionOption[];
}
