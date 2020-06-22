import React, { Component } from 'react';
import { Card, Button } from 'antd';
import picFromAntd from '../../../assets/images/picFromAntd.png'

const { Meta } = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
const tabList = [
    {
        key: 'tab1',
        tab: 'tab1',
    },
    {
        key: 'tab2',
        tab: 'tab2',
    },
];
const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};
class AntdCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'tab1',
        };
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 120 }}
                    cover={<img alt="picFromAntd" src={picFromAntd} />}
                >
                    <Meta title="Europe Street beat" description="https://ant.design/index-cn" />
                </Card>
                <Card title="Card Title">
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid
                        hoverable={false}
                        style={gridStyle}
                    >
                        Content
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
                <Card
                    style={{ width: '100%' }}
                    title="Card title"
                    extra={<Button type='link'>More</Button>}
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, 'key');
                    }}
                >
                    {contentList[this.state.key]}
                </Card>
            </div>
        );
    }
}

export default AntdCard;