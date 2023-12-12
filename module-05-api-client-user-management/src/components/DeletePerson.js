import axios from 'axios';


export const handleDelete = async (id) => {

  await axios
    .delete(`https://653785a5bb226bb85dd35c08.mockapi.io/api/v1/staffs/${id}`)
    .then(() => {
      console.log("Người dùng đã bị xóa thành công.");
   

    })
    .catch((error) => {
      console.error("Có lỗi xảy ra khi xóa người dùng:", error);
    });

  
};


  