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
        let detail = JSON.parse(localStorage.getItem('detail'));

        console.log(detail)
        return(
            <div className="product">
                <Header/>
                <DetailCard
                    imgUrl={detail.imgUrl}
                    name={detail.name}
                    heartNum={detail.heartNum}
                    addr={detail.addr}
                    time={detail.time}
                    price={detail.price}
                    eventId={detail.eventId}
                    commodityId={detail.commodityId}
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