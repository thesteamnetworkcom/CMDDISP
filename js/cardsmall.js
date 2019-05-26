class CardSmall extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div className='cardSmall'>
                    <span className='qty'>{this.props.data.qty}</span>
                    <span className='name'>{this.props.data.card.name}</span>
                    <div className='clear' >
                        <i class="fas fa-backspace"></i>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
