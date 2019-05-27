class CardSmall extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div className='cardSmall'>
                    <input type='text'
                        value={this.props.data.qty}
                        className='qty'
                        onChange={(e)=>this.props.updateQty(e,this.props.data)}
                    />
                    <span className='name'>{this.props.data.card.name}</span>
                    <div className='clear' >
                        <i class="fas fa-backspace"></i>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
