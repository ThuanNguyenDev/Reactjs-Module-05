import React from 'react'
import { useEffect , useState } from 'react';
import { STAFFS_MANAGEMENT_API } from '../constant/AddContant';
import axios from 'axios'
import {Link} from 'react-router-dom'

function StaffList() {

    const [staffs , setStaffs] = useState ([]);

    useEffect (() => {

        fetchStaffList();

    }, [staffs]) ;

    const fetchStaffList = async () => {

        await axios

        .get(`${STAFFS_MANAGEMENT_API}/staffs`)
        .then ( res => {

      
            console.log(res);
            setStaffs(res.data);
            console.log(JSON.stringify(staffs));

        }
            )
        
        .catch(err => {

                console.log(err);
        })

    };
  
    


  return (
    <div>
        <h2> List of Staff C03-G2</h2>
        <table border={1} >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>POSITION</th>
                    <th>AVATAR</th>
                    <th>ADDRESS</th>
                    <th>#</th>
                   
                </tr>

            </thead>

            <tbody>
              

                    {
                        staffs.map (
                            (staff)=> {

                                return  (
                                    <tr>
                                    <td>{staff.id}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.position}</td>
                                    <td><img style={{width:80 , height : 75}} src={staff.avatar} alt=" staff avatar"/></td>
                                    <td>{staff.address}</td>
                                    <td>
                                        <Link to={`/staffs/${staff.id}`}>Detai - </Link>
                                        <Link to={`/staffs/edit/${staff.id}`}>Edit - </Link>
                                        {/* <Link to={`/staffs/delete/${staff.id}`}>Remove</Link> */}
                                    </td>
                                    </tr>
                                )

                            }
                        )
                    }
             

            </tbody>
        </table>


    </div>
  )
}

export default StaffList