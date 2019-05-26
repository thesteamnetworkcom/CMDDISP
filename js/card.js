class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div className='card' onClick={this.props.addCard}>
                    {this.props.data.image_uris === undefined ? <img src={this.props.data.card_faces[0].image_uris.small} />: <img src={this.props.data.image_uris.small} />}
                </div>
            </React.Fragment>
        )
    }
}
