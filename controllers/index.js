import { callData } from "../utils/callData.js";

var data = callData()
console.log(data);


const renderData = (data) => {
    var navTabList = data.navPills.reduce((str, e, i, arr) => {
        var isActive = ''
        if (i == 0) {
            isActive = `active`
        }
        str += `<li class="nav-item">
            <a class="nav-link ${isActive}" data-toggle="pill" href="#${e.tabName}">${e.showName}</a>
          </li>`
        return str
    }, '')
    var contentTabList = ``

    data.navPills.forEach((e, i) => {
        var html = ''
        var isActive = ''
        if (i == 0) {
            isActive = `active`
        }
        var dataPerTab= data.tabPanes.filter(x=>x.type==e.type)
        var htmlCard=dataPerTab.reduce((str, ee, i, arr) => {
            str+=`
            <div class='col-3'>
                <div class="card text-center " style="">
                    <img class="card-img-top" src="${ee.imgSrc_jpg}" alt="Card image" style="height:170px">
                    <div class="card-body">
                        <h4 class="card-title">${ee.name}</h4>
                        <a href="#" class="btn btn-primary stretched-link" onclick="thuDo('${ee.id}')">Thử đồ</a>
                    </div>
                </div>
            </div>
            `
            return str
        },'')


        html = `<div id="${e.tabName}" class="container tab-pane ${isActive}"><br>
            <div class='row'>
            ${htmlCard}
            </div>
            </div>`

        contentTabList += html
    });



    document.getElementById('navTabList').innerHTML = navTabList
    document.getElementById('contentTabList').innerHTML = contentTabList
}

renderData(data)


function thuDo(id ){
    var item= data.tabPanes.find(x=>x.id==id)
    var className = {"topclothes":'bikinitop',"botclothes":'bikinibottom',"shoes":"feet","handbags":"handbag","necklaces":"necklace","hairstyle":"hairstyle","background":"background"}
    document.getElementsByClassName(`${className[item.type]}`)[0].style.backgroundImage=`url("${item.imgSrc_png}")`
}

window.thuDo=thuDo