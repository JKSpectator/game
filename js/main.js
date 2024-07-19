// 创建全景图像对象，指定全景图像的路径
const panorama1 = new PANOLENS.ImagePanorama('images/GoPro/p47 全景.jpg');  
const panorama2 = new PANOLENS.ImagePanorama('images/GoPro/p2 全景.jpg');
const panorama3 = new PANOLENS.ImagePanorama('images/GoPro/p3 全景.jpg');
const panorama4 = new PANOLENS.ImagePanorama('images/GoPro/p4 全景.jpg');
const panorama5 = new PANOLENS.ImagePanorama('images/GoPro/p5 全景.jpg');
const panorama6 = new PANOLENS.ImagePanorama('images/GoPro/p6 全景.jpg');  
const panorama7 = new PANOLENS.ImagePanorama('images/GoPro/p7 全景.jpg');
const panorama8 = new PANOLENS.ImagePanorama('images/GoPro/p8 全景.jpg');
const panorama9 = new PANOLENS.ImagePanorama('images/GoPro/p9 全景.jpg');
const panorama10 = new PANOLENS.ImagePanorama('images/GoPro/p10 全景.jpg');
const panorama11 = new PANOLENS.ImagePanorama('images/GoPro/p11 全景.jpg');  
const panorama12 = new PANOLENS.ImagePanorama('images/GoPro/p12 全景.jpg');
const panorama13 = new PANOLENS.ImagePanorama('images/GoPro/p13 全景.jpg');
const panorama14 = new PANOLENS.ImagePanorama('images/GoPro/p14 全景.jpg');
const panorama15 = new PANOLENS.ImagePanorama('images/GoPro/p15 全景.jpg');
const panorama16 = new PANOLENS.ImagePanorama('images/GoPro/p16 全景.jpg');  
const panorama17 = new PANOLENS.ImagePanorama('images/GoPro/p17 全景.jpg');
const panorama18 = new PANOLENS.ImagePanorama('images/GoPro/p18 全景.jpg');
const panorama19 = new PANOLENS.ImagePanorama('images/GoPro/p19 全景.jpg');
const panorama20 = new PANOLENS.ImagePanorama('images/GoPro/p20 全景.jpg');
const panorama21 = new PANOLENS.ImagePanorama('images/GoPro/p21 全景.jpg');
const panorama22 = new PANOLENS.ImagePanorama('images/GoPro/p22 全景.jpg');  
const panorama23 = new PANOLENS.ImagePanorama('images/GoPro/p23 全景.jpg');
const panorama24 = new PANOLENS.ImagePanorama('images/GoPro/p24 全景.jpg');
const panorama25 = new PANOLENS.ImagePanorama('images/GoPro/p25 全景.jpg');
const panorama26 = new PANOLENS.ImagePanorama('images/GoPro/p26 全景.jpg');  
const panorama27 = new PANOLENS.ImagePanorama('images/GoPro/p27 全景.jpg');
const panorama28 = new PANOLENS.ImagePanorama('images/GoPro/p28 全景.jpg');
const panorama29 = new PANOLENS.ImagePanorama('images/GoPro/p29 全景.jpg');
const panorama30 = new PANOLENS.ImagePanorama('images/GoPro/p30 全景.jpg');
const panorama31 = new PANOLENS.ImagePanorama('images/GoPro/p31 全景.jpg');  
const panorama32 = new PANOLENS.ImagePanorama('images/GoPro/p32 全景.jpg');
const panorama33 = new PANOLENS.ImagePanorama('images/GoPro/p33 全景.jpg');
const panorama34 = new PANOLENS.ImagePanorama('images/GoPro/p34 全景.jpg');
const panorama35 = new PANOLENS.ImagePanorama('images/GoPro/p35 全景.jpg');
const panorama36 = new PANOLENS.ImagePanorama('images/GoPro/p36 全景.jpg');  
const panorama37 = new PANOLENS.ImagePanorama('images/GoPro/p37 全景.jpg');
const panorama38 = new PANOLENS.ImagePanorama('images/GoPro/p38 全景.jpg');
const panorama39 = new PANOLENS.ImagePanorama('images/GoPro/p39 全景.jpg');
const panorama40 = new PANOLENS.ImagePanorama('images/GoPro/p40 全景.jpg');
const panorama41 = new PANOLENS.ImagePanorama('images/GoPro/p41 全景.jpg');  
const panorama42 = new PANOLENS.ImagePanorama('images/GoPro/p42 全景.jpg');
const panorama43 = new PANOLENS.ImagePanorama('images/GoPro/p43 全景.jpg');
const panorama44 = new PANOLENS.ImagePanorama('images/GoPro/p44 全景.jpg');
const panorama45 = new PANOLENS.ImagePanorama('images/GoPro/p45 全景.jpg');
const panorama46 = new PANOLENS.ImagePanorama('images/GoPro/p46 全景.jpg');  
const panorama47 = new PANOLENS.ImagePanorama('images/GoPro/p47 全景.jpg');
const panorama48 = new PANOLENS.ImagePanorama('images/GoPro/p48 全景.jpg');
const panorama49 = new PANOLENS.ImagePanorama('images/GoPro/p49 全景.jpg');
const panorama50 = new PANOLENS.ImagePanorama('images/GoPro/p50 全景.jpg');
const panorama51 = new PANOLENS.ImagePanorama('images/GoPro/p51 全景.jpg');  
const panorama52 = new PANOLENS.ImagePanorama('images/GoPro/p52 全景.jpg');
const panorama53 = new PANOLENS.ImagePanorama('images/GoPro/p53 全景.jpg');


 

const panorama = [panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10,
    panorama11, panorama12, panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20,panorama21,panorama22,panorama23
    ,panorama24,panorama25,panorama26,panorama27,panorama28,panorama29,panorama30,panorama31,panorama32,panorama33,panorama34,panorama35,panorama36,
    panorama37,panorama38,panorama39,panorama40,panorama41,panorama42,panorama43,panorama44,panorama45,panorama46,panorama47,panorama48,panorama49,panorama50,panorama51,panorama52,panorama53
];

// 通过 CSS 选择器获取页面中的元素，这里用于承载全景图像的容器
let imageContainer = document.querySelector('.image-container');


// 定义每个全景视图中的信息点坐标
// 注意：这些坐标可能需要调整以映射到视图中的像素位置
var infospotPositions = [
    new THREE.Vector3(4000, 10, 900),   //[0]1-2              // 需要调整以映射视图中的像素(深度，高度，x)
    new THREE.Vector3(-4000, 10, -900),  //[1]2-1
    new THREE.Vector3(4000, 10, 900),  //[2]2-3
    new THREE.Vector3(-4000, 10, -1500),  //[3]3-2
    new THREE.Vector3(2000, -100, 2400), //[4]3-4
    new THREE.Vector3(-4000, 10, 800),  //[5]4-3
    new THREE.Vector3(-8136.06, 196.30, 890.14),  //4
    new THREE.Vector3(-4136.06, 196.30, 890.14),  //5
    new THREE.Vector3(-1036.06, 196.30, 890.14),  //6
    new THREE.Vector3(-4136.06, 196.30, 890.14),  //7
];

// 创建全景视图对象，配置全景视图的属性
const viewer = new PANOLENS.Viewer({
    container: imageContainer,  // 指定承载全景图像的容器
    autoRotate: true,  // 设置自动旋转
    autoRotateSpeed: 0.5,  // 设置自动旋转的速度，不要太快，否则会引起眩晕
    controlBar: true,  // 显示控制栏
});




// 定义全景图像之间的链接关系
// 这里的链接使用了 infospotPositions 数组中的坐标
panorama1.link(panorama2, infospotPositions[0]);  // 支持多个链接
panorama2.link(panorama1, infospotPositions[1]);
panorama2.link(panorama3, infospotPositions[2]);
panorama3.link(panorama2, infospotPositions[3]);
panorama3.link(panorama4, infospotPositions[4]);
panorama4.link(panorama3, infospotPositions[5]);
// panorama1.link(panorama3, infospotPositions[4]);
// panorama4.link(panorama1, infospotPositions[5]);
// panorama1.link(panorama4, infospotPositions[6]);
// panorama5.link(panorama1, infospotPositions[7]);

// 将全景图像对象添加到全景视图中
viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10,
    panorama11, panorama12, panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20,panorama21,panorama22,panorama23
    ,panorama24,panorama25,panorama26,panorama27,panorama28,panorama29,panorama30,panorama31,panorama32,panorama33,panorama34,panorama35,panorama36,
    panorama37,panorama38,panorama39,panorama40,panorama41,panorama42,panorama43,panorama44,panorama45,panorama46,panorama47,panorama48,panorama49,panorama50,panorama51,panorama52,panorama53
);


// 放大器
// 获取模态对话框的元素
var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");

// 获取关闭按钮
var closeBtn = document.getElementsByClassName("close")[0];

// 获取图片并设置点击事件
var mapImage = document.getElementById("mapImage");

mapImage.onclick = function() {
    // 获取图片的当前尺寸
    var w = mapImage.naturalWidth;
    var h = mapImage.naturalHeight;
    
    // 设置模态对话框中的图片尺寸
    modalImage.style.width = w + 'px';
    modalImage.style.height = h + 'px';
    modalImage.src = mapImage.src;
    
    // 显示模态对话框
    modal.style.display = "block";
}

// 点击关闭按钮关闭模态对话框
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 点击模态对话框外部关闭模态框
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


//按钮跳转
document.addEventListener('DOMContentLoaded', function() {
    // 如果全景对象数组 `panorama` 已经定义为全局变量，确保它在此处可访问。
    // 如果 `panorama` 不是全局变量，你需要以其他方式传递它到这个函数中，例如通过参数传递。

    // 映射关系，确保键与 HTML 中的 data-pano-id 属性匹配
    const panoramaIdToPanorama = {
        1: panorama[1],
        2: panorama[2],
        3: panorama[3],
        4: panorama[4],
        5: panorama[5],
        6: panorama[6],
        7: panorama[7],
        8: panorama[8],
        9: panorama[9],
        10: panorama[10],
        11: panorama[11],
        12: panorama[12],
        13: panorama[13],
        14: panorama[14],
        15: panorama[15],        
        16: panorama[16],
        17: panorama[17],
        18: panorama[18],
        19: panorama[19],
        20: panorama[20],
        21: panorama[21],
        22: panorama[22],
        23: panorama[23],
        24: panorama[24],
        25: panorama[25],
        26: panorama[26],
        27: panorama[27],
        28: panorama[28],
        29: panorama[29],
        30: panorama[30],
        31: panorama[31],
        32: panorama[32],
        33: panorama[33],
        34: panorama[34],        
        35: panorama[35],
        36: panorama[36],
        37: panorama[37],
        38: panorama[38],        
        39: panorama[39],
        40: panorama[40],        
        41: panorama[41],
        42: panorama[42],
        43: panorama[43],
        44: panorama[44],
        45: panorama[45],
        46: panorama[46],
        47: panorama[47],
        48: panorama[48],
        49: panorama[49],
        50: panorama[50],
        51: panorama[51],
        52: panorama[52],
        53: panorama[53],

        // ... 其他全景对象的映射关系
    };

    // 为每个按钮添加点击事件监听器
    document.querySelectorAll('.map-button').forEach(button => {
        button.addEventListener('click', function() {
            const panoId = this.getAttribute('data-pano-id');
            console.log('Pano ID:', panoId); // 输出 panoId
            const panoramaObj = panoramaIdToPanorama[panoId];
            console.log('Panorama Object:', panoramaObj); // 输出全景对象
            if (panoramaObj) {
                console.log('Adding panorama to viewer:', panoramaObj); // 输出添加信息
                viewer.setPanorama(panoramaObj);
            }
        });
    });

    // 可以选择在这里显示按钮
    document.querySelectorAll('.map-button').forEach(button => {
        button.style.display = 'block';
    });
});