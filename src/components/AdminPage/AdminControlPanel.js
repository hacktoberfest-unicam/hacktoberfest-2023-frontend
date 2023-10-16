import React from "react";
import AdminScoreTable from "./AdminScoreTable.js";
import AdminManagerUser from "./AdminManageUser.js";

export default function AdminControlPanel(){
    return (
        <>
            <AdminManagerUser />
            <AdminScoreTable />
        </>
    )
}