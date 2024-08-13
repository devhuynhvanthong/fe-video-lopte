import React, { useEffect } from "react";
import { Card, Button, Typography } from "antd";
import "antd/dist/reset.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { linkOriginByKey } from "../../services/LinkService";


const { Title, Text } = Typography;

function Phone() {
    const [Link, setLink] = React.useState("");
    const { key } = useParams();
    const link_dowload_app = import.meta.env.VITE_LINK_DOWLOAD_APP
    const formatDeeplink = import.meta.env.VITE_DEEP_LINK_APP

    useEffect(() => {
        let subTitle = window.location?.origin
        document.title = `Video Lopte - ${subTitle}`
        if(key !== undefined){
            subTitle += key
            if (formatDeeplink !== undefined) {
                const customLink = `${formatDeeplink}${btoa(key)}`;
                setLink(customLink);
                window.location.href = customLink;
            }
        }
        window.close()
    },[])

   
  return (
    <div
      className="container md:max-w-full"
      style={{ backgroundColor: "#b3b3b3" }}
    >
      <Card className="card" style={{ width: 300, textAlign: "center" }}>
        <Title
          className="font-bold text-5xl"
          style={{
            color: "#147987",
            textShadow: "0px 3px 1px rgba(0, 0, 0, 0.2)",
          }}
          level={3}
        >
          Video Lopte
        </Title>
        <Text>Nếu bạn chưa cài ứng dụng, hãy tải ứng dụng từ đây.</Text>
        <Button
          className="rounded-full py-5 px-9 font-bold"
          type="primary"
          style={{ marginTop: 16, backgroundColor: "#147987" }}
        >
          <a href={Link}>Xem Phim</a>
        </Button>
        <div className="flex items-center justify-center gap-7 mt-5 pb-5">
          <a
            href={link_dowload_app}
            className="underline"
            style={{ color: "#0f4eaa" }}
          >
            {" "}
            Tải ứng dụng
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Phone;
