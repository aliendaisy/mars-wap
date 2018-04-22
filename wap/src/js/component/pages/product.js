import React,{Component} from 'react';
import Header from '../items/header';
import DetailCard from '../items/detail-card';


class Product extends Component{
    render() {
        return(
            <div className="product">
                <Header/>
                <DetailCard
                    imgUrl={`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`}
                    name={'Food1'}
                    heartNum={35}
                    addr={'123 Street, Jersey City'}
                    time={'2018.01.01 - 12:00 PM - 12:30 PM'}
                    price={15}
                />
            </div>
        )
    }
}

export default Product;