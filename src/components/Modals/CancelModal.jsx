import PropTypes from 'prop-types';
import { Button } from 'antd';
import { ModalStyled } from './styles';

export default function CancelModal({
    handleLeave,
    onCancel,
    open,

}) {
  return (
    <ModalStyled 
        open={open}
        title="The result will not be saved if you leave" 
        footer={[
            <Button key="back" onClick={onCancel}>Cancel</Button>,
            <Button type="primary" key="submit" onClick={handleLeave}>Leave</Button>,
        ]}
    >
        
    </ModalStyled>
  )
}

CancelModal.propTypes = {
    handleLeave: PropTypes.func,
    onCancel: PropTypes.func,
    open: PropTypes.bool
}