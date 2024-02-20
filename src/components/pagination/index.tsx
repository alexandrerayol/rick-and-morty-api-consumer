import Link from 'next/link';
import styles from './styles.module.scss'

interface maxPageSizeProps {
    id: number
}

export async function Pagination(){

    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const numberOfPages = data.info.pages;

    let maxPagSize:maxPageSizeProps[] = [];

    for(let i = 0; i < 10; i++){
        maxPagSize.push({id: i + 1})
        //maxPageSize = [...maxPageSize, {newValue: ' new Value '}]
    }

    return(
        <div className={styles.container}>
            <Link href={'/'}>
                first
            </Link>
            {
                maxPagSize.map( item => (
                    <Link
                    href={`/${item.id}`}
                    key={item.id}>
                        {item.id}
                    </Link>
                ))
            }

            <Link href={`/${numberOfPages}`}>
                last
            </Link>
        </div>
    )
}