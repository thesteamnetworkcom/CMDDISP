class CardDisplayState extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div className='card-display-wrapper'>
                    <div className='card-display-pane'>
                        <div className='img-wrapper'>
                            {this.props.card.image_uris === undefined ? <img src={this.props.card.card_faces[0].image_uris.large} /> : <img src={this.props.card.image_uris.large} />}
                        </div>
                        <div className='close-button' onClick={this.props.close}>
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
