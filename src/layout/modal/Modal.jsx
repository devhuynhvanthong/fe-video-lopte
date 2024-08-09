import React, { useState } from "react";
import { Input, Button, message, Modal } from "antd";
import { createLink } from "../../services/LinkService";

const ModalNotification = ({ open, setOpen, fetchData, onPageChange,limit }) => {
  const [link, setLink] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleAdd = async () => {
    if (link.trim() === "") {
      message.error("Vui lòng nhập link!");
      return;
    }
    // Xử lý giá trị khi nhấn nút thêm
    setConfirmLoading(true);
    let res = await createLink({ link_original: link });
    console.log(res);
    if (res.status === 200) {
      message.success("Thêm mới thành công!");
      setLink(""); // Xóa dữ liệu sau khi thêm mới
      setConfirmLoading(false);
      setOpen(false);
      fetchData({ page: 1, limit: limit });
      onPageChange(1, limit);
    }

    setConfirmLoading(false);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)} // Đóng modal khi nhấn Cancel
      footer={null} // Ẩn phần footer mặc định của Modal
      centered
      className="custom-modal" // Thêm className để tùy chỉnh
    >
      <div className="flex flex-col items-center justify-center gap-7">
        <h1 className="text-xl font-bold mb-2 text-center">Thêm Mới</h1>
        <div className="w-full max-w-sm space-y-4">
          <label className="text-base block text-gray-700">Nhập Link</label>
          <Input
            value={link}
            onChange={handleInputChange}
            placeholder="Nhập link tại đây"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />

          <div className="text-center">
            <Button
              type="primary"
              onClick={handleAdd}
              loading={confirmLoading}
              className="w-4/12 text-center font-semibold py-5"
              style={{ backgroundColor: "#0B3335" }}
            >
              Thêm
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalNotification;
