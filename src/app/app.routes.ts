import { Routes } from '@angular/router';
import { characterGuard } from './guards/character.guard';
import { HomeComponent } from './shared/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationComponent } from './pages/location/location.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { locationResolver } from './resolvers/location.resolver';
import { AlertDialogComponent } from './shared/alert-dialog/alert-dialog.component';
import { AnimationsComponent } from './shared/animations/animations.component';
import { BasicAnimationsComponent } from './shared/basic-animations/basic-animations.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character', component: CharacterComponent },
  {
    path: 'location',
    component: LocationComponent,
    canActivate: [characterGuard],
    resolve: { locations: locationResolver },
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserFormComponent },
  { path: 'dynamic', component: DynamicFormComponent },
  { path: 'nested', component: NestedFormComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: 'alert', component: AlertDialogComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'basic', component: BasicAnimationsComponent },
  { path: 'character/:id', component: CharacterDetailComponent,},

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
