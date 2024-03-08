/* eslint-disable react/prop-types */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Carousel.module.css'

const Carousel = ({ titulo, items }) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>{titulo}</h2>

            <AliceCarousel
                items={items && items.map((item) => (
                    <div className={styles.contentCarousel} key={item}>
                        <span >{item[0]}</span>
                        <br />
                        <span style={{ color: '#f42' }}>{item[1]}</span>
                    </div >
                ))}
                autoPlay
                autoPlayInterval={1000} // Intervalo de tempo entre os slides (ajuste conforme necessário)
                infinite
                disableButtonsControls
                disableDotsControls
                mouseTracking
                animationDuration={1000}
                responsive={{
                    0: { items: 2 },
                    600: { items: 2 },
                    1024: { items: 2 },
                    1440: { items: 4 },
                }}

                className={styles.carousel}
            />

        </div >
    );
}

export default Carousel;
