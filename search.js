import { params } from "./params.js";
import { DrawUser } from "./drawUser.js";
const search = (API_User) => {
  const searchInput = document.querySelector("#searchUser");
  searchInput.addEventListener('input', () => {
    console.log(searchInput.value);
  });
  params.q = searchInput.value;
  API_User = `http://localhost:3000/users?q=${params.q}&_sort=${params.sort}&_order=asc&_page=${params.page}&_limit=${params.limit}`;
  console.log(API_User)
  DrawUser(API_User);
  setTimeout(() => {
    window.alert(`Có ${params.total} kết quả tìm kiếm trùng khớp`)
  }, 500)

}
export const searchUser = () => {
  const searchBtn = document.querySelector("#button-addon2")
  searchBtn.addEventListener('click', () => {
    search();
  }
  )
}