import axios from "axios";
import { jwtDecode } from "jwt-decode";

const requestHandler = async (method, route, payload, headers, params) => {
  const res = await axios({
    method: method,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`,
    data: payload,
    headers,
    params,
  });
  console.log("🚀 ~ requestHandler ~ res:", res);
  const decodedData =
    typeof res?.data?.body === "string"
      ? jwtDecode(res?.data?.body)
      : res?.data?.data;
  console.log("🚀 ~ requestHandler ~ decodedData:", decodedData);

  return decodedData?.list ?? decodedData;
};

export default requestHandler;
