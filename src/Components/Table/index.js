import React from "react";
import Button from "../Button";
import { TableWrapper } from "./style";
const Table = ({response, handleOnclickEditUser, handleOnclickDeleteUser}) => {
    return(
        <>
            <TableWrapper >
                <table border="1" cellPadding="20" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>UserName</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        response.map((item) => {
                            return(
                                <tbody key={item.id}>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <Button
                                                type="edit"
                                                name="Edit"
                                                className="btn"
                                                onClick={()=>handleOnclickEditUser(response)}
                                            />
                                            <Button
                                                type="delete"
                                                name="Delete"
                                                className="btn"
                                                onClick={()=>handleOnclickDeleteUser(item.id)}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </TableWrapper>
        </>
    )
}
export default Table;