const Layout = (props) => {
    return(
        <React.Fragment>
            <Header
                switchState={props.switchState}
                newPage={props.newPage}
             />
            <div className='root-wrapper'>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}
