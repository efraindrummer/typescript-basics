//import { bulbasaur, pokemons } from './bases/02-objects'
import './style.css'
//import { name, age } from './bases/01-types'
//import { charmander } from './bases/03-clases';
import { charmander } from './bases/04-injection';

charmander

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h1>Hello Vite ${charmander.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
