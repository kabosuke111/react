import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Actions } from './actions';

export interface State {
//ここにstoreが持つstateを書く
    offset_Y: number;
}

export const initialState: State = {
//ここにstateの初期値を書く
    offset_Y: 0,
}

export const Reducer = reducerWithInitialState(initialState)
.case(Actions.update_offset_Y, (state, offset_Y) => {
    return { ...state, offset_Y: state.offset_Y}
})