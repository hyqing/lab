import React, {useEffect} from 'react';
import {Button, Steps} from 'antd';


const description = 'This is a description.';

function StepDemo() {
    const [items, setItems] = React.useState([]);
    const [current, setCurrent] = React.useState(0);

    useEffect(() => {
        setItems(genStepItems());
    }, []);

    useEffect(() => {
        genStepItems()
    }, [current]);


    const genStepItems = () => {
        return [{
            title: 'Finished', description: `现在的步骤是：${current}`,
        }, {
            title: 'In Progress', description: `现在的步骤是：${current}`, subTitle: 'Left 00:00:08',
        }, {
            title: 'Waiting', description: `现在的步骤是：${current}`,
        },]
    }

    const next = () => {
        setCurrent(current + 1);
    };

    return (
        <>
            <Steps
                current={current}
                items={items}
            />
            <Button onClick={next}>下一页</Button>
        </>
    );
}

export default StepDemo;