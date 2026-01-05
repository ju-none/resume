import { type ReactNode } from "react";
import "@styles/components/window.scss";

export const Window = ({ children } : {children: ReactNode}) => {
  return (
    <div className="card">
        <div className="align align-items-center">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
            <span style={{marginLeft:"15px", opacity:0.8}}>skills.sh</span>
        </div>
        <div className="content">
            <div className="row align-items-center">
                <div className="col-auto"><span className="code">{`none@resume $>`}</span></div>
                <div className="col-auto"><span className="running">ls skills</span></div>
            </div>
            {children}
        </div>
    </div>
  );
}