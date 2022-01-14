const HeaderPage = {
    render() {
        return /*html*/`
      <div class="header-top flex flex-wrap justify-center bg-blue-900 ">
          <div class="">
              <img src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" alt="" class="py-3 w-32">
          </div>
      </div>
      <div class="header-main md:flex flex-wrap bg-orange-600 ">
        <div class="menu md:w-8/12">
            <ul class="md:ml-4">
                <li class="md:inline-block text-center py-4 px-4 text-white hover:text-blue-900"><a href="/">Trang Chủ</a></li>
                <li class="md:inline-block text-center py-4 px-4 text-white hover:text-blue-900"><a href="/about">Tuyển Sinh</a></li>
                <li class="md:inline-block text-center py-4 px-4 text-white hover:text-blue-900"><a href="/product">Chương Trình Đào Tạo</a></li>
                <li class="md:inline-block text-center py-4 px-4 text-white hover:text-blue-900"><a href="/signin">Đăng Nhập</a></li>
                <li class="md:inline-block text-center py-4 px-4 text-white hover:text-blue-900"><a href="/admin/dashbroad">Dashbroad</a></li>
      
            </ul>
        </div>
        <div class="search  md:w-4/12 sm:w-full  ">
              <form action="" class="pt-3 sm:mx-4 md:mx-0">
              <input type="text" class="h-8 md:w-60 sm:w-full ">
              <button type="submit" class="text-white hover:text-yellow-500 border bg-blue-900 border-white h-8 md:px-6 md:ml-4  sm:block md:inline-block sm:text-center " >TÌM KIẾM</button>
              </form>
        </div>
      </div>
      
      `;
    }


}
export default HeaderPage;