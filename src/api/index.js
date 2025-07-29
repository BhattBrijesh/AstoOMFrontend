import axios from "axios";

export const handleSubmitContactUsForm = async (reqBody = {}) => {
  const response = await axios.post(
    "https://asto-om-backend.vercel.app/api/insertContractDetails",
    reqBody
  );
  return response;
};
export const handleSubmitInquiryForm = async (reqBody = {}) => {
  const response = await axios.post(
    "https://asto-om-backend.vercel.app/api/insertInquiryDetails",
    reqBody
  );
  return response;
};

export const getZodiaDaily = async ({ sign, type }) => {
  if (!["daily", "weekly", "monthly"].includes(type)) {
    throw new Error("Invalid type specified");
  }
  const endpoint = `https://asto-om-backend.vercel.app/api/getZodiacDaily?sign=${sign}&type=${type}`;
  const response = await axios.get(endpoint);
  return response;
};
