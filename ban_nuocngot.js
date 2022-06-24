var dsnuocngot = [{
        'anh': 'https://japana.vn/uploads/product/2021/01/04/1609746302-ca-cola-nhat-500ml-sieu-thi-nhat-ban-japana-1.jpeg',
        'ten': 'Coca Cola',
        'giatien': '9000'
    },
    {
        'anh': 'http://vn-test-11.slatic.net/p/1614465d3e4d263f5bc7fd4eb16da37f.jpg',
        'ten': 'Việt Quất',
        'giatien': '9000'
    },
    {
        'anh': 'https://bizweb.dktcdn.net/100/361/770/products/nuoc-ngot-7up-thai-lon-330ml.jpg?v=1570676100987',
        'ten': '7Up',
        'giatien': '9000'
    },
    {
        'anh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVY3l_OmQDDdygPHMkl6_bjNHmWG59pYAOe9OEoeXZBn3pgjcoRtZaGXJk50nkqv3wTAE&usqp=CAU',
        'ten': 'Sprice',
        'giatien': '9000'
    },
    {
        'anh': 'https://bizweb.dktcdn.net/thumb/1024x1024/100/361/770/products/nuoc-ngot-mirinda-cam-330ml.jpg?v=1572424906527',
        'ten': 'Nước cam',
        'giatien': '9000'
    },
    {
        'anh': 'https://asmart.com.vn/wp-content/uploads/2021/08/Nuoc-ngot-Sting-dau-lon-cao-330ml.jpg',
        'ten': 'Sting',
        'giatien': '9000'
    },
    {
        'anh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWSUopE4gE_VaVJpW9NbLA2UtedUyvvdukw&usqp=CAU',
        'ten': 'Chanh tươi',
        'giatien': '9000'
    },
    {
        'anh': ' https://bidrico.com.vn/wp-content/uploads/2020/05/sodakemlonR.png',
        'ten': 'Soda Kem',
        'giatien': '9000'
    },
]
document.addEventListener("DOMContentLoaded", function() {
    json = localStorage.getItem('dlbang')
    if (json != null && json != '') {
        dlbang = JSON.parse(json)
    }
    hienthinuocngot();
    var Tien = localStorage.getItem('tienkh');
    document.getElementById('tienKH').value = Tien;
    hienthi_nuocngot();
}, false);

function hienthinuocngot() {
    for (var i = 0; i < dsnuocngot.length; i++) {
        document.getElementById('hienthi').innerHTML += `<div class="col-md-3" onclick="them_nuocngot(${i})">
        <div class="card mb-3">
            <img class="card-img-top" src="${dsnuocngot[i].anh}">
            <div class="card-body">
                <b class="card-title">${dsnuocngot[i].ten}</b>
                <p class="card-text">${dsnuocngot[i].giatien} VNĐ</p>
            </div>
        </div>
    </div>`
    }
}
var dlbang = [];

function them_nuocngot(index) {
    var doituong = {
        'index': index,
        'soluong': 1
    }
    isFind = false;
    for (var i = 0; i < dlbang.length; i++) {
        if (dlbang[i].index == index) {
            dlbang[i].soluong++;
            isFind = true;
            break;
        }
    }
    if (!isFind) {
        dlbang.push(doituong);
    }
    localStorage.setItem('dlbang', JSON.stringify(dlbang))
    hienthi_nuocngot();
}
var tongTien = 0;

function hienthi_nuocngot() {
    var count = 0;
    document.getElementById('bang').innerHTML = "";
    for (var i = 0; i < dlbang.length; i++) {
        var item = dsnuocngot[dlbang[i].index];
        var tien = item.giatien * dlbang[i].soluong;
        tongTien += tien;
        document.getElementById('bang').innerHTML += `
            <tr>
                <td>${++count}</td>
                <td><img src="${item.anh}" width="100px"></td>
                <td>${item.ten}</td>
                <td>${dlbang[i].soluong}</td>
                <td>${item.giatien}</td>
                <th><b>${tien}</b>VNĐ</td>
            </tr>
        `
    }
    var tienKH = document.getElementById('tienKH').value;
    var tienKhachHang = parseInt(tienKH);
    console.log(tienKhachHang)
    document.getElementById('tongtien').innerHTML = tongTien + "VNĐ";
    tiendu_thieu = tienKhachHang - tongTien;
    document.getElementById('tiendu_thieu').innerHTML = tiendu_thieu + "VNĐ";
}
document.getElementById('tienKH').addEventListener("keyup", function() {
    var tienKH = document.getElementById('tienKH').value;
    var tienKhachHang = parseInt(tienKH);
    console.log(tienKhachHang)
    document.getElementById('tongtien').innerHTML = tongTien + "VNĐ";
    tiendu_thieu = tienKhachHang - tongTien;
    document.getElementById('tiendu_thieu').innerHTML = tiendu_thieu + "VNĐ";
    localStorage.setItem('tienkh', JSON.stringify(tienKhachHang));
});