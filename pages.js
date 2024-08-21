import { params } from "./params.js"
import { DrawUser } from "./drawUser.js"
export const paging = (API_User)=>{
  const pages = document.querySelectorAll('.page-item')
  pages.forEach((element)=>{
    const value = element.innerHTML
    element.addEventListener('click',()=>{
      pages.forEach((element)=>{
        element.classList.remove('active')
      })
      element.classList.add('active');
      params.page = value;
      API_User = `http://localhost:3000/users?q=${params.q}&_sort=${params.sort}&_order=asc&_page=${params.page}&_limit=${params.limit}`;
      DrawUser(API_User);
    })
  })
}
