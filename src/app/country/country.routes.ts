import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './Layouts/CountryLayout/CountryLayout.component';
import { CountryPagesComponent } from './pages/countryPages/countryPages.component';
import { SingleCountryPageComponent } from './pages/SingleCountryPage/SingleCountryPage.component';
import { RegionPagesComponent } from './pages/regionPages/regionPages.component';
import { AllCountryPagesComponent } from './pages/allCountryPages/allCountryPages.component';

export const CountriesRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'Pais',
        component: CountryPagesComponent,
      },
      {
        path: 'Todos-los-paises',
        component: AllCountryPagesComponent,
      },
      {
        path:'Region',
        component:RegionPagesComponent
      },
      {
        path:'by/:code',
        component:SingleCountryPageComponent
      },
      {
        path:'**',
        redirectTo:'Pais'
      }
    ],
  },
];

export default CountriesRoutes;
