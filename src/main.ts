//import { bulbasaur, pokemons } from './bases/02-objects'
import './style.css'
//import { name, age } from './bases/01-types'
//import { charmander } from './bases/03-clases';
//import { charmander } from './bases/04-injection';
//import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators2';

charmander

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h1>Hello Vite ${charmander.name} ${charmander.id}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
