import axios from 'axios';
// import { CONFIGS } from '@environment';

class HttpUtil {
  constructor() {
    // const baseURL = `https://configs.widgets.salonmanager.${CONFIGS.domainExtension}/`;
    // this.axios = axios.create({
    //   baseURL,
    // });

    this.axios = axios.create();
  }

  makeRequest(request) {
    return this.axios(request);
  }
}

export default new HttpUtil();
