import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
    constructor(props){
        super(props);
        this.state={level:500}
        this.changeLevel=this.changeLevel.bind(this);
    }
    changeLevel(newLevel){
        this.setState({level:newLevel})
    }
    render() {
        const {colors}=this.props.palette;
        const {level}=this.state;
        const colorBox = colors[level].map(color=>(
           <ColorBox background={color.hex} name={color.name} key={color.name}/>
         ) );
         
        return (
            <div className="palette">
                {/*nav will go there*/}
                <Slider defaultValue={this.state.level} max={900}min={100} step={100} onAfterChange={this.changeLevel}/>
               <div className="palette-boxes">

               {colorBox}
              
               </div>
               {/* footer wil go there */}
            </div>
        )
    }
}

export default Palette;