import React from "react";
import "./Menu.css";
import sugarCloud from "./pic/sugarCloud.png";
import blended from "./pic/blended.png";
import eggwaffle from "./pic/egg.png";

function Menu() {
  const milkTea = [
    "Black Milk Tea","Green Milk Tea","Chocolate Milk Tea","Matcha Milk Tea",
    "Taro Milk Tea","Coconut Milk Tea","Pistachio Milk Tea","Thai Milk Tea",
    "Royal Milk Tea","Peach Milk Tea","Mango Milk Tea",
  ];

  const toppingLeft = ["Crystal Boba","Strawberry Popping","Mango Popping","Lychee Popping"];
  const toppingMid = ["Brown Sugar Boba","Milk Foam","IceCream (Vanilla, Chocolate, Strawberry, Cookies & Cream, Mango)"];
  const toppingRight = ["Lychee Jelly","Coffee Jelly","Rainbow Jelly"];

  const float = ["Brown Sugar Cloud","Oreo Cloud","Pink Cloud","Cocoa Cloud","Matcha Cloud","Pink Matcha Cloud"];

  const blendedItems = [
    "Taro","Matcha","Chocolate","Coconut","Pistachio","Coffee",
    "Mango Yogurt","Strawberry Yogurt","Blueberry Yogurt","Passion Fruit Yogurt","Peach Yogurt"
  ];

  const fruitTea = [
    "Mango Tea","Strawberry Tea","Peach Tea","Passion Fruit Tea",
    "Lychee Tea","Mango Passion","Strawberry Lemonade","Blue Lemonade"];

  const coffee = ["Vietnamese Ice Coffee","Viet Salted Milk Foam Ice Coffee"];

  const latte = [
    "Brown Sugar Latte w Boba","Premium Matcha Latte","Strawberry Matcha Latte",
    "Mango Matcha Latte","Blueberry Matcha Latte","Chocolate Latte"
  ];

  const snowLeft = ["1. Strawberry","2. Blue Raspberry","3. Cherry","4. Mango","5. Cotton Candy","6. Watermelon"];
  const snowRight = ["7. Pineapple","8. Tiger Blood","9. Pina Colada","10. Grape","11. Bubble Gum","12. Root Beer"];

  const smoothie = ["Strawberry Banana","Mango Passion Fruit","Blue-Strawberry Banana","Avocado","Banana"];

  const egg = ["Original","Matcha","Chocolate"];

  const renderList = (items, price) =>
    items.map((item, index) => {
      let p = price;

      if (items === latte) {
        if (index === 0 || index === items.length - 1) {
          p = 7;
        } else {
          p = 8.50;
        }
      }
      if (items === toppingMid) {
        if (index === toppingMid.length - 1) {
          p = 1.50;
        } else {
          p = 0.80;
        }
      }
      return (
      <li key={item} className="menu-line">
        <span>{item}</span>
        <span>${p}</span>
      </li>
      );
    });

  return (
    <div className="menu-body">
      <div className="top-grid">
        <section className="menu-card cream-card">
          <h2 className="tittle">Milk Tea</h2>
          <ul className="menu-list">{renderList(milkTea, 7)}</ul>
        </section>

        <div>
          <section className="menu-card toppings-card">
            <h2 className="tittle">Toppings</h2>
            <div className="topping-grid">
              <ul>{renderList(toppingLeft, 0.80)}</ul>
              <ul>{renderList(toppingMid, 0.80)}</ul>
              <ul>{renderList(toppingRight, 0.80)}</ul>
            </div>
          </section>

          <section className="float-card">
            <div className="float-grid">
              <img src={sugarCloud} alt="Brown Sugar Cloud" className="menu-img" />
              <div>
                <h2 className="tittle small-tittle">Float</h2>
                <ul className="menu-list">{renderList(float, 8.50)}</ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="middle-section">
        <section className="middle-left-card">
          <h2 className="tittle">
            Blended Drink <br /> with MilkFoam
          </h2>

          <div className="blended-grid">
            <ul className="menu-list">{renderList(blendedItems, 8)}</ul>

            <div className="blended-image">
              <img src={blended} alt="Blended Drinks" className="blended-photo" />
            </div>
          </div>
        </section>

        <div className="middle-right">
          <section>
            <h2 className="tittle">
              Fruit Tea <br />(Black / Green Tea)
            </h2>
            <ul className="menu-list">{renderList(fruitTea, 7)}</ul>
          </section>

          <section className="menu-card white-card">
            <h2 className="tittle">Coffee</h2>
            <ul className="menu-list">{renderList(coffee, 7)}</ul>
          </section>
        </div>
      </div>

      <div className="bottom-grid">
        <section className="menu-card white-card">
          <h2 className="tittle">Latte</h2>
          <ul className="menu-list">{renderList(latte, 8.50)}</ul>
        </section>

        <section className="menu-card pink-card">
          <h2 className="tittle">Sno - Ball ($6 for 3 flavors)</h2>
          <div className="snow-grid">
            <ul>{snowLeft.map(i => <li key={i}>{i}</li>)}</ul>
            <ul>{snowRight.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        </section>

        <section className="menu-card white-card">
          <h2 className="tittle">Smoothie</h2>
          <ul className="menu-list">{renderList(smoothie, 8.50)}</ul>
        </section>

        <section className="egg-card pink-card">
          <div className="egg-grid">
            <div>
              <h2 className="tittle">Egg Waffle w Icecream</h2>
              <ul className="menu-list">{renderList(egg, 5.50)}</ul>
            </div>
            <img src={eggwaffle} alt="Egg Waffle" className="menu-img" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Menu;