import PropTypes from 'prop-types'
import { CrownedIconStyled, CubeContainer, SurfaceStyled, UserInfoStyled } from "./styles"
import { Avatar, Flex, Typography } from 'antd'

export default function CubeStage({ 
    crownColor,
    backgroundColor, 
    height, 
    top, 
    topBackgroundColor,
    user
}) {

  return (
    <CubeContainer $height={height} $top={top}>
        <SurfaceStyled 
            $transform='translateZ(100px)' 
            $backgroundColor={backgroundColor}
        >
            <Avatar 
                size='large'
                src={user.img}
                style={{position: 'absolute', top: '-40%'}}
            >
                {!user.img && user.name.slice(0, 2).toUpperCase()}
            </Avatar>  
            <Flex vertical align='center' justify='center'>
                <CrownedIconStyled twoToneColor={crownColor} style={{fontSize: '30px', marginBottom: '10px'}} />
                <UserInfoStyled level={5}>{user.name}</UserInfoStyled>
                <UserInfoStyled level={4}>{user.score || 1000}</UserInfoStyled>
                <Typography.Paragraph level={5}>Points</Typography.Paragraph>
            </Flex>      
        </SurfaceStyled> 
        <SurfaceStyled 
            $transformOrigin='right' 
            $transform='rotateY(90deg) translateX(100px)' 
            $backgroundColor={backgroundColor}
        ></SurfaceStyled> 
        <SurfaceStyled 
            $transform='rotateY(180deg) translateZ(100px)' 
            $backgroundColor={backgroundColor}
        ></SurfaceStyled> 
        <SurfaceStyled 
            $transformOrigin='left' 
            $transform='rotateY(-90deg) translateX(-100px)' 
            $backgroundColor={backgroundColor}
        ></SurfaceStyled> 
        <SurfaceStyled 
            $transformOrigin='top' 
            $transform='rotateX(-90deg) translateY(-100px)' 
            $backgroundColor={topBackgroundColor}
        >
        </SurfaceStyled> 
        <SurfaceStyled 
            $transformOrigin='bottom' 
            $transform='rotateX(90deg) translateY(100px)' 
            $backgroundColor={backgroundColor}
        ></SurfaceStyled> 
    </CubeContainer>
  )
}

CubeStage.propTypes = {
    crownColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    top: PropTypes.string,
    topBackgroundColor: PropTypes.string,
    user: PropTypes.object
}