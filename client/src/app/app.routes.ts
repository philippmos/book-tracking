import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksOverviewComponent } from './components/books/books-overview/books-overview.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'books',
        component: BooksOverviewComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
