import Image from "next/image";
import styles from './styles.module.scss'

interface CharacterCardProps {
    id: number;
    name: string;
    status: string;
    species: string;
    type?: string;
    gender?: string;
    origin?: {
    name: string;
    }
    image: string;
}

export function CharacterCard(props : CharacterCardProps){
    return(
            <div className={styles.container}>
                <Image
                src={props.image}
                alt={props.name}
                width={320}
                height={320}/>
                <div>
                    <ul>
                        <li>id: <strong>{props.id}</strong></li>
                        <li>nome: <strong>{props.name}</strong></li>
                        <li>especie: <strong>{props.species}</strong></li>
                        <li>status: <strong>{props.status}</strong></li>
                    </ul>
                </div>
            </div>
    )
}