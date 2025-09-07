import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'

export class Notes extends Contract {
 todolist = GlobalState<string>({
    key: "Notelist",
    initialValue : " "
 })

 Addtodo(title:string, description:string):string {
    this.todolist.value = title + "" +  description;
    return title;
 }
}
