import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Free cocktails just for your drinking pleasure. Feel free to choose from any of our 25 different kinds."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Be sure to explore the amazing and scenic hiking trails we have to offer! We provide gear and equipment for you to enjoy hiking as long as you like. "
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Free shuttle rides around all of our local restaurants and be sure to take the scenic route to get the most out of your ride."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Strong beer like you have never had before! The beer is locally grown and brewed for a more high rich flavor."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
