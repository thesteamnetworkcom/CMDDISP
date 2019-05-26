class Instructions extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div className='instructions-pane'>
                    <div className='instruction-words'>
                        <pre>Currently Working Instructions:</pre>
                        <pre>[api]: written 'api' followed by the query. Query criteria can be found at Scryfall.com. It uses the engine exactly.
                        example: 'api f:modern' returns all modern cards.</pre>
                        <pre>[deck]: written 'deck' followed by the instructions. The instructions are:</pre>
                        <pre>    [action]: new/edit are currently the only two functioning actions.</pre>
                        <pre>          [new]: Example 'deck action=new' creates a new deck.</pre>
                        <pre>          [edit]: Example 'deck action=edit' edits the current deck.</pre>
                        <pre>          Without an action, the default is edit.</pre>
                        <pre>    [name]: the new name for the deck, either in edit mode or new mode</pre>
                        <pre>    [format]: a default format modifier for the new deck. places a base level query of 'f:[format]' on the card list.</pre>
                        <pre>full deck example: 'deck format=modern name=test.dec action=new'</pre>
                        <pre>Currently the only way to add cards is clicking on them annnddd they can't be decremented, I'm getting there</pre>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
