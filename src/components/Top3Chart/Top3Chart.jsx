import { Col } from 'antd'
import CubeStage from '../CubeStage/CubeStage'

export default function Top3Chart() {
  return (
    <>
        <Col span={8} style={{marginTop: '80px'}}>
            <CubeStage 
                crownColor='#B4B4B4'
                top='13px'
                height='175px' 
                backgroundColor='#eff5f8' 
                topBackgroundColor='#cce1f0' 
                user={{name: 'Bin'}}
            />
        </Col>
        <Col span={8} style={{marginTop: '80px'}}>
            <CubeStage  
                crownColor='#feb661'
                height='200px' 
                backgroundColor='#fcbe66' 
                topBackgroundColor='#f9af59'
                user={{name: 'Bin'}}
            />
        </Col>
        <Col span={8} style={{marginTop: '80px'}}>
            <CubeStage 
                crownColor='#6A3805'
                top='25px'
                height='150px' 
                backgroundColor='#eff5f8' 
                topBackgroundColor='#cce1f0' 
                user={{name: 'Bin'}}
            />
        </Col>
    </>
  )
}
