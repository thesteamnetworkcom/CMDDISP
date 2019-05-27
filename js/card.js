class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.getQty = this.getQty.bind(this);
    }
    getQty(){
        let qty=0;
        for(var key in this.props.deck.cards){
            for(var i = 0; i < this.props.deck.cards[key].length; i++){
                if(this.props.deck.cards[key][i].card.id === this.props.data.id){
                    qty = this.props.deck.cards[key][i].qty;
                }
            }
        }
        return qty;
    }
    render(){
        return(
            <React.Fragment>
                <div className='card' /*onClick={this.props.addCard}*/>
                    {this.props.data.image_uris === undefined ? <img src={this.props.data.card_faces[0].image_uris.small} />: <img src={this.props.data.image_uris.small} />}
                    <div className='overlayQty'>
                        {this.getQty() !== 0 ? this.getQty() : ''}
                    </div>
                    <div className='overlayChangers'>
                        <div className='decrement' onClick={()=>this.props.addCard(this.props.data,-1)}>
                            <i class="fas fa-minus"></i>
                        </div>
                        <div className='increment' onClick={()=>this.props.addCard(this.props.data, 1)}>
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
