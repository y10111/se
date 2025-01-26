// 创建 style 标签并插入 CSS 代码
const style = document.createElement('style');
style.textContent = `
body {
    /* background-image: url("./_media/image.png"); */
    background-repeat: no-repeat;
    background-position: right bottom;
    background-attachment: fixed;
    transition: background-image 0.1s ease;
}

@media (max-width: 768px) {
    body {
        background-image: none !important;
    }
}
`;
document.head.appendChild(style);

// 定义图片数组
const images = [
    '../_media/image1.png',
    '../_media/image2.png',
    '../_media/image3.png',
];
// 当前图片索引
let currentImageIndex = 0;

// 切换背景图片函数
function changeBackgroundImage() {
    // 切换到下一张图片
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // 设置新的背景图片
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// 初始化时调用一次
changeBackgroundImage();

// 监听地址栏变化
function listenToURLChanges() {
    let lastURL = window.location.href; // 保存当前地址
    setInterval(() => {
        const currentURL = window.location.href;
        if (currentURL !== lastURL) {
            lastURL = currentURL;
            changeBackgroundImage(); // 地址栏发生变化时切换图片
        }
    }, 100); // 每 100ms 检查一次地址变化
}

// 开始监听地址变化
listenToURLChanges();