import {RootState} from '../store';

// селектор получения части стейта хранящего значение фильтра

export const getFilter = (state:RootState):string => state.filter;
