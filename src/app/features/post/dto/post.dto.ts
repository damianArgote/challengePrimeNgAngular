export class PostDto{

  public userId:    number;
  public id?:        number;

  constructor(public title:string, public body:string){
    this.userId = 1;
  }
}
