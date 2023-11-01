import { Col, Row } from 'antd'
import PropTypes from 'prop-types'
import CubeStage from '../CubeStage/CubeStage'

export default function Top3Chart({
    firstPlace,
    secondPlace,
    thirdPlace
}) {
  return (
    <Row>
        <Col span={8} style={{marginTop: '80px'}}>
            <CubeStage 
                crownColor='#B4B4B4'
                top='25px'
                height='175px' 
                backgroundColor='#eff5f8' 
                topBackgroundColor='#cce1f0' 
                user={secondPlace}
            />
        </Col>
        <Col span={8} style={{marginTop: '80px'}}>
            <CubeStage  
                crownColor='#feb661'
                top='1px'
                height='200px' 
                backgroundColor='#fcbe66' 
                topBackgroundColor='#f9af59'
                user={firstPlace}
            />
        </Col>
        <Col span={8} style={{marginTop: '80px'}}>
            <CubeStage 
                crownColor='#6A3805'
                top='50px'
                height='150px' 
                backgroundColor='#eff5f8' 
                topBackgroundColor='#cce1f0' 
                user={thirdPlace}
            />
        </Col>
    </Row>
  )
}

Top3Chart.propTypes = {
    firstPlace: PropTypes.object,
    secondPlace: PropTypes.object,
    thirdPlace: PropTypes.object
}
