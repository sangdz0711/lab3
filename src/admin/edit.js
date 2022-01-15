import data from "../data";

const edit = {
    render(id) {
        const found = data.find((element) => element.id === id);
        return /* html */`
          <div class="max-w-5xl mx-auto">
            <a href="/admin/news" class="flex items-center text-red opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
              Back
            </a>
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="company-website" class="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input value="${found.title}" type="text" name="company-website" id="company-website" class="p-[10px] focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tiêu đề">
                      </div>
                    </div>
                </div>
                  <div class="shadow sm:rounded-md sm:overflow-hidden">          
                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700">
                          Desc
                        </label>
                        <div class="mt-1">
                          <textarea id="about" name="about" rows="3" class="p-[10px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nhập nội dung">${found.desc}</textarea>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">
                        </p>
                      </div>
          
                      <div>
                        <label class="block text-sm font-medium text-gray-700">
                          Photo
                        </label>
                        <div class="mt-1 flex items-center">
                          <span class="inline-block  rounded-full overflow-hidden bg-gray-100">
                          <img class="w-[286px] h-[286px]" src="${found.img}" alt="" />
                          </span>
                          <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Change
                          </button>
                        </div>
                      </div>
                  </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
            <div class="hidden sm:block" aria-hidden="true">
              <div class="py-5">
                <div class="border-t border-gray-200"></div>
              </div>
          </div>
        </div>`;
    },

};
export default edit;