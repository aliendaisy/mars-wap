import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import NumChange from '../functional/numChange';

import {thumbUp} from "../functional/common";
import {ShowDetail, ThumbUp} from '../../action/action';


class DetailCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isInterest: this.props.thumb_up,
            isJoin: this.props.join_in
        }
    }
    toProduct(ei,ci) {
        if(!this.props.isProduct) {
            this.props.ShowDetail(ei,ci);
            this.context.router.history.push('/product');
        }
    }
    handleChange(e) {
        // console.log(e) //e为input框里的值


    }
    interestToggle(ci) {
        let fetch = thumbUp(ci);
        this.props.ThumbUp(fetch).then(() => {
            this.setState({isInterest: !this.state.isInterest});
        });
    }
    eventToggle(e) {
        console.log(e)
    }
    render() {
        let {imgUrl,name,heartNum,addr,time,price,thumb_up,join_in,eventId,commodityId} = this.props;
        return(
            <div className="detail-card">
                <div
                    className="img-container"
                    style={{background: `url(${imgUrl}) no-repeat`,}}
                    onClick={this.toProduct.bind(this,eventId,commodityId)}
                >
                </div>
                <div className="info">
                    <div className="top">
                        <p>{name}</p>
                        <div>
                            <span
                                className={this.state.isInterest ? "iconfont icon-full" : "iconfont icon-heart"}
                                onClick={this.interestToggle.bind(this,commodityId)}>
                            </span>
                            <p className="heart">{heartNum}</p>
                            <span className="iconfont icon-share">
                            </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>{addr}</p>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="order">
                    <p className="price">${parseInt(price) / 1000}</p>
                    <NumChange
                        handleChange={this.handleChange.bind(this)}
                    />
                    <div
                        className={this.props.join_in ? "reserve-btn reserved" : "reserve-btn reserve"}
                        onClick={this.eventToggle.bind(this,commodityId)}
                    >Reserved</div>
                </div>
            </div>
        )
    }
}

DetailCard.contextTypes = {
    router: PropTypes.object
};

const mapStateToProps = (state,props) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ShowDetail, ThumbUp
    },dispatch);

};

export default connect(mapStateToProps,mapDispatchToProps)(DetailCard);
