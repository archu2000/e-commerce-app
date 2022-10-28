// only the default object imports without braces
// from 1 module only 1 object can be exported.
//for objects and classes cannot export
import React,{Component} from "react";
// class NavBar extends(inherits) properties from 
// super-class Component(Default class)
export default class NavBar extends Component {
    //whenever this component gets triggered, render method is rendered
    render() {
        return (
            // <h1>Created NavBar Component</h1>
            // <h2>Hello</h2><h3>Team</h3>
            //jsx doesn't support multiple tags in same line beacause of Babel syntax

            //Instead we can use <div> parent container to pass 2 child tags
            // <div>
            //     <h1>Created NavBar Component</h1>
            //     <p>Child2</p>
            // </div>

            // to avoid multiple <div> can use React.Fragment
            <React.Fragment>
                <h3>avoided extra div tag on inspect</h3>
                <h3>satisfies jsx rule</h3>
            </React.Fragment>
        );
    }
    //if rendering another component inside this NavBar component, 
    // then it will be child of this NavBar Component
    // can also create multiple children components. i.e called as Virtual DOM.
    // Virtual DOM is a hierarchy of components.
}

// export default NavBar;