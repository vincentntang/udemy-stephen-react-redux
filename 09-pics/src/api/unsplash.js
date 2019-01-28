import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a9af06ad378df59bbb88d1c8acc4f624ee37fb1171fd1c0ec948c36f894f89b2"
  }
});
