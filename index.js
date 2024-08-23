import {DrawUser} from "./drawUser.js";
import { params } from "./params.js";
import { paging } from "./pages.js";
import { sort } from "./sort.js";
import { searchUser } from "./search.js";
import { deleteUser } from "./delete.js";
import { editUser } from "./edit.js";
import { drawChart } from "./chart.js";
let  API_User = `http://localhost:3000/users?q=${params.q}&_sort=${params.sort}&_order=asc&_page=${params.page}&_limit=${params.limit}`;

//tinh nang tim kiem
searchUser(API_User);
//tinh nang sap xep
sort(API_User);
//tinh nang phan trang
paging(API_User)
//ve bieu do
drawChart()
//xoá

//start


const User = async  ()=>{
  await DrawUser(API_User)
  deleteUser();
  editUser();
}
User();
