import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogPage } from './pages/blog-page/blog-page.component';

const routeConfig: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Dra. Ana  Carolina Menezes'
    },
    {
        path: 'detalhes/:slug',
        loadComponent: () =>
            import('./pages/details-page/details-page.component').then(m => m.DetailsPageComponent)
    },
    {
        path: 'blog',
        component: BlogPage,
        title: 'Blog'
    },
    {
        path: '**',
        component: AppComponent,
        title: 'Dra. Ana  Carolina Menezes'
    }
];

export default routeConfig;