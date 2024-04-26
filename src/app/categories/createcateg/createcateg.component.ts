import { Component, inject, signal } from '@angular/core';
import { Categorie} from '../categorie';
import { CategoriesService } from '../categories.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createcateg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createcateg.component.html',
  styleUrl: './createcateg.component.css'
})
export class CreatecategComponent {
  newcategory=signal({})
  public categorieService = inject(CategoriesService);
  
  
  createCategory() {
    this.categorieService.createCategory(this.newcategory());
    
 
  }

}
