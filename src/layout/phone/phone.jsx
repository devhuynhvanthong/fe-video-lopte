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

      // const fetchData = async (key) => {
      //   try {
      //     const response = await linkOriginByKey(key);
      //     const { data } = response;
      //
      //     if (response.status === 200) {
      //
      //           const url = data?.link_original;
      //           const encodedUrl = btoa(key);
      //           // console.log(data);
      //         const customLink = `version-app-lopte://resolve/transfer?data=${encodedUrl}`;
      //         setLink(customLink);
      //         window.location.href = customLink;
      //           // console.log(customLink);
      //     }
      //   } catch (error) {
      //
      //     console.error(
      //       "Error fetching data:",
      //       error.response.request.status === 401
      //     );
      //   }
      // };
    useEffect(() => {

        let subTitle = window.location?.origin
        if(key !== undefined){
            subTitle += key
            if (formatDeeplink !== undefined) {
                const customLink = `${formatDeeplink}${btoa(key)}`;
                setLink(customLink);
                window.location.href = customLink;
            }

        }
        document.title = `Video Lopte - ${subTitle}`
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
