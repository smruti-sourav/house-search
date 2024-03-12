import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-list',
  templateUrl:`./house-list.component.html`,
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
houseList: { Name: string; url: string; location: string; about: string; }[] = [
  {
    Name:'Acme Fresh Start Housing',
    url:'assets/abcd.jpg' , 
    location:'Chicago,iL',
    about:'learn more '
  },
  {
  Name:'A113 Transitional housing',
  url:'assets/image.jpg' , 
  location:'Santa Manica, CA',
  about:'learn more ',
  },
  {
  Name:'Warm Housing Support',
  url:'assets/photo.jpg' , 
  location:'Junedu, AK',
  about:'learn more ',
  },
  {
  Name:'Homesteady Housing',
  url:'assets/image1.jpg' , 
  location:'Chicago, IL',
  about:'learn more ',
  },
  {
  Name:'Happy  Homes Group',
  url:'assets/image2.jpg' , 
  location:'Gary, IN',
  about:'learn more ',
  },
  {
  Name:'Hopeful Apartment Group',
  url:'assets/image14.jpg' , 
  location:'Oakland, CA',
  about:'learn more',
  },
  {
  Name:'Seriously Safe Towns',
  url:'assets/image4.jpg' , 
  location:'Chicago,iL',
  about:'learn more',
  },
  {
  Name:'Hopefull Housing Solution',
  url:'assets/image5.jpg' , 
  location:'Santa Manica, CA',
  about:'learn more',
  },
  {
  Name:'Seriously Safe Towns',
  url:'assets/image6.jpg' , 
  location:'Gary, IN',
  about:'learn more',
  },
  {
  Name:'Capital Safe Towns',
  url:'assets/image7.jpg' , 
  location:'Junedu, AK',
  about:'learn more',
  },
  {
  Name:'Seriously Safe Towns',
  url:'assets/image8.jpg' , 
  location:'Santa Manica, CA',
  about:'learn more',
  },
  {
  Name:'Homesteady Housing',
  url:'assets/image9.jpg' , 
  location:'Oakland, CA',
  about:'learn more',
  },
  {
  Name:'Seriously Safe Towns',
  url:'assets/image10.jpg' , 
  location:'Chicago, IL',
  about:'learn more',
  },
  {
  Name:'Warm Housing Support',
  url:'assets/image11.jpg' , 
  location:'Junedu, AK',
  about:'learn more',
  },
  {
  Name:'Seriously Safe Towns',
  url:'assets/image12.jpg' , 
  location:'Oakland, CA',
  about:'learn more',
  },
  {
  Name:'A113 Transitional housing',
  url:'assets/image13.jpg' , 
  location:'Gary, IN',
  about:'learn more',
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}


