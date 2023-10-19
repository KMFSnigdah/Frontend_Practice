import { Modal } from "antd";
import PropTypes from 'prop-types';

const ModalComponent = ({
  title,
  visible,
  children,
  centered,
  handleCancel,
  width,
  className,
}) => {
  return (
    <>
      {visible && (
        <Modal
          title={title}
          open={visible}
          onCancel={handleCancel}
          footer={null}
          centered={centered}
          width={width || null}
          className={
            className || "w-[calc(100%-2rem)] tab-sm:w-[30rem] pc:w-[800px]"
          }
        >
          {children}
        </Modal>
      )}
    </>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.node,
  visible: PropTypes.bool,
  children: PropTypes.node,
  centered: PropTypes.bool,
  handleCancel: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default ModalComponent;
