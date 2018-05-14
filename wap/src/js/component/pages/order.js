import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import TopBar from '../items/topBar';

class Order extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        };
    }
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    goBack() {
        this.context.router.history.goBack();
    }
    render() {
        return(
            <div className="order">
                <TopBar goBack={this.goBack.bind(this)}/>
                {(() => {
                   if(this.state.orderList && this.state.orderList.length === 0) {
                       return(<div className="isCenter">You don’t have any orders yet</div>)
                   }
                })()}
            </div>
        )
    }
}

Order.contextTypes = {
    router: PropTypes.object
};
const mapStateToProps = (state,props) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({

    },dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(Order);