import React, { useContext } from "react";
import { Context } from "../../context/context";

export default function BusinessResults() {
  const [state, dispatch] = useContext(Context);
  return (
    <div>
      <ul class="collection">
        <li class="collection-item avatar">
          <img
            src="http://lorempixel.com/250/250/business/1"
            alt=""
            class="circle"
          />
          <span class="title">Sue Bob</span>
          <p>
            120,000 Followers <br />
            Technology
          </p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
        <li class="collection-item avatar">
          <img
            src="http://lorempixel.com/250/250/business/2"
            alt=""
            class="circle"
          />
          <span class="title">Title</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
        <li class="collection-item avatar">
          <img
            src="http://lorempixel.com/450/450/business/3"
            alt=""
            class="circle"
          />
          <span class="title">Title</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
        <li class="collection-item avatar">
          <img
            src="http://lorempixel.com/250/250/business/4"
            alt=""
            class="circle"
          />
          <span class="title">Title</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
      </ul>
    </div>
  );
}
