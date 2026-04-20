export type DocumentStatus = 'missing' | 'uploaded' | 'verified';

export interface AppDocument {
  id: string;
  title: string;
  status: DocumentStatus;
  description: string;
  requirements: string[];
  sampleText?: string;
  fileUrl?: string; // Mock for uploaded file path
}
