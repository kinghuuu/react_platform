import React, { Component } from 'react';
import { Typography, Space, Slider } from 'antd';

const { Title, Text, Link, Paragraph } = Typography;
class AntdTypography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 1,
        };
    }

    onChange = rows => {
        this.setState({ rows });
    };

    render() {
        const { rows } = this.state;
        const article =
            `To be, or not to be, that is a question: Whether it is nobler in the mind to suffer.
            The slings and arrows of outrageous fortune Or to take arms against a sea of troubles,
            And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The
            heart-ache and the thousand natural shocks That flesh is heir to,
            'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance
            to dream: ay, there's the rub! For in that sleep of death what dreams may come
            When we have shuffled off this mortal coil, Must give us pause. There 's the respect
            That makes calamity of so long life`;

        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Title>h1. Ant Design</Title>
                    <Title level={2}>h2. Ant Design</Title>
                    <Title level={3}>h3. Ant Design</Title>
                    <Title level={4}>h4. Ant Design</Title>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Space direction="vertical">
                        <Text>Ant Design</Text>
                        <Text type="secondary">Ant Design</Text>
                        <Text type="warning">Ant Design</Text>
                        <Text type="danger">Ant Design</Text>
                        <Text disabled>Ant Design</Text>
                        <Text mark>Ant Design</Text>
                        <Text code>Ant Design</Text>
                        <Text keyboard>Ant Design</Text>
                        <Text underline>Ant Design</Text>
                        <Text delete>Ant Design</Text>
                        <Text strong>Ant Design</Text>
                        <Link href="https://ant.design" target="_blank">Ant Design</Link>
                    </Space>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Paragraph ellipsis>
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                    </Paragraph>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                    </Paragraph>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Slider value={rows} min={1} max={10} onChange={this.onChange} />
                    <Paragraph
                        ellipsis={{
                            rows,
                            expandable: true,
                            suffix: '--William Shakespeare',
                        }}
                        title={`${article}--William Shakespeare`}
                    >
                        {article}
                    </Paragraph>
                </div>
            </div>
        );
    }
}

export default AntdTypography;