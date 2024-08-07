import { Hourglass } from 'react-loader-spinner'
import style from './spinner.module.css';

const Spinner = () => {
    return (
    <div className={style.spinnerContainer}>
    <Hourglass
    visible={true}
    height="80"
    width="80"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#306cce', '#72a1ed']}
    /></div>
    
    )
}

export default Spinner;