import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Table, Button, Pagination, message } from "antd";
import ModalNotification from "../modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {  useNavigate, useSearchParams } from "react-router-dom";
import {  getListFillter } from "../../services/LinkService";
import Modaldelete from "../modal/ModalDelete";



const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataDelete, setDataDelete] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
    const page = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
  const limit = 10

// console.log("page", page);
 
  const onPageChange = useCallback(
    (page, pageSize) => {
      const currentParams = Object.fromEntries(searchParams);
      setSearchParams({ ...currentParams, page });
    },
    [searchParams, setSearchParams]
  );
  const fetchData = async (params) => {
    
    try {
      setLoading(true);
      const response = await getListFillter(params);
      const { data } = response;
      
      if (response.status === 200) {

        setData(data.items);
        setTotalItems(data.total);
      } 
       
    
      // Update URL
      // navigate(`?page=${page}&pageSize=${pageSize}`);
    } catch (error) {
      if (error?.response?.request?.status === 401) {
        navigate("/");
      }
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };
  const handleCopy = (text) => {
    const currentDomain = window.location?.origin 
    let textCopy = `${currentDomain}/${text}`;
      navigator.clipboard
        .writeText(textCopy)
        .then(() => {
           message.success("Sao chép thành công!");
  
        })
        .catch((err) => {
           message.success(`"Lỗi khi sao chép:", ${err}`);
        });
    };
  const columns = useMemo(() => {
    return [
      {
        title: "STT",
        key: "stt",
        width: "5%",
        render: (text, record, index) => (
          // console.log(page),
          (page - 1) * limit + index + 1)
        // Thêm `md:` để chỉ hiển thị cột trên màn hình lớn hơn
      },
      {
        title: "Link Gốc",
        dataIndex: "link_original",
        key: "link_original",
        width: "50%",
        render: (text) => (
          <a
            href={text}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {text}
          </a>
        ),
      },
      {
        title: "Chuyển Đổi",
        dataIndex: "link_short",
        key: "link_short",
        width: "30%",
        render: (text) => (
          <div className="flex items-center justify-center space-x-2">
            <a
              href={`/${text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline mt-1"
            >
              {text}
            </a>
            <button
              onClick={() => handleCopy(text)}
              className="flex items-center text-center justify-center p-2 rounded bg-gray-200 hover:bg-gray-300"
              aria-label="Copy to clipboard"
            >
              <FontAwesomeIcon style={{ color: "#0B3335" }} icon={faCopy} />
            </button>
          </div>
        ),
      },
      {
        title: "Thao Tác",
        dataIndex: "",
        key: "x",
        width: "15%",
        render: (text, record) => (
          <div className="flex justify-center">
            <Button
              type="primary"
              style={{ backgroundColor: "#0B3335" }}
              onClick={() => handleDelete(record)}
            >
              Xoá
            </Button>
          </div>
        ),
      },
    ];
  }, [page,limit]);
  
const handleDelete = (record) => {
  setDataDelete(record);
  setShowModalDelete(true);
};
  useEffect(() => {
    document.title = "Dashboard - Video Lopte ";
    if (!searchParams.get("page")) {
      setSearchParams({
        page: "1",
      });
    }
    // document.body.classList.add("overflow-hidden");
    // return () => {
    //   document.body.classList.remove("overflow-hidden");
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    if (searchParams.get("page")) {
      const params = Object.fromEntries(searchParams);
      fetchData({ ...params, limit: limit });
    }
    
  }, [searchParams]);

  // const handleTableChange = (pagination) => {
  //   fetchData(pagination.current, pagination.pageSize);
  // };

  const showModal = () => {
    setOpen(true);
  };


 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 ">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4"
      style={{
        marginLeft: "20px",
        marginRight: "20px"
      }}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Bảng Điều Khiển</h1>
          <Button
            type="primary"
            style={{ backgroundColor: "#0B3335" }}
            onClick={showModal}
          >
            Thêm Mới
          </Button>
        </div>
        <div className="overflow-auto max-h-96 min-h-96">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="h-full"
            loading={loading}
          />
        </div>
        <div className="flex justify-end mt-4">
          <Pagination
            onChange={onPageChange}
            total={totalItems}
            defaultCurrent={1}
            // pageSizeOptions={["5", "20", "50"]}
            current={page}
            pageSize={limit}
          />
        </div>
      </div>

      <ModalNotification
        open={open}
        setOpen={setOpen}
        fetchData={fetchData}
        onPageChange={onPageChange}
        limit={limit}
      />
      <Modaldelete
        open={showModalDelete}
        setOpen={setShowModalDelete}
        dataDelete={dataDelete}
        setDataDelete={setDataDelete}
        fetchData={fetchData}
        onPageChange={onPageChange}
        limit={limit}
      />
    </div>
  );
};

export default Dashboard;
