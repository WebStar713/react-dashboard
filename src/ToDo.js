import React, { Component } from 'react';
import ToDoMenu from './ToDoMenu';
import classNames from "classnames";


import { withStyles } from "@material-ui/core/styles";

const styles = {
    ToDo: {
        display: "flex",
        justifyContent: "space-between"
    },
    listItem: {
        listStyleType: "none",
        display: "flex",
        position: "relative",
        marginBottom: "12px",
        cursor: "pointer",
    },
    task: {
        textDecoration: props => props.checked ? "line-through" : "none",
        color: props => props.checked ? "gray" : "white",
        transition: "color 0.3s ease-in",
        fontSize: "16px",
        textShadow: "none",
        paddingLeft: "25px",
    },
    textInput: {
        background: "none",
        border: "none",
        color: "white",
        fontSize: "16px",
        padding: 0,
        paddingLeft: "25px",
    },
    checkboxInput: {
        position: "absolute",
        opacity: 0,
        cursor: "pointer",
        height: "16px",
        width: "16px",
        zIndex: 100,
        margin: 0
    },
    checkmark: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "16px",
        width: "16px",
        backgroundColor: props => props.checked ? "#5CA19E" : "#eee",
        transition: "background-color 0.3s ease-in 0.1s",
        borderRadius: "2px",
        "&:hover": {
            backgroundColor: "#C6DEDE"
        },
    },
    checked: {
        content: "",
        position: "absolute",
        opacity: props => props.checked ? 1 : 0,
        transition: "opacity 0.1s ease-in",
        left: "5px",
        top: "2px",
        width: "3px",
        height: "8px",
        border: "solid white",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(45deg)",
    },
    btn: {
        color: "white",
        "&:hover": {
            color: "aquamarine",
            transition: "color 0.3s ease-in"
        }
    }
}

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    toggleForm() {
        this.setState(st => ({ isEditing: !st.isEditing }));
    }
    handleToggle() {
        this.props.toggle(this.props.id);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleUpdate(e) {
        e.preventDefault();
        this.toggleForm();
        this.props.update(this.state.task, this.props.id);
    }
    handleRemove() {
        this.props.remove(this.props.id);
    }
    render() {
        const { isEditing, task } = this.state;
        const { checked, classes } = this.props;
        let displayMode = (
            <span className={classNames(classes.task)}>{this.props.task}</span>
        )
        let editMode = (
            <form onSubmit={this.handleUpdate}>
                <input className={classNames(classes.textInput)} type="text" name="task" value={task} onChange={this.handleChange} />
            </form>
        )
        return (
            <div className={classes.ToDo}>
                <li className={classes.listItem}>
                    <input className={classes.checkboxInput} type="checkbox" checked={checked} onChange={this.handleToggle} />
                    <span className={classes.checkmark}><span className={classes.checked}></span></span>
                    {isEditing ? editMode : displayMode}
                </li>
                {!isEditing && <div>
                    <ToDoMenu edit={this.toggleForm} remove={this.handleRemove}/>
                </div>}
            </div>
        )
    }
}

export default withStyles(styles)(ToDo);