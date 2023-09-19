import './css/bug.css';
import imgLogo from './pngwing.com.png';
function BugComponent() {
    return (
        <main>
            <div className="container">
                <div className="num-circle">1</div>
                <div className="circle head"> </div>
                <div className="circle eye"> </div>
                <div className="circle pupil"> </div>
                <div className="circle b1"> </div>
                <div className="circle b2"> </div>
                <div className="circle b3"> </div>
                <div className="circle b4"> </div>
            </div>

            <div className="container">
                <div className="num-circle">2</div>
                <div className="circle head"> </div>
                <div className="circle eye"> </div>
                <div className="circle pupil"> </div>
                <div className="circle b1"> </div>
                <div className="circle b2"> </div>
                <div className="circle b3"> </div>
                <img src={imgLogo} className="tree" />
                <div className="circle b4"> </div>
            </div>
        </main>
    );
}
export default BugComponent;
