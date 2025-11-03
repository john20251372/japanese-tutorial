# Netlify 部署指南

## 方法一：拖拽部署（最简单 - 推荐）✨

### 步骤：

1. **访问 Netlify**
   - 打开浏览器访问：https://app.netlify.com
   - 如果没有账户，点击 "Sign up" 注册（可以用 GitHub 账号快速注册）

2. **开始部署**
   - 登录后，点击页面右上角的 **"Add new site"** 按钮
   - 选择 **"Deploy manually"**（手动部署）
   - 您会看到一个虚线框，提示 "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"

3. **上传文件夹**
   - 在 Finder 中找到项目文件夹：`/Users/jiangli/Cursor/251031`
   - **直接拖拽整个文件夹**到 Netlify 的上传区域
   - 或者点击上传区域，选择整个项目文件夹

4. **等待部署**
   - Netlify 会自动检测文件并开始部署
   - 通常需要 10-30 秒
   - 部署完成后，您会看到一个绿色的成功消息

5. **获得网址**
   - 部署成功后，Netlify 会自动生成一个网址
   - 格式类似：`https://random-name-123456.netlify.app`
   - 您也可以点击 "Site settings" → "Change site name" 来自定义网址

## 方法二：使用 Netlify CLI（命令行）

如果您已经安装了 Netlify CLI：

```bash
# 安装 Netlify CLI（如果还没安装）
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 在项目目录中初始化
cd /Users/jiangli/Cursor/251031
netlify init

# 部署
netlify deploy --prod
```

## 方法三：连接 GitHub（推荐用于持续部署）

1. **推送代码到 GitHub**
   ```bash
   # 在 GitHub 上创建新仓库，然后执行：
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **在 Netlify 连接 GitHub**
   - 在 Netlify 点击 "Add new site" → "Import an existing project"
   - 选择 "GitHub"
   - 授权 Netlify 访问您的 GitHub
   - 选择刚才创建的仓库
   - Netlify 会自动配置，点击 "Deploy site"

3. **自动更新**
   - 之后每次您推送代码到 GitHub，Netlify 会自动重新部署

## 部署后检查

✅ 检查网站是否可以正常访问
✅ 测试所有功能（语音播放、进度保存等）
✅ 在不同设备上测试响应式布局

## 自定义域名（可选）

在 Netlify 后台：
1. 进入 "Site settings" → "Domain management"
2. 点击 "Add custom domain"
3. 输入您的域名
4. 按照提示配置 DNS 记录

## 需要帮助？

如果遇到任何问题：
- Netlify 文档：https://docs.netlify.com
- Netlify 社区：https://answers.netlify.com

