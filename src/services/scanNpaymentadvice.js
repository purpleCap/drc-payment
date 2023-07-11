import AxiosRequest from '../configs/AxiosRequest';

const PaymentAdviceService = {};

PaymentAdviceService.getDetailsByDocumentNumber = (docTypeId, docNumber) => AxiosRequest.get(
  `/api-services/payment-service/api/v1/payment-advice-online?document_type_id=${docTypeId}&document_number=${docNumber}`,
);





export default PaymentAdviceService;
