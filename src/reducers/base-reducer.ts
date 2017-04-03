export interface Action {
  namespace: string;
  type: string;
  data: any;
  [key: string]: any;
}
