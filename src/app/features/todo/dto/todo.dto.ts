
export class TodoDto{

  public userId:    number;
  public id?:        number;
  public completed: boolean;

  constructor(public title:string){
    this.userId = 1;
    this.completed = false;
  }

}
