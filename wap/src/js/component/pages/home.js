/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import Header from '../items/header';

import { Carousel } from 'antd-mobile';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        }
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
                                <img src={`https://zos.alipayobjects.com/rmsportal/${val}.png`} alt=""/>
                            </a>
                    )})}
                </Carousel>
            </div>
        )
    }
}

export default Home;