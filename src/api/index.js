import axios from "axios";

export const handleSubmitContactUsForm = async (reqBody = {}) => {
  const response = await axios.post(
    "https://asto-om-backend.vercel.app/api/insertContractDetails",
    reqBody
  );
  return response;
};
