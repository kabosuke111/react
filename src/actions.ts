import { actionCreatorFactory } from '../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

export const Actions = {
    update_offset_Y: actionCreator<number>('CHANGE_OFFSET_Y'),
}