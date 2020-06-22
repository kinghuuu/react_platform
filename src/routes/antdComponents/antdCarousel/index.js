import React, { Component } from 'react';
import { Carousel, Divider } from 'antd';
import './index.less'

const settings = {
    autoplay: true,
    speed: 3000,

};
class AntdCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // onChange = (index) => {
    //     console.log(`当前第${index + 1}页`);
    // }

    render() {
        return (
            <div>
                <Divider orientation="left">详细配置见: https://react-slick.neostack.com/docs/api/</Divider>
                <Carousel
                    {...settings}
                    // afterChange={this.onChange}
                >
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default AntdCarousel;