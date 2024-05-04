import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class SignUpService{
    constructor(protected _httpClient: HttpClient) { 
 
    }

//     1.	Get Country List
// URL: http://devapi.tour-guide.ph/api/Country/list
// Method: GET

// 2.	Get a State List Based on the Country
// URL: http://devapi.tour-guide.ph/api/State/list 
// Method: GET
// Query Parameters: 

    getCountry(){
        return this._httpClient.get('http://devapi.tour-guide.ph/api/Country/list');
    }

    getState(countryId:number){
        return this._httpClient.get('http://devapi.tour-guide.ph/api/State/list',{params:{countryId:countryId}});
    }


}