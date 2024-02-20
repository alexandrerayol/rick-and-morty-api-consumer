import { CharacterCard } from "../characterCard";
import { Pagination } from "../pagination";
import styles from './styles.module.scss'


interface character {
    id: number,
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
    name: string;
    }
    image: string;
}

export async function CharactersList(){
    //objetivo: listar as 3 primeiras páginas.

        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json();
        const charactersList:character[] = data.results

    return(
        <div className={styles.container}>
            {
                charactersList.map( character => (
                        <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        species={character.species}
                        status={character.status}
                        />
                ))
            }
            <Pagination />
        </div>
    )
}