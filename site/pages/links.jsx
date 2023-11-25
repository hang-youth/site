import BasePage from '../components/BasePage';

export default function Links() {
  return (
    <BasePage title="Links - Hang Youth" descrtiption="Links en dingen waar we in principe niks mee te maken hebben maar die we wel vet vinden.">
      <h1>Links</h1>
      <div className="links">
        <a href="https://www.instagram.com/hang.youth/" target="_blank" rel="noreferrer">Hang Youth Instagram</a>
        <a href="https://open.spotify.com/artist/33s4eablBmnrPlE3y6CZFR" target="_blank" rel="noreferrer">Hang Youth Spotify</a>
        <a href="https://hangyouth.bandcamp.com/" target="_blank" rel="noreferrer">Hang Youth Bandcamp</a>
        <a href="https://discord.gg/v6aBfJxvb7" target="_blank" rel="noreferrer">Hang Youth Discord</a>
        <a href="https://burningfik.com" target="_blank" rel="noreferrer">Burning Fik website</a>
        <a href="https://www.youtube.com/c/BurningFik/" target="_blank" rel="noreferrer">Burning Fik YouTube</a>
      </div>
      <h3>Dingen waar we in principe niks mee te maken hebben maar die we wel vet vinden:</h3>
      <div className="links">
        <a href="https://extinctionrebellion.nl/" target="_blank" rel="noreferrer">Extinction Rebellion website</a>
        <a href="https://woonprotest.nl/" target="_blank" rel="noreferrer">Woonprotest website</a>
        <a href="https://bij1.org/" target="_blank" rel="noreferrer">Bij1 website</a>
        <a href="https://templefang.bandcamp.com/" target="_blank" rel="noreferrer">Temple Fang Bandcamp</a>
      </div>
    </BasePage>
  );
}
