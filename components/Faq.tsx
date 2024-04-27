"use client"
import { useState } from "react";

interface FaqProps {
    title: string,
    children: React.ReactNode,
    initActive? : boolean 
}

 const Faq: React.FC<FaqProps> = ({ title, children, initActive }) => {
    const [active, setActive] = useState(initActive || false);

    return <section className={`toggle ${active ? "active" : ""}`}>
        <a onClick={() => setActive(!active)} className="toggle-title">{title}</a>
        <div className="toggle-content" style={{ display: 'block', "maxHeight": active ? "100px" : "0px" }}>
            <p>{children}</p>
        </div>
    </section>;
};
export default Faq;