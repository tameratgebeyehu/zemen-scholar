export type StepStatus = 'active' | 'completed' | 'locked';

export type SubTaskStatus = 'not-started' | 'in-progress' | 'completed';

export interface SubTaskItem {
  id: string;
  title: string;
  status: SubTaskStatus;
  type?: 'checklist' | 'action';
  actionLabel?: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  status: StepStatus;
  subTasks?: SubTaskItem[];
  actionLabel?: string;
  hasCustomContent?: boolean; // For university lists or specialized components inside
}
