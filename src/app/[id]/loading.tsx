import Image from "next/image";
import spinner from '../../../public/spinner.svg'
import loadStyles from './styles.module.scss'
export default function Loading(){
    return(
        <main className={loadStyles.loading}>
            <Image src={spinner} alt={'spinner'} width={72} height={72}></Image>
        </main>
    )
}