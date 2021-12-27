import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  imageToShow:any;
  image:boolean=false;
  constructor(private uploadService: UploadService) { }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  ngOnInit(): void {
    this.uploadService.getAllVisualmage().subscribe(
      data=>
      {
        this.image=true;
        this.createImageFromBlob(data);
      }
    )
  }

}
