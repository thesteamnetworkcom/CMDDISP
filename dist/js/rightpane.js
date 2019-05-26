class RightPane extends React.Component{
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
                <div className={"RightPane " + (this.state.open === true ? "xPane" : "yPane")}>
                    <section className='closer' onClick={this.swapOpen}>
                    </section>
                    {this.state.open === true ?
                        <React.Fragment>
                            <div className='query-wrapper'>
                                <h2>Queries</h2>
                                <ul className='query-list'>
                                    {this.props.state.queries.map(query=>
                                        <Query key={query.id} data={query} removeQuery={this.props.removeQuery} />
                                    )}
                                </ul>
                            </div>
                            <div className='deck-wrapper'>
                                <h2>Deck {this.props.state.deck !== null ? "- " + this.props.state.deck.name + (this.props.state.deck.format !== null ? "- " + this.props.state.deck.format : "") : ""}</h2>
                                <ul className='deck-list'>
                                    {this.props.state.deck !== null ? Object.keys(this.props.state.deck.cards).map(cardType =>
                                        <React.Fragment>
                                            <h3>{cardType}</h3>
                                            {this.props.state.deck.cards[cardType].map(card=>
                                                <CardSmall data={card} />
                                            )}
                                        </React.Fragment>
                                    ) : null}
                                </ul>
                            </div>
                        </React.Fragment>
                    : null}
                </div>
            </React.Fragment>
        )
    }
}
