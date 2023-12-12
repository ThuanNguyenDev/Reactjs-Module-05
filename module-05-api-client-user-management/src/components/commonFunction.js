import axios from "axios";

export const getStaffByID = async (id) => {
    let staff = null;
    await axios
    .get(`https://653785a5bb226bb85dd35c08.mockapi.io/api/v1/staffs/${id}`)
    .then((res) => {
      staff = res.data
    })
    .catch((error) => console.log(error));
    return staff;
} 