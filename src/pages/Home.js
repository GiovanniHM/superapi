import getData from '../utils/getData';
import getHash from '../utils/getHash'


const Home = async ()=>{
  const page = await getHash();
  const characters = await getData(page);
  const view = `
  <div class="Characters">
  ${characters.results.map(character => `
    <article class="Characters-item">
        <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        </a>
    </article>
  `).join('')}
        </div>
  `;
  return view;
};

export default Home;