import News from "../component/news";
import Header from "../component/header"

const HomePage = {
    render(){
        return /*html*/`
        <div class="">
          <div class="header">
              ${Header.render()}
            </div>
        </div>
        <div class="banner mt-4">
            <img src="https://ap.poly.edu.vn/images/Banner-AP.png" alt="" class="w-full">
        </div>
        <div class="content">
            <div class="content1">
              ${News.render()}
            </div>
            
        </div>
        
        
        `;
    }
}
export default HomePage;