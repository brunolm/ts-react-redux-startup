import { Component } from '@types/react-redux';

export interface ProviderProps {
  store?: Store<any>;
  children?: ReactNode;
}
export declare class Provider extends Component<ProviderProps, {}> { }
