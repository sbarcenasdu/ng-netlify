import { Component, inject } from '@angular/core';
import { Location } from '../../models/location';
import { CapitalizePipe } from '../../custom-pipes/capitalize.pipe';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CapitalizePipe, SlicePipe],
  template: `
  @if(dataLoaded){
    <div class="w-10/12 mx-auto my-10">
      <h1 class="text-4xl font-bold text-center m-6">
        Ubicaciones Rick and Morty
      </h1>
      <table>
        <thead>
          <tr>
            @for(key of locationsKeys; track $index){
            <th>{{ key | capitalize }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for(location of locations; track location.id){
          <tr>
            <td>{{ location.id }}</td>
            <td>{{ location.name }}</td>
            <td>{{ location.type }}</td>
            <td>{{ location.dimension }}</td>
            <!-- <td>{{location.residents.length}}</td>   1a version-->
            <td>
              @if(location.showAllResidents){
              <ul>
                @for(resident of location.residents; track $index){
                <li>{{ resident }}</li>
                } @if(location.residents.length > 3){
                <button (click)="toggleResidentsView(location)">Ocultar</button>
                }
              </ul>
              }@else {
              <ul>
                @for(resident of location.residents.slice(0,3); track $index){
                <li>{{ resident }}</li>
                } @if(location.residents.length > 3){
                <button (click)="toggleResidentsView(location)">
                  Mostrar {{ location.residents.length - 3 }} más...
                </button>
                }
              </ul>
              }
            </td>
            <td>{{ location.url }}</td>
            <td>{{ location.created }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
        }
  `,
  styles: `
  :host{
    display: block;
  }
  
  table{
    width: 100%;
  }
  td, th{
    border: 1px solid;
    padding: 10px;
  }
  button{
    background-color: gray;
  }
  `,
})
export class LocationComponent {
  // locations: Location[] = [];
  locationsKeys: string[] = [];
  locations: (Location & { showAllResidents: boolean })[] = [];
  private route = inject(ActivatedRoute);
  private loaderService = inject(LoaderService);
  dataLoaded = false;


  ngOnInit() {
    this.getAllLocations();
  }

  getAllLocations() {
    console.log('Entra a locationComponent - getAllLocations');
    // this.loaderService.show();

    this.route.data.subscribe({
      next: (data) => {
        const locations = data['locations'] as Location[];
        this.locationsKeys =
          locations.length > 0 ? Object.keys(locations[0]) : [];
        this.locations = locations.map((location) => ({
            ...location,
            showAllResidents: false,
          }));
        this.dataLoaded = true;
        // this.loaderService.hide();
      },
      error: (error) => {
        console.error(error);
        // this.loaderService.hide();
      },
    });
  }

  toggleResidentsView(location: Location & { showAllResidents: boolean }) {
    location.showAllResidents = !location.showAllResidents;
  }
  
  // 1a Version

  // getAllLocations() {
  //   this.locationService.getAlllocations().subscribe({
  //     next: (data) => {
  //       this.locationsKeys = data.length > 0 ? Object.keys(data[0]) : [];
  //       // this.locations = data;
  //       this.locations = data.map((location) => ({
  //         ...location,
  //         showAllResidents: false,
  //       }));
  //     },
  //     error: (error) => {
  //       console.error(error);
  //       alert('Hubo un error al cargar las ubicaciones. Por favor, inténtalo de nuevo más tarde.');
  //     },
  //   });
  // }

}
