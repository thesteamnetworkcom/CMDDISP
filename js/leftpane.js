class LeftPane extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:true
        };
        this.swapOpen = this.swapOpen.bind(this);
    }
    swapOpen(){
        this.setState({
            open:!this.state.open
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className={'LeftPane ' + (this.state.open === true ? "xPane" : "yPane")}>
                    {this.state.open === true ?
                        <div className='card-wrapper'>
                            <div className='header-wrapper'>
                                <span onClick={this.props.prev}>Prev</span><h2>Cards</h2><span onClick={this.props.next}>Next</span>
                            </div>
                            <div className='cards'>
                                {console.log(this.props.state.cardList[this.props.state.curList])}
                                {(this.props.state.cardList[this.props.state.curList] !== undefined && this.props.state.cardList[this.props.state.curList].data !== undefined) ? this.props.state.cardList[this.props.state.curList].data.map(card=>
                                    <React.Fragment>
                                        <Card data={card} addCard={this.props.addCard} deck={this.props.state.deck}/>
                                    </React.Fragment>
                                ) : null}
                            </div>
                        </div>
                    : null}
                    <section className='closer' onClick={this.swapOpen}>
                        <i class={"fas fa-chevron-left " + (this.state.open === true ? "" : "reverse")}></i>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
