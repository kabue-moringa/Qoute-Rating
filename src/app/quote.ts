export class Quote {
  // id!: number;
  // name!: string;
  // description!: string;
  public showDescription: boolean;
  showInfo: any;
  // tslint:disable-next-line:max-line-length
  constructor(public id: number, public name: string, public description: string, public completeDate: Date, public like: number, public dislike: number){
    this.showDescription = false;
}
}
