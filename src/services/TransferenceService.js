import axios from "axios";

const TRANSFERENCE_API_BASE_URL =
  "http://localhost:8080/api/v1/transference/statement";

class TransferenceService {
  getTransferences() {
    return axios.get(TRANSFERENCE_API_BASE_URL);
  }
}

export default new TransferenceService();
