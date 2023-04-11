import { Steps, Space } from 'antd';
import './index.css'
import LineBar from './LineBar'
const items = [
    { title: '相识', description: '2020-09-28' },
    { title: '相见', description: '2020-12-19' },
    { title: '表白', description: '2021-01-01' },
    { title: '订婚', description: '2023-04-29' },
    { title: '领证', description: '2023-05-15' },
    { title: '结婚', description: '2023-10-01' },
]
export default function Content() {
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <div className='wrap'>
                <h3>时间痕迹</h3>
                <Steps current={items.length} items={items} />
            </div>
            <div className='wrap'>
                <h3>生理周期</h3>
                <LineBar />
            </div>
        </Space>
    )
}