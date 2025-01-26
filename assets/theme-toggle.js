class ThemeToggleElement extends HTMLElement {
    constructor() {
        super();
        // 创建一个 Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // 创建主题切换按钮的 HTML 结构
        const toggleDiv = document.createElement('div');
        toggleDiv.classList.add('theme-toggle');

        const sunSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        sunSvg.classList.add('sun');
        sunSvg.setAttribute('viewBox', '0 0 1024 1024');
        sunSvg.innerHTML = `
            <path
                d="M473.386667 241.984a27.861333 27.861333 0 0 1-30.08-25.429333l-4.693334-56.128a27.861333 27.861333 0 0 1 55.488-4.693334l4.714667 56.149334c1.28 15.338667-10.090667 28.8-25.408 30.08zM666.752 273.557333a27.84 27.84 0 0 1-1.493333-39.36l38.314666-41.322666a27.84 27.84 0 0 1 40.832 37.866666L706.133333 272.064c-10.453333 11.285333-28.074667 11.946667-39.36 1.493333zM773.034667 415.786667a27.861333 27.861333 0 0 1 27.690666-28.010667l56.32-0.362667a27.84 27.84 0 1 1 0.362667 55.701334l-56.32 0.362666a27.861333 27.861333 0 0 1-28.053333-27.669333zM764.245333 616.810667a27.861333 27.861333 0 0 1 37.504-12.053334l50.133334 25.728a27.861333 27.861333 0 0 1-25.450667 49.557334l-50.133333-25.728a27.861333 27.861333 0 0 1-12.053334-37.504zM662.250667 729.6a27.861333 27.861333 0 0 1 36.970666 13.589333l23.68 51.136a27.861333 27.861333 0 1 1-50.56 23.381334l-23.68-51.136a27.861333 27.861333 0 0 1 13.589334-36.970667zM308.544 337.28c9.024-12.458667 6.229333-29.866667-6.250667-38.890667l-45.653333-33.024a27.861333 27.861333 0 0 0-32.64 45.141334l45.653333 33.024c12.458667 9.002667 29.866667 6.208 38.890667-6.250667zM263.509333 513.024a27.861333 27.861333 0 0 0-30.357333-25.109333l-56.106667 5.333333a27.84 27.84 0 1 0 5.290667 55.466667l56.064-5.333334a27.84 27.84 0 0 0 25.109333-30.357333zM318.677333 677.269333a27.861333 27.861333 0 0 0-38.506666-8.213333L232.896 699.733333a27.861333 27.861333 0 0 0 30.293333 46.72l47.274667-30.634666c12.906667-8.362667 16.597333-25.6 8.213333-38.506667zM480.064 760.234667a27.84 27.84 0 0 0-33.237333 21.12l-12.245334 54.997333a27.84 27.84 0 1 0 54.357334 12.096l12.245333-54.976a27.84 27.84 0 0 0-21.12-33.237333zM756.842667 499.2c0 130.773333-105.984 236.736-236.714667 236.736-130.752 0-236.736-105.984-236.736-236.714667 0-130.752 105.984-236.736 236.736-236.736 130.730667 0 236.714667 105.984 236.714667 236.736z m-236.714667 194.069333a194.069333 194.069333 0 1 0 0-388.117333 194.069333 194.069333 0 0 0 0 388.117333z">
            </path>
        `;

        const moonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        moonSvg.classList.add('moon');
        moonSvg.setAttribute('viewBox', '0 0 24 24');
        moonSvg.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />';

        toggleDiv.appendChild(sunSvg);
        toggleDiv.appendChild(moonSvg);

        // 创建样式标签并添加样式
        const style = document.createElement('style');
        style.textContent = `
           .theme-toggle {
                position: relative;
                width: 46px;
                height: 22px;
                 background: linear-gradient(145deg,#fff,#87CEFA); 
                border-radius: 20px;
                cursor: pointer;
                box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
                    -5px -5px 15px rgba(255, 255, 255, 0.1);
                transition: background-color 0.3s, box-shadow 0.3s;
                margin: 0;
                padding: 0;
            }

           .theme-toggle svg {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
                transition: transform 0.3s, opacity 0.3s;
            }

           .theme-toggle .sun {
                left: 2px;
                fill: #000;
            }

           .theme-toggle .moon {
                right: 2px;
                fill: #fff;
                opacity: 0;
            }

           .theme-toggle.active {
                background: linear-gradient(145deg, #0d47a1, #fff); 
                box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
                    -5px -5px 15px rgba(255, 255, 255, 0.2);
            }

           .theme-toggle.active .sun {
                transform: translateX(30px) translateY(-50%);
                opacity: 0;
            }

           .theme-toggle.active .moon {
                opacity: 1;
            }
        `;

        // 将样式和按钮添加到 Shadow DOM 中
        shadow.appendChild(style);
        shadow.appendChild(toggleDiv);
    }
}

// 定义自定义元素
customElements.define('theme-toggle-element', ThemeToggleElement);

// 主题切换逻辑
document.addEventListener("DOMContentLoaded", function () {
    // 获取主题样式的 link 元素
    const themeLink = document.getElementById('theme-style');
    // 获取自定义主题切换元素
    const toggleSwitch = document.querySelector('theme-toggle-element');
    if (!toggleSwitch) return;

    const toggleDiv = toggleSwitch.shadowRoot.querySelector('.theme-toggle');

    // 定义主题文件路径
    const themes = {
        light: "//cdn.jsdelivr.net/npm/docsify/themes/vue.css",
        dark: "//cdn.jsdelivr.net/npm/docsify/themes/dark.css"
    };

    // 从 localStorage 获取保存的主题
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // 如果 localStorage 中有保存的主题，更新 link 元素的 href
        themeLink.href = themes[savedTheme];
        if (savedTheme === 'dark') {
            toggleDiv.classList.add('active');
        } else {
            toggleDiv.classList.remove('active');
        }
    } else {
        // 如果 localStorage 中没有保存的主题，使用当前 link 元素的 href 判断主题并保存
        const currentTheme = themeLink.href.includes('dark.css') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleDiv.classList.add('active');
        }
    }

    // 切换主题事件
    toggleDiv.addEventListener('click', () => {
        const isDark = !themeLink.href.includes('dark.css');
        const newTheme = isDark ? 'dark' : 'light';

        // 切换主题文件
        themeLink.href = themes[newTheme];

        // 更新开关状态
        toggleDiv.classList.toggle('active');

        // 保存到 localStorage
        localStorage.setItem('theme', newTheme);
    });
});
