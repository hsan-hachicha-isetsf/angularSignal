import { Component,inject, signal  } from '@angular/core';


import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';
@Component({
  selector: 'app-categorie-list',
  standalone: true,
  imports: [],
  templateUrl: './categorie-list.component.html',
  styleUrl: './categorie-list.component.css'
})
export class CategorieListComponent {
  public categorieService = inject(CategoriesService);
   //categories:any;
   categories = signal<Categorie[]>([]);
  ngOnInit(): void {
    this.categories=this.categorieService.getCategories();
  }

  deleteCategory(category:Categorie):void {
    this.categorieService.deleteCategory(category)
  }


  
  
}
