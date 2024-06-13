import { Component, OnInit, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="w-10/12 mx-auto my-10">
      <h1 class="text-4xl font-bold text-center m-6 "
      style="view-transition-name:title">
        Personajes Rick and Morty
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
      >
        @for(character of characters; track character.id) {
        <a
          [routerLink]="['/character', character.id]"
          class="block bg-gray-400 border rounded-md shadow-lg transform transition duration-500 hover:scale-105"
        >
          <img
            class="w-full h-48 object-cover rounded-t-md"
            src="{{ character.image }}"
            alt="{{ character.name }}"
            
          />
          <div class="p-4 text-center">
            <h4 class="text-xl font-semibold mb-2 text-slate-800">{{ character.name }}</h4>
            <p class="text-gray-700">Especie: {{ character.species }}</p>
            <p class="text-gray-700">Estado: {{ character.status }}</p>
          </div>
        </a>
        }
      </div>
    </div>
  `,
  styles: `
  :host{
    display: block;
    min-height: 70vh;
    margin: 0 auto;
  }
  `,
})
export class CharacterComponent implements OnInit {
  characters: any[] = [];

  private characterService = inject(CharacterService);

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characterService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
