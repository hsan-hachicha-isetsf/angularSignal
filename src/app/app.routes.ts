import { Routes } from '@angular/router';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { CreatecategComponent } from './categories/createcateg/createcateg.component';

export const routes: Routes = [

    
    {
        path: 'categories',
        pathMatch: 'full',
        component: CategorieListComponent,
      },
      {
        path: 'createategorie',
        pathMatch: 'full',
        component: CreatecategComponent,
      },
];
