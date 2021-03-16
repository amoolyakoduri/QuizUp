import React, { Component, Fragment } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import QuesList from './quesList';
import { setCurQues } from '../../../redux/quiz/quiz-actions';
import { Button } from "reactstrap";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import 'react-sidemenu/dist/side-menu.css';
import SideMenu from 'react-sidemenu';

import './sidenav.scss';

class Sidenav extends Component {

    changeCurQues = (event) => {
        this.props.setCurQues(event.target.value);
    }

    render() {

        let questions = this.props.questions;
        let items = <Fragment>{
            questions!=null && questions!=undefined && questions.len!=0 &&
            questions.forEach(ques => {
                <NavItem><NavText>Question {ques.id}</NavText>
                </NavItem>
            })
        }</Fragment>
        return (
            <Fragment>
                <ProSidebar className="shadow-lg p-3 mb-5 rounded sn-bg-color" >
                    <Menu iconShape="square">
                        <MenuItem >
                            <button className="only-text-btn" value="0" onClick={this.changeCurQues}>Instructions</button>
                        </MenuItem>
                        <MenuItem >
                            <button className="only-text-btn" value="1" onClick={this.changeCurQues}>Question 1</button>
                        </MenuItem>
                        <MenuItem>
                            <button className="only-text-btn" value="2" onClick={this.changeCurQues}>Question 2</button>
                        </MenuItem>
                        {/* {
                            questions!=null && questions!=undefined && questions.len!=0 ?
                            questions.forEach(ques => {
                                <MenuItem><p>Question {ques.id}</p>
                                </MenuItem>
                            }) : <MenuItem>1</MenuItem>
                        } */}
                    </Menu>
                </ProSidebar>
                {/* <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="Instructions">
    <NavItem eventKey="Instructions">
        <NavText>
            Instructions
        </NavText>
    </NavItem>
    {items}
    </SideNav.Nav>
</SideNav> */}
{/* <SideMenu items={questions}/> */}
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    user : state.user,
    quiz : state.quiz
});

const mapDispatchToProps = (dispatch) => {
    return {
        setCurQues: (payload) => { dispatch(setCurQues(payload)) },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Sidenav));
