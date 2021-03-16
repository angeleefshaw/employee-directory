import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=5&inc=id,name,location,phone,picture,email,nat&noinfo&?results=1"

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
