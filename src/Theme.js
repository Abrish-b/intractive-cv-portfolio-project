import { Card } from 'antd';

const Theme = () => {
  return (
    <div className="site-card-wrapper">
      <Card.Grid
        style={{
        width: 300,
        }}
        cover={
        <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        }>
     </Card.Grid>
      <Card.Grid
        style={{
        width: 300,
        }}
        cover={
        <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        }>
     </Card.Grid>
    
      <Card.Grid
        style={{
        width: 300,
        }}
        cover={
        <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }>
    </Card.Grid>
  </div>
  )
}

export default Theme