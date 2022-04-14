// importing all react components here 

import React, {Component} from 'react';

// create a component for the calculator which contain all the keypad of the calculator.
class KeyPad extends Component {

    render() {
        return (
            // creating DIV to contain all our keypad buttons 
            <div style={{display:"block", background:"#BBB", borderRadius:"20px" }}>

                {/* Create buttons for each keypad, add CSS */}
                {/* Two Buttons for delete, clear. Place them at the top of calculator */}
                <button style={{width:"60%", height:"60px", marginTop:"3%", fontSize:"20px", color:"white", background:"red"}} name="DELETE" onClick={e => this.props.onClick(e.target.name)}>DELETE</button>
                <button style={{width:"30%", height:"60px", fontSize:"20px", color:"white", background:"red"}} name="CLEAR" onClick={e => this.props.onClick(e.target.name)}>CLEAR</button><br/>

                {/* Create buttons for 1,2,3 and +, add CSS. place them second row  */}
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button style={{width:"30%", height:"60px", fontSize:"30px", color:"white", background:"Black"}} name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                {/* Create buttons for 4,5,6 and -, add CSS. place them third row */}
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button style={{width:"30%", height:"60px", fontSize:"30px", color:"white", background:"Black"}} name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>
               
                {/* Create buttons for 7,8,9 and * add CSS. place them fourth row */}
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button style={{width:"30%", height:"60px", fontSize:"30px", color:"white", background:"Black"}} name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                {/* Create buttons for .,0,=,/ add CSS. place them at the bottom row, 0 on the middle */}
                <button style={{width:"20%", height:"60px", fontSize:"30px", color:"white", background:"Black"}} name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", background:"white"}} name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button style={{width:"20%", height:"60px", fontSize:"30px", color:"white", background:"Black"}} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button style={{width:"30%", height:"60px", marginBottom:"3%", fontSize:"30px", color:"white", background:"Black"}} name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}
export default KeyPad;