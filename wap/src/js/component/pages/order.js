import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import TopBar from '../items/topBar';
import Loading from '../items/loading';

import {queryCart} from "../functional/common";

import {QueryCartList} from "../../action/action";
class Order extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orderList: [{
                time: 'Monday, 08.08',
                vendor: '商家1'
            }]
        };
    }
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    componentDidMount() {
        let fetch = queryCart();
        this.props.QueryCartList(fetch);
    }
    goBack() {
        this.context.router.history.goBack();
    }
    render() {
        this.cartList = this.props.cartList ? this.props.cartList : localStorage.getItem('cartList');
        return(
            <div className="order">
                <TopBar goBack={this.goBack.bind(this)}/>
                {(() => {
                    console.log(this.cartList)
                    if(this.props.loading) {
                        //加载动画
                        return(<Loading style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            margin: 'auto'
                        }}/>)
                    }else{
                        if(this.cartList) {
                            //没有order数据显示
                            if(this.cartList.length <= 0) {
                                return(<div className="isCenter">You don't have any orders yet</div>)
                            }
                            //有order数据显示
                            else{
                                return(
                                    this.state.orderList.map((res,i) => (
                                        <div key={i}>
                                            <div className="time">{res.time}</div>
                                            <div className="vendor-box">
                                                <div className="vendor">{res.vendor}</div>
                                                <div className="orderGoods">
                                                    <div>
                                                        <p>商品1</p>
                                                        <p>1</p>
                                                        <span className="iconfont icon-close"></span>
                                                    </div>
                                                    <div>
                                                        <p>商品2</p>
                                                        <p>1</p>
                                                        <span className="iconfont icon-close"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box">
                                                <div>
                                                    <p>12:00 @ 123 Street and 456 Ave, BJ后面</p>
                                                    <p className="circle"></p>
                                                </div>
                                                <div>
                                                    <p>12:00 @ 123 Street and 456 Ave, BJ后面</p>
                                                    <p className="circle"></p>
                                                </div>
                                                <div>
                                                    <p>12:00 @ 123 Street and 456 Ave, BJ后面</p>
                                                    <p className="circle"></p>
                                                </div>
                                            </div>
                                            <div className="time">{res.time}</div>
                                            <div className="vendor-box">
                                                <div className="vendor">{res.vendor}</div>
                                                <div className="orderGoods">
                                                    <div>
                                                        <p>商品1</p>
                                                        <p>1</p>
                                                        <span className="iconfont icon-close"></span>
                                                    </div>
                                                    <div>
                                                        <p>商品2</p>
                                                        <p>1</p>
                                                        <span className="iconfont icon-close"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box">
                                                <div>
                                                    <p>12:00 @ 123 Street and 456 Ave, BJ后面</p>
                                                    <p className="circle"></p>
                                                </div>
                                                <div>
                                                    <p>12:00 @ 123 Street and 456 Ave, BJ后面</p>
                                                    <p className="circle"></p>
                                                </div>
                                                <div>
                                                    <p>12:00 @ 123 Street and 456 Ave, BJ后面</p>
                                                    <p className="circle"></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                );
                            }
                        }
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
    console.log(state)
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        QueryCartList
    },dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(Order);