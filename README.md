# 日语旅行短语学习工具

一个帮助学习和练习日语旅行短语的网页应用。

## 功能特性

- 📚 **9个分类**：问候、用餐、购物、问路、紧急情况、交通、便利店、酒店、商务
- 📖 **常用单词**：500+常用单词，包括星期、月份、数量词等
- 🔊 **语音播放**：自动选择最佳日语语音进行发音
- ✅ **进度跟踪**：标记已掌握/未掌握的短语
- 🎯 **学习模式**：查看短语、假名注音和中文翻译
- 🧪 **测试模式**：测试自己对短语的掌握程度
- 🇨🇳 **中文界面**：完整的中文用户界面

## 使用方法

1. 直接在浏览器中打开 `index.html` 即可使用
2. 所有数据存储在本地浏览器中（localStorage）
3. 无需网络连接即可使用

## 文件结构

```
.
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript 逻辑
├── phrases-data.js     # 短语和单词数据
└── README.md           # 说明文档
```

## 部署方式

### 方式一：直接部署到静态网站托管服务

#### GitHub Pages
1. 创建 GitHub 仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 选择 `main` 分支作为源

#### Netlify
1. 访问 [Netlify](https://www.netlify.com/)
2. 拖拽整个文件夹到 Netlify 部署区域
3. 或连接 GitHub 仓库自动部署

#### Vercel
1. 访问 [Vercel](https://vercel.com/)
2. 导入项目
3. 直接部署

### 方式二：本地服务器

```bash
# 使用 Python 3
python3 -m http.server 8000

# 使用 Node.js (需要先安装 http-server)
npx http-server

# 然后在浏览器中访问
# http://localhost:8000
```

## 浏览器支持

- Chrome / Edge（推荐）
- Firefox
- Safari
- 需要支持 Web Speech API 的现代浏览器

## 技术栈

- 纯 HTML/CSS/JavaScript
- 使用 Web Speech API 进行语音合成
- localStorage 存储学习进度
- 响应式设计，支持移动设备

## 许可证

MIT License

