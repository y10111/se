document.addEventListener('DOMContentLoaded', function () {
    // 创建自定义滚动条容器
    const customScrollbar = document.createElement('div');
    customScrollbar.classList.add('custom-scrollbar');

    // 创建自定义滚动条轨道
    const scrollbarTrack = document.createElement('div');
    scrollbarTrack.classList.add('custom-scrollbar-track');

    // 创建自定义滚动条滑块，使用 SVG 作为滑块内容
    const scrollbarThumb = document.createElement('div');
    scrollbarThumb.classList.add('custom-scrollbar-thumb');
    const svg = `
       <svg t="1737696045119" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9148" width="200" height="200"><path d="M512 10.24A174.08 174.08 0 0 1 686.08 184.32v655.36a174.08 174.08 0 1 1-348.16 0V184.32A174.08 174.08 0 0 1 512 10.24z" fill="#A1BACF" p-id="9149"></path><path d="M512 30.72A153.6 153.6 0 0 0 358.4 184.32v655.36a153.6 153.6 0 0 0 307.2 0V184.32A153.6 153.6 0 0 0 512 30.72z" fill="#FFFFFF" p-id="9150"></path><path d="M430.08 307.2h163.84a20.48 20.48 0 0 1 0 40.96H430.08a20.48 20.48 0 0 1 0-40.96z m0 163.84h163.84a20.48 20.48 0 0 1 0 40.96H430.08a20.48 20.48 0 0 1 0-40.96z m0 184.32h163.84a20.48 20.48 0 0 1 0 40.96H430.08a20.48 20.48 0 0 1 0-40.96z" fill="#A1BACF" p-id="9151"></path></svg>
    `;
    scrollbarThumb.innerHTML = svg;

    // 将轨道和滑块添加到滚动条容器中
    scrollbarTrack.appendChild(scrollbarThumb);
    customScrollbar.appendChild(scrollbarTrack);

    // 将自定义滚动条添加到页面中
    document.body.appendChild(customScrollbar);

    // 隐藏默认滚动条
    const style = document.createElement('style');
    style.textContent = `
        /* 隐藏默认滚动条 */
        ::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
        /* 自定义滚动条容器样式 */
        .custom-scrollbar {
            position: fixed;
            top: 0;
            right: 0;
            width: 12px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
        }
        /* 自定义滚动条轨道样式 */
        .custom-scrollbar-track {
            position: relative;
            width: 100%;
            height: 100%;
        }
        /* 自定义滚动条滑块样式 */
        .custom-scrollbar-thumb {
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // 监听页面滚动事件
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const thumbPosition = (scrollTop / scrollHeight) * (customScrollbar.offsetHeight - scrollbarThumb.offsetHeight);
        scrollbarThumb.style.top = thumbPosition + 'px';
    });

    // 监听滑块拖动事件
    let isDragging = false;
    let startY;
    let startTop;

    scrollbarThumb.addEventListener('mousedown', function (e) {
        isDragging = true;
        startY = e.clientY;
        startTop = parseInt(scrollbarThumb.style.top) || 0;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            const deltaY = e.clientY - startY;
            const newTop = startTop + deltaY;
            const maxTop = customScrollbar.offsetHeight - scrollbarThumb.offsetHeight;
            const validTop = Math.max(0, Math.min(newTop, maxTop));
            scrollbarThumb.style.top = validTop + 'px';

            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollTop = (validTop / (customScrollbar.offsetHeight - scrollbarThumb.offsetHeight)) * scrollHeight;
            window.scrollTo(0, scrollTop);
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
});