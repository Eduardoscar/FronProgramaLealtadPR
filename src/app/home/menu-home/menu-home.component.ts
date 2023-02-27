import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {
  ngOnInit(): void {
    const randomIndex =Math.floor(Math.random()*this.imagesPaths.length)
    this.randomImagen = this.imagesPaths[randomIndex]
  }

  imagesPaths: string[] = ['https://scontent.fver2-1.fna.fbcdn.net/v/t1.6435-9/181907403_143744931093290_484359827095007920_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Hrkwu8gj71oAX9e6GkJ&_nc_ht=scontent.fver2-1.fna&oh=00_AfCWhqyCcqxkbeh8Dn9OiBzoAHhIRBKUz8d8Tpl7ueeokg&oe=64239AD2',
  'https://scontent.fver2-1.fna.fbcdn.net/v/t39.30808-6/222083067_2945406119017645_8501224419951504550_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4aiG0z4wwyAAX8jxoG4&_nc_ht=scontent.fver2-1.fna&oh=00_AfBRv_99peNxHUXyeEFhLRmNVDwacsqC15BCvWohrn6RXQ&oe=6401F978']
  randomImagen:String ='';
  

}
