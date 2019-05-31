class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div className='header'>
                    <div>
                    <span>
                        Deck Builder -
                    </span>
                    <span className='color1'>
                        Scryfall Powered,
                    </span>
                    <span className='color2'>
                        Command Prompt Inspired
                    </span>
                    </div>
                    <span className='link-item' onClick={()=>this.props.newPage('Home')}>
                        Home
                    </span>
                    <span className='link-item' onClick={()=>this.props.newPage('App')}>
                        App
                    </span>
                    <span className='link-item' onClick={()=>this.props.newPage('Decks')}>
                        Decks
                    </span>
                    <span className='byLine'>
                        By: ScottieLew
                    </span>
                    <span>
                    <span onClick={this.props.switchState}>About</span>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}
