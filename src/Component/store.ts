import {createStore} from 'redux';
import React, { useState, useRef } from "react";
import {reducerWithInitialState} from 'typescript-fsa-reducers';

export type appState = {
    bools: boolean;
    A_top: number;
    A_bord: number;
    A_rotate: number;
    A_width: number;
    RS_delay_first: number;
    A_Big: number;
}

const initState: appState = {
    bools: false,
    A_top: 100,
    A_bord: 0,
    A_rotate: 180,
    A_width: 0,
    RS_delay_first: 200,
    A_Big: 1,
}

export const reducers = (state: appState = initState, action: { type: string; }) => {
    switch(action.type) {
        case 'NAV_OPEN': 
            return {...state, A_top:0, A_rotate:0, A_width:100, A_Big: 1.2, bools: !state.bools};
        case 'NAV_CLOSED':
            return {...state, A_top:100, A_rotate: 180, A_width: 0, A_Big: 1, bools: !state.bools};
        default:
            return state;
    }
}

export const disp_open = (action: string) => {
    return {
        type: 'NAV_OPEN',
    }
}

export const disp_close = (action: string) => {
    return {
        type: 'NAV_CLOSED',
    }
}

const store = createStore(reducers);

export default store;