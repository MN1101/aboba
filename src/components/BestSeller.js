import React from "react";
import "./BestSeller.css";
import thai from "./pic/thaiTea.png";
import taro from "./pic/Taro.png";
import coconut from "./pic/coconut.png";
import matcha from "./pic/matchaLatte.png";
import sugarcloud from "./pic/sugarCloud.png";
import straw from "./pic/strawYogurt1.png";
import mango from "./pic/mangoSmoo.png";
import coffee from "./pic/coffee.png";
import oreo from "./pic/oreo.png";
import peach from "./pic/peach.png";



function BestSeller() {
    return (
        <div className="bestSeller">
            <h2>Top 10<br></br>Best Seller</h2>
            <div className="top">
                <div className="thai">
                    <img src={thai} alt="Thai Milk Tea" className="thai" />
                    <p>Thai Milk Tea</p>
                </div>
                <div className="taro">
                    <img src={taro} alt="Taro Milk Tea" className="taro" />
                    <p>Taro Milk Tea</p>
                </div>
                <div className="coconut">
                    <img src={coconut} alt="Coconut" className="coconut" />
                    <p>Coconut</p>
                </div>
                <div className="mactha">
                    <img src={matcha} alt="Matcha Latte" className="matcha" />
                    <p>Premium Matcha<br></br>Latte</p>
                </div>
                <div className="sugarcloud">
                    <img src={sugarcloud} alt="Brown Sugar Cloud" className="sugarcloud" />
                    <p>Brown Sugar Cloud</p>
                </div>
            </div>
            <div className="bott">
                <div className="straw">
                    <img src={straw} alt="Strawberry Yogurt" className="straw" />
                    <p>Strawberry<br></br>Yogurt</p>
                </div>
                <div className="mango">
                    <img src={mango} alt="Mango Passion Fruit" className="mango" />
                    <p>Mango Passion<br></br>Fruit</p>
                </div>
                <div className="coffee">
                    <img src={coffee} alt="Viet Ice Coffee" className="coffee" />
                    <p>Viet Ice<br></br>Coffee</p>
                </div>
                <div className="oreo">
                    <img src={oreo} alt="Oreo Cloud" className="oreo" />
                    <p>Oreo Cloud</p>
                </div>
                <div className="peach">
                    <img src={peach} alt="Peach Tea" className="peach" />
                    <p>Peach Tea</p>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;