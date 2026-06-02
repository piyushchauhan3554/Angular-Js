import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-com',
  imports: [FormsModule],
  templateUrl: './first-com.html',
  styleUrl: './first-com.css',
})
export class FirstCom {
  name='piyush'
  imageUrl='https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg'

  showMessage(){
    alert('i love coding')
  }

  username=''
}
