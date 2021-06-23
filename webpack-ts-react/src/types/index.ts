import { Dispatch, SetStateAction } from "react";

export interface InputState {
    value: string;
    isTouched: boolean;
}

export type Reducer<State, Action> = (state: State, action: Action) => State;

export enum ActionType {
    Input = "INPUT",
    Blur = "BLUR",
    Reset = "RESET",
}

export type Action = {
    type: ActionType;
    payload: number;
};

export interface VerbSubmitHandler {
    submitVerb: (value: string) => void;
}

export interface GeminationInfo {
    el: string;
    geminated: boolean;
}
