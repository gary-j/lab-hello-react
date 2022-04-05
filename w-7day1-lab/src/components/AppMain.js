import './style.css';
import img1 from '../images/icon1.png';
import img2 from '../images/icon2.png';
import img3 from '../images/icon3.png';
import img4 from '../images/icon4.png';

const AppMain = () =>{
    return (
        <main>
            <section className ="features">
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                <img src={img4}></img>
            </section>
        </main>
    )
}

export default AppMain