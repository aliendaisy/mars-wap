/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import Header from '../items/header';

import { Carousel } from 'antd-mobile';
import {fetchJson} from "../functional/common";


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            week: ['Tue','Wed','Thu','Fri','Sat','Sun','Mon']
        }
    }
    componentDidMount() {
        fetchJson('/user/getEventType',{},msg => {
            console.log(msg);
        });

    }
    render() {
        return(
            <div className="home">
                <Header/>
                <Carousel
                    className="mars-carousel"
                    dots={true}
                    dotStyle={{background: '#f00'}}
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => {
                        return(
                            <a href="##" key={val}>
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                    )})}
                </Carousel>

                <Carousel
                    className="week-carousel"
                    dots={false}
                    autoplay={false}
                >
                    {this.state.week.map(val => {
                        return(
                            <p>{val}</p>
                        )
                    })}

                </Carousel>
            </div>
        )
    }
}

export default Home;