import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 4dDIFcTNmqdN6Mv7N448Qii6r-1ss6UB7LxXEEN1io7iRfQBeY-btT_Y20Pac_yK8HrAqRJEINwbuTexfqooZ7_FnKGM2gwKhY_Kefka3E1ePGKYBuAeI1vwQ1GeXnYx'
    }
});

