import React, { useState } from "react";
import { Button, Modal,message } from "antd";
import { deleteLink } from "../../services/LinkService";

const Modaldelete = ({
  dataDelete,
  open,
  setOpen,
  setDataDelete,
  fetchData,
  onPageChange,limit
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

//   console.log(dataDelete);

  const handleOk = async () => {
    if (!dataDelete) {
      message.error("Không tìm thấy link cần xoá");
      return;
    }
    // Xử lý giá trị khi nhấn nút thêm
    setConfirmLoading(true);
    let res = await deleteLink(dataDelete?.id);
    console.log(res);
    if (res.status === 200) {
      message.success("Xoá link thành công!");
      setDataDelete(null);
      setOpen(false);
      fetchData({ page: 1, limit: limit });
      onPageChange(1, limit);
    }

    setConfirmLoading(false);
  };

  return (
    <>
      <Modal
        open={open}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        // onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="text-xl font-bold mb-2 text-center">Xác nhận</h1>
          <div className="w-full max-w-sm space-y-4">
            <div className="text-center">
              <h3>{`Bạn có chắc chắn muốn xoá link này không?`}</h3>
              <Button
                type="primary"
                onClick={handleOk}
                loading={confirmLoading}
                className="w-4/12 text-center font-semibold py-5"
                style={{ backgroundColor: "#0B3335" }}
              >
                Xoá
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Modaldelete;
