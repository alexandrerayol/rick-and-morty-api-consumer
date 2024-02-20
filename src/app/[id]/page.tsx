import { CharacterCard } from "@/components/characterCard";
import styles from '@/components/charactersList/styles.module.scss'
import { Pagination } from "@/components/pagination";
import { redirect } from "next/navigation"; 

interface NextPageProps {
    params: {
        id: string;
    }
}

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

export default async function NextPage({ params }: NextPageProps) {

    try {
        if(Number(params.id) === 1){
            throw new Error();
        }
        
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${params.id}`)
        const data = await response.json();
        const charactersList: character[] = data.results;

        return (
            <div className={styles.container}>
                {
                    charactersList.map(character => (
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
    } catch {
        redirect('/')
    }
}