// Import all react components here

import React, {Component} from 'react';

// a component for the calculator results box 
class Result extends Component {

    render() {
        // creating a variable the result of calculations 
        const {result} = this.props;

        return (
            // creating a section for the calculator results and numbers.
            <div style={{height:"60px", background:"#FFF", width:"100%", borderRadius:"20px", marginBottom:"2%" }}>
                <p style={{fontSize:"40px"}}>{result}</p>
            </div>
    );
    }
}
export default Result;