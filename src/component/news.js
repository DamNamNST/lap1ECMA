import data from "../data";

const News = {
    render() {
        return /* html */`
        <h1 class="text-sky-900 text-2xl  font-bold mt-6" >TIN TỨC HỌC TẬP</h1>
            <div id="row" class="md:grid grid-cols-3 gap-x-8">
            
                ${data.map((post) =>/*html*/`
                    <div class="border border-gray-300 pt-4 pb-8  mt-6">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" class="w-full h-56 px-8">
                        </a>
                        
                        <h4 class="text-orange-700 text-xl font-bold px-8 mt-2 " ><a href="/news/${post.id}">${post.title}</a></h4>
                        <p class="px-8 mt-4" >${post.desc}</p>
                    </div>
                ` ).join("")}
                    
          </div>
            
            <h1 class="font-bold text-3xl text-sky-900 my-3" >Hoạt động sinh viên</h1>
            <div class="md:grid grid-cols-3 gap-x-8">
                
                ${data.map((post) =>/*html*/`
                    <div class="border border-gray-300 pt-4 pb-8  mt-6">
                        <a href="/news/${post.id}">
                        <img src="${post.img}" alt="" class="w-full h-56 px-8">
                        </a>
                
                        <h4 class="text-orange-700 text-xl font-bold px-8 mt-2 " ><a href="/news/${post.id}">${post.title}</a></h4>
                        <p class="px-8 mt-4" >${post.desc}</p>
                    </div>
                ` ).join("")}
            </div>

            `;

    },
};
export default News;