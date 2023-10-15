import { Modal } from "antd";
import { ReactNode } from "react";

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

export default ModalComponent;
