import Image from 'next/image'
import styles from './styles.module.scss'
import spinner from '../../../public/spinner.svg'
export function SkeletonCard(){
    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <Image src={spinner} alt={'spinner'} width={64} height={64}></Image>
            </div>

            <div className={styles.details}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}