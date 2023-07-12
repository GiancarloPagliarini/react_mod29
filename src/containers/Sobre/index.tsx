/* eslint-disable jsx-a11y/alt-text */
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { GithubSecao } from "./style";

const Sobre = () => (
  <section>
    <Titulo fontSize="16px">Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem
      illo dolor, ad quisquam pariatur aspernatur a quae nostrum possimus
      obcaecati culpa mollitia quidem, rerum molestias ullam, nam perferendis
      explicabo.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=giancarlopagliarini&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=giancarlopagliarini&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;
