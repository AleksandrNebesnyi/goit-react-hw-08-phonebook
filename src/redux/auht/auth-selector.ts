import {RootState} from '../store'




export const getUserName = (state:any) => state?.auth?.user?.name  ?? null;

export const authUser = (state:RootState):boolean=> (state?.auth?.token ? true : false);

export const getToken = (state:RootState):string => state?.auth?.token ! ;
