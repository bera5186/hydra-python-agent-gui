import React from 'react'
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    fabMargin: {
    }
});

class OperationsButtons extends React.Component {
    constructor(props) {
        super(props);
        var buttons = []
        
        Object.keys(this.props.operations).map( (operation) => {
            buttons[operation] = false
        })

        const selectedButton = 0;
        buttons[ selectedButton ] = true
        
        this.state = {
            buttons: buttons,
            selectedButton: selectedButton,
        }
    }

    selectButton(clickedButton){
        var updatedButtons = this.state.buttons.slice();
        updatedButtons[this.state.selectedButton] = false;
        updatedButtons[clickedButton] = true;
        this.setState({
            buttons: updatedButtons,
            selectedButton: clickedButton
        })
         
    }

    generateButtons(){
        const collectionsArray = Object.keys(this.props.operations);
        
        const { classes } = this.props;

        var buttons = collectionsArray.map( (currProperty, index) => {
            const operation = this.props.operations[currProperty].method 
            return(<Fab
                key={currProperty}
                color={this.state.buttons[currProperty] ? "secondary" : null}
                className={classes.fabMargin}
                onClick={ (e) => {this.selectButton(currProperty); this.props.selectOperation(currProperty)}}>
                {operation}
            </Fab>)})
        return buttons;
    }

    render() {
        
        return this.generateButtons()
    }
}

export default withStyles(styles)(OperationsButtons);
