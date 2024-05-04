import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignUpService } from './sign-up.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  constructor(private _signUpService: SignUpService){}

  countryList:any;
  states:any;
  fileToUpload: any;
  imageUrl: any = "../../assets/fakeuser.svg";

  @ViewChild('imageInput') fileInput!: ElementRef<HTMLInputElement>;

  ngOnInit(){
    this._signUpService.getCountry().subscribe(
      (res:any) => {
        console.log(res);
        this.countryList = res.result.countryList;
      }
    );

    
    console.log(this.countryList)
  }

  stateList(id:any){
    this._signUpService.getState(id).subscribe((res:any)=>{
      console.log("state",res);
      this.states = res.result.stateList;
    })
  }

  handleFileInput(file: FileList | null) {
    if(file){
      this.fileToUpload = file.item(0);

      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  selectFile() {
    this.fileInput.nativeElement.click();
  }
  
}
