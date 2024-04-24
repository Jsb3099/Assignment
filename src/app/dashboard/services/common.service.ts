import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  hardCodedJSonData: any={
    "04/01/2024":{
      new:{
      newWins:"230",
      newWinsPercentage:"25%",
      newWinsComment:"vs previous 30 days",
      label: "New Wins"
      },
      winRate:{
      newWins:"9.86%",
      newWinsPercentage:"25%",
      newWinsComment:"vs previous 30 days",
      label: "Trail:Win Rate"
      },
      mrrrate:{
      newWins:"$25690",
      newWinsPercentage:"8.7%",
      newWinsComment:"vs previous 30 days",
      label: "New MRR"
      },
      pagesView:[300, 50, 100],
      mrrByCountry:[{ x: 20, y: 30, r: 15 }, { x: 40, y: 10, r: 10 }],
      mrr:[65, 59, 80, 81, 56, 55, 40]
    },
    "03/01/2024":{
      new:{
      newWins:"500",
      newWinsPercentage:"55%",
      newWinsComment:"vs previous 30 days",
      label: "New Wins"
      },
      winRate:{
      newWins:"19.86%",
      newWinsPercentage:"125%",
      newWinsComment:"vs previous 30 days",
      label: "Trail:Win Rate"
      },
      mrrrate:{
      newWins:"$909890",
      newWinsPercentage:"8.7%",
      newWinsComment:"vs previous 30 days",
      label: "New MRR"
      },
      pagesView:[100, 35, 58],
      mrrByCountry:[{ x: 55, y: 60, r: 5 }, { x: 4, y: 23, r: 10 }],
      mrr:[65, 59, 78, 98, 38, 55, 2]
    },
    "02/01/2024":{
      new:{
      newWins:"890",
      newWinsPercentage:"25%",
      newWinsComment:"vs previous 30 days",
      label: "New Wins"
      },
      winRate:{
      newWins:"134%",
      newWinsPercentage:"55%",
      newWinsComment:"vs previous 30 days",
      label: "Trail:Win Rate"
      },
      mrrrate:{
      newWins:"$568990",
      newWinsPercentage:"199.7%",
      newWinsComment:"vs previous 30 days",
      label: "New MRR"
      },
      pagesView:[22, 50, 12],
      mrrByCountry:[{ x: 33, y: 44, r: 2 }, { x: 4, y: 33, r: 12 }],
      mrr:[89, 59, 89, 81, 12, 55, 11]
    },
  }

  getDashBoardData(){
    return of(this.hardCodedJSonData);
  }
}
