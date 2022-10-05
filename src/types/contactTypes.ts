

export interface IContact {
    id:string;
    name:string;
    phone:string;
  }
 export  interface IContactBody {
  
    name: string;
    phone: string;
}


export type TContactsResponse = IContact[]