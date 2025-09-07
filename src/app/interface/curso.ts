export interface Curso {
  code: string;
  name: string;
  credits: number;
  requisites?: string[];
  quarter: number;
}
