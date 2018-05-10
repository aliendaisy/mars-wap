import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../items/header';
import DetailCard from '../items/detail-card';


class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        let detail = this.props.detail ? this.props.detail : JSON.parse(localStorage.getItem('detail'));
        console.log(this.props.detail)
        console.log(detail)
        return(
            <div className="product">
                <Header/>
                <DetailCard
                    imgUrl={detail.imgUrl}
                    name={detail.name}
                    heartNum={detail.thumb_up_num}
                    addr={detail.address}
                    time={detail.time}
                    price={detail.price}
                    eventId={detail.event_id}
                    commodityId={detail.commodity_id}
                    thumb_up={detail.thumb_up}
                    join_in={detail.join_in}
                    isProduct={true} //点击是否跳转页面的指针
                />
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    console.log(state);
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({

    },dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(Product);