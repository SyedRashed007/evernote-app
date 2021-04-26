import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles'

class EditorComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(<div>hello frm editor</div>)
    }
}

export default withStyles(styles)(EditorComponent)