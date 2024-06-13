import { Component, inject, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [],
  template: `
    <div class="container mx-auto mt-20">
      @if (character) {
      <div
        class="w-3/5 flex flex-col md:flex-row bg-gray-700 border rounded-md shadow-lg p-5 mx-auto"
      >
        <img
          class="w-full md:w-1/3 h-auto object-cover rounded-md"
          [src]="character.image"
          [alt]="character.name"
        />
        <div class="flex flex-col justify-center md:ml-10 mt-5 md:mt-0">
          <h2 class="text-3xl font-bold mb-3">{{ character.name }}</h2>
          <p><b>Estado:</b> {{ character.status }}</p>
          <p><b>Especie:</b> {{ character.species }}</p>
          <p><b>Tipo:</b> {{ character.type }}</p>
          <p><b>Gender:</b> {{ character.gender }}</p>
          <div class="mt-5">
            <h3 class="text-xl font-semibold mb-2">Origin</h3>
            <p>{{ character.origin.name }}</p>
          </div>
          <div class="mt-5">
            <h3 class="text-xl font-semibold mb-2">Location</h3>
            <p>{{ character.location.name }}</p>
          </div>
        </div>
      </div>
      
      }
    </div>
  `,
  styles: ``,
})
export class CharacterDetailComponent implements OnInit {
  private characterService = inject(CharacterService);
  private route = inject(ActivatedRoute);

  character: Character | null = null;

  ngOnInit() {
    // this.getCharacterId();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCharacterById(parseInt(id, 10));
    }
  }

  getCharacterById(id: number) {
    this.characterService.getCharacterById(id).subscribe({
      next: (data) => {
        this.character = data;
        console.log(this.character);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getCharacterId() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCharacterById(parseInt(id, 10));
    }
  }
}
