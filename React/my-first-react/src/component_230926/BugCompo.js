import imgLogo from './pngwing.com.png';
import './css/SassBugCompo.scss';
export default function BugCompo() {
    return (
        <main>
            <div className="container">
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
