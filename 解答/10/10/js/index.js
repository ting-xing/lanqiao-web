let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

let data = [];


const listGroup = document.querySelector(".list-group");

function getStr(item) {
    return `
  <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${item.name}</h5>
            <small>${(parseInt(item.price) / 100).toFixed(2)}元</small>
          </div>
          <p class="mb-1">
          ${item.description}
          </p>
        </a>
  `.trim()
}




// TODO：待补充代码
axios.get("./js/carlist.json").then(res => {
    data = res.data;

    maxPage = Math.ceil(data.length / 5);

    console.log(maxPage);

    refrshButton();
    refreshCat();
    refreshPagination();
})

function refrshButton() {
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    if (pageNum <= 1) {
        prev.classList.add("disabled")
    }

    if (pageNum > 1) {
        prev.classList.remove("disabled")
    }

    if (pageNum < maxPage) {
        next.classList.remove("disabled")
    }

    if (pageNum >= maxPage) {
        next.classList.add("disabled")
    }
}

function refreshCat() {
    const item = data.slice((pageNum - 1) * 5, Math.min(pageNum * 5, data.length));
    let html = '';
    for (let i = 0; i < item.length; i++) {
        html += getStr(item[i]);
    }
    listGroup.innerHTML = html;
}

function refreshPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerText = `共 ${maxPage} 页，当前 ${pageNum} 页`.trim();
}

// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function() {
    if (this.classList.contains("disabled")) {
        return;
    }
    // TODO：待补充代码
    pageNum -= 1;
    refreshCat();
    refrshButton();
    refreshPagination();

};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function() {
    if (this.classList.contains("disabled")) {
        return;
    }
    // TODO：待补充代码
    pageNum += 1;
    refreshCat();
    refrshButton();
    refreshPagination();
};