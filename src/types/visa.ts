export type ProcessFlowType = 'application' | 'visa';
export type ProcessStepStatus = 'locked' | 'active' | 'completed';

export interface ProcessChecklistItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ProcessStep {
  id: string;
  flowType: ProcessFlowType;
  stepNumber: number;
  title: string;
  description: string;
  status: ProcessStepStatus;
  checklist: ProcessChecklistItem[];
  tips?: string[];
  warnings?: string[];
  actionLabel?: string;
}
