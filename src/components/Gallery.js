import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

function Gallery() {
    return (
    <div className='gallery'>
        <div className="icon">
            <img src={icon1} alt="icon1" />
                <h3>Declarative</h3>
                <br></br>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="icon">
                <img src={icon2} alt="icon2" />
                <h3>Components</h3>
                <br></br>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="icon">
                <img src={icon3} alt="icon3" />
                <h3>Single-Way</h3>
                <br></br>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="icon">
                <img src={icon4} alt="icon4" />
                <h3>JSX</h3>
                <br></br>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>

        </div>
    );
}

export default Gallery