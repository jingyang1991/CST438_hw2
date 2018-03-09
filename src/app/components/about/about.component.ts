import { Component, OnInit } from '@angular/core';
import { ImageapiService } from '../../services/imageapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  gettyImageUrl: string;
  gettyResult: any;

  constructor(private iamgeApi: ImageapiService) { }

  ngOnInit() {
    this.iamgeApi.getGettyImages().subscribe(
      data => {this.gettyImageUrl = this.gettyResult.image[0].display_sizes[0].url;}
    );
  }

}

interface GettyResult {
  result_count: number;
  image: Image[];
}

interface Image {
  id: string;
  display_sizes: DisplaySize[];
}
interface DisplaySize {
  url: string;
}