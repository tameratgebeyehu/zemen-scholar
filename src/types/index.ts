import { StepStatus } from '../services/storageService';


export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  checklists: string[];
}

export interface DocumentGuide {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whyItMatters: string;
  prepSteps: string[];
  tips: string[];
  mistakes: string[];
}

export interface OfflineStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  checklist: string[];
  tips?: string[];
  mistakes?: string[];
}
