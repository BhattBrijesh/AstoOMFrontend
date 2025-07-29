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
export const getZodiaDaily = async ({ sign, period }) => {
  let endpoint = "";
  if (period === "DAILY") {
    endpoint = `/api/get-horoscope/daily?sign=${sign}&day=TODAY`;
  } else if (period === "WEEKLY") {
    endpoint = `/api/get-horoscope/weekly?sign=${sign}`;
  } else if (period === "MONTHLY") {
    endpoint = `/api/get-horoscope/monthly?sign=${sign}`;
  } else {
    throw new Error("Invalid period specified");
  }
  const response = await axios.get(endpoint);
  return response;
};
