# 部署指南

## 快速部署（3种方式）

### 🌐 Netlify 部署（最简单 - 推荐）

1. **访问** [https://app.netlify.com](https://app.netlify.com)
2. **注册/登录** 您的账户
3. **点击** "Add new site" → "Deploy manually"
4. **拖拽** 整个项目文件夹到上传区域
5. **等待** 部署完成（约30秒）
6. **获得** 免费网址：`your-site.netlify.app`

✅ **优点**：最简单，无需命令行，支持 HTTPS，自动生成网址

---

### 🚀 Vercel 部署（快速）

1. **访问** [https://vercel.com](https://vercel.com)
2. **注册/登录** 您的账户
3. **点击** "Add New Project"
4. **选择** "Import Git Repository" 或直接拖拽文件夹
5. **等待** 部署完成
6. **获得** 免费网址：`your-site.vercel.app`

✅ **优点**：快速，支持自动部署，有免费 SSL

---

### 📦 GitHub Pages 部署

#### 步骤 1：创建 GitHub 仓库

1. **访问** [https://github.com](https://github.com)
2. **点击** 右上角 "+" → "New repository"
3. **输入** 仓库名称（如：`japanese-phrases-app`）
4. **选择** Public 或 Private
5. **不要** 勾选任何初始化选项
6. **点击** "Create repository"

#### 步骤 2：推送代码到 GitHub

在终端中执行以下命令（已准备好）：

```bash
# 如果还没有初始化 Git，执行：
# git init
# git add .
# git commit -m "Initial commit"

# 连接 GitHub 仓库（将 YOUR_USERNAME 和 REPO_NAME 替换为您的信息）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 步骤 3：启用 GitHub Pages

1. **进入** 仓库设置（Settings）
2. **点击** 左侧菜单 "Pages"
3. **选择** Source: "Deploy from a branch"
4. **选择** Branch: "main" / "/ (root)"
5. **点击** Save
6. **等待** 几分钟，获得网址：`https://YOUR_USERNAME.github.io/REPO_NAME`

---

## 本地测试

在部署前，您可以在本地测试：

```bash
# 使用 Python（如果已安装）
python3 -m http.server 8000

# 或使用 Node.js
npx http-server

# 然后在浏览器访问
# http://localhost:8000
```

---

## 部署后检查

部署完成后，请检查：

- ✅ 网站可以正常访问
- ✅ 所有功能正常工作
- ✅ 语音播放功能正常
- ✅ 进度保存功能正常
- ✅ 响应式设计在手机上正常显示

---

## 推荐

**最适合快速部署**：Netlify（拖拽即可）

**最适合持续更新**：GitHub Pages（每次推送自动更新）

**最适合专业项目**：Vercel（功能最全）

