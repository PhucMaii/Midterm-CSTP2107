import { CloseCircleTwoTone } from '@ant-design/icons';
import { Modal } from 'antd';
import styled from 'styled-components';

const IncompletedStyled = styled(CloseCircleTwoTone)`
    position: relative;
    top: 10px;
    font-size: 25px;
`
const ModalStyled = styled(Modal)`
    top: 50%;
    transform: translate(0, -50%);
`

export { IncompletedStyled, ModalStyled }