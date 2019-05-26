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
                    <span>
                        Scryfall Powered,
                    </span>
                    <span>
                        Command Prompt Inspired
                    </span>
                    </div>
                    <i className="fas fa-caret-square-down" onClick={this.props.switchState}></i>
                </div>
            </React.Fragment>
        )
    }
}
