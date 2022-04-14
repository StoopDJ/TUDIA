// Code Ref: https://sap.github.io/ui5-webcomponents/playground/components/ShellBar/
// UI5_Web Components are source free 

// Import all react components here
import React from "react";
import logo from "../Pages/imgs/TUD.png";
import { ShellBar,} from "@ui5/webcomponents-react";

// function to contains the Nav bar for every page, Just import it as component in pages
export default function Nav() {
  return (
    <nav>

      {/* add ShellBar here, pick the color, add the TUD logo to the nav bar*/}
      <ShellBar
        primaryTitle="Intelligent Assistant"
        logo={<img src={logo} alt=" Logo" />}
       
      ></ShellBar>

    </nav>
  );
}
