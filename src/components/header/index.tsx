import Image from 'next/image'
import styles from './styles.module.scss'
import headerIcon from '../../../public/header-icon.svg'
export function Header(){
    return(
        <header className={styles.container}>
                <Image 
                src={headerIcon} 
                alt='Rick Sanchez header icon' 
                width={64} 
                height={64}>
                </Image>

                <h1>Rick and Morty API consumer</h1>
        </header>
    )
}