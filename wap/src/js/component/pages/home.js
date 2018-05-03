/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Header from '../items/header';
import DetailCard from '../items/detail-card';

import { Carousel,PullToRefresh } from 'antd-mobile';
import {fetchJson} from "../functional/common";

import {Redirect} from 'react-router-dom';

import 'antd-mobile/lib/pull-to-refresh/style/css.js'; //获取样式

const data = [
    {
        imgUrl: `https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`,
        name: 'Food1',
        heartNum: 35,
        addr: '123 Street, Jersey City',
        time: '2018.01.01 - 12:00 PM - 12:30 PM',
        price: 15
    },{
        imgUrl: `https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`,
        name: 'Food1',
        heartNum: 35,
        addr: '123 Street, Jersey City',
        time: '2018.01.01 - 12:00 PM - 12:30 PM',
        price: 15
    },{
        imgUrl: `https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`,
        name: 'Food1',
        heartNum: 35,
        addr: '123 Street, Jersey City',
        time: '2018.01.01 - 12:00 PM - 12:30 PM',
        price: 15
    },{
        imgUrl: `https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`,
        name: 'Food1',
        heartNum: 35,
        addr: '123 Street, Jersey City',
        time: '2018.01.01 - 12:00 PM - 12:30 PM',
        price: 15
    },
];

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: '3.2rem',
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            week: [], //日期数组
            category: [], //事件数组
            dayIndex: 0,
            typeIndex: 0,
            toProduct: false, //是否跳转详情页的指针
            refreshing: false,
        }
    }
    componentWillMount() {
        let dateArr = [];

        for(let i = 0;i < 7;) {
            let week = moment(new Date()).add(i, 'days').format('dddd').substring(0,3);
            let date = moment(new Date()).add(i, 'days').format('MM.DD');
            dateArr.push({'week': week, 'date': date});
            i ++;
        }

        this.setState({week: dateArr});
    }
    componentDidMount() {
        let eventArr = [];
        fetchJson('/user/getEventType',{},msg => {
            console.log(msg);
            if(msg.result === "success") {
                let data = msg.data.event_type_list;
                data.map(res => {
                    eventArr.push({'title': res})
                });
                this.setState({category: eventArr});
            }
        });

    }
    dayClick(index) {
        this.setState({
            dayIndex: index
        });
    }
    typeClick(index) {
        this.setState({
            typeIndex: index
        });
    }
    toProduct() {
        this.setState({toProduct: true});
    }
    render() {
        if(this.state.toProduct) {
            return <Redirect push to="/product"/>
        }
        return(
            <div className="home">
                <Header/>
                {/*轮播图*/}
                <Carousel
                    className="mars-carousel"
                    dots={true}
                    dotStyle={{
                        background: 'transparent',
                        width: '.12rem',
                        height: '.12rem',
                        margin: '0 .1rem',
                        display: 'block',
                        borderRadius: '50%',
                        border: '1px solid rgba(0,0,0,0.5)'
                    }}
                    dotActiveStyle={{
                        background: 'rgba(0,0,0,0.5)',
                        width: '.12rem',
                        height: '.12rem',
                        margin: '0 .1rem',
                        display: 'block',
                        borderRadius: '50%',
                        border: '1px solid transparent'
                    }}
                    selectedIndex={0}
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => {
                        return(
                            <img
                                key={val}
                                style={{height: this.state.imgHeight}}
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                }}
                            />
                        )
                    })}
                </Carousel>
                {/*中间选择区域*/}
                <div className="whiteBg">
                    <div className="week-list-box">
                        <ul className="week-list">
                            {this.state.week.map((val,i) => {
                                let dayStyle = i === this.state.dayIndex ? 'active' : '';
                                return(
                                    <li
                                        key={i}
                                        className={dayStyle}
                                        onClick={this.dayClick.bind(this,i)}
                                    >
                                        <p>{val.week}</p>
                                        <p>{val.date}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="category-list-box">
                        <ul className="category-list">
                            {this.state.category.map((val,i) => {
                                let typeStyle = i === this.state.typeIndex ? 'active' : '';
                                return(
                                    <li
                                        key={i}
                                        className={typeStyle}
                                        onClick={this.typeClick.bind(this,i)}
                                    >
                                        <span>{val.title}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                {/*获取事件详情*/}
                <PullToRefresh
                    style={{
                        background: '#fff',
                        height: '10.88rem',
                        overflow: 'auto'
                    }}
                    direction="down"
                    distanceToRefresh="50"
                    /*onRefresh={() => {*/
                    /*this.setState({ refreshing: true });*/
                    /*setTimeout(() => {*/
                    /*this.setstate({ refreshing: false });*/
                    /*}, 1000);*/
                    /*}}*/
                    indicator={{
                        activate: 'Release to complete',
                        deactivate: 'Pull to refresh',
                        finish: 'Refreshed',
                        release:
                            <div style={{transform: 'translateY(-20px)'}}>
                                <img style={{width: '30px',height: '30px'}} src={require("../../../images/loading.gif")} alt=""/>
                            </div>
                    }}
                >
                    {data.map((res,i) => {
                        return(
                            <DetailCard
                                key={i}
                                onClick={this.toProduct.bind(this)}
                                imgUrl={res.imgUrl}
                                name={res.name}
                                heartNum={res.heartNum}
                                addr={res.addr}
                                time={res.time}
                                price={res.price}
                            />
                        )
                    })}
                </PullToRefresh>






            </div>
        )
    }
}

export default Home;