import React from "react";

class Message extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { 
          msg : ''

 };
    }
    inputChangeHandler = (e) =>  this.setState({ msg : e.target.value });
    
    render() { 


const formStyle ={
    display : 'flex',
    gap : '1rem',
    flexDirection : 'column',
}



const inputStyle ={
    width : '100%',
    fontFamily: 'Montserrat',
    padding : '10px',

}

const titleStyle ={
    textAlign : 'center',
}

        return ( 
           <div>
             <h1 style={titleStyle}>{this.props.name}</h1>
             <form style={formStyle}

                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.SendMsg(this.state.msg);
                        this.setState({ msg: "" });
                    }}>

             <input style={inputStyle} type="text" placeholder="Votre message" onChange={this.inputChangeHandler} value={this.state.msg} />
             <input type="submit" style={{textAlign : 'center' , backgroundColor : '#315344', border : 'none', borderRadius : '5px', padding : '10px', color : 'white', fontFamily: 'Montserrat', width : '50%', marginLeft : '4rem',

}}></input>

             </form>

             <h4 style ={{textDecoration : 'underline', fontWeight : 'bold',}}>Message</h4>
             <h5> {this.props.ChatMessage} </h5>


           </div>



         );
    }
}
 
export default Message ;