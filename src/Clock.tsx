import React, { Component } from 'react';
 
class Clock extends Component<{}, {date:Date}> {
	constructor(props: { date: Date; } | Readonly<{ date: Date; }>) {
		super(props);
		this.state = {date: new Date()};
	}

    private timerID: any;

    tick(){
        this.setState({
            date: new Date()
        });
    }

    //Cuando ya esta listo el componente
    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    componentDidUpdate(){
        console.log("Updated");
    }
 
	render() {
   return (
     <div>
       <h1>Hello, world!</h1>
       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
     </div>
   );
 }
}
 
export default Clock;