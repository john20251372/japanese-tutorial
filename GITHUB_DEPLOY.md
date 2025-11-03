# 部署到 GitHub 指南

## 当前状态

您的 GitHub 仓库已配置：`https://github.com/john20251372/japanese-tutorial.git`

## 推送代码到 GitHub

### 步骤 1：确保所有更改已提交

检查是否有未提交的更改：
```bash
cd /Users/jiangli/Cursor/251031
git status
```

如果有未提交的文件，先提交：
```bash
git add .
git commit -m "Update: 修改标题、假名字体和进度保存说明"
```

### 步骤 2：推送到 GitHub

#### 方法一：使用终端推送（需要认证）

```bash
cd /Users/jiangli/Cursor/251031
git push -u origin main
```

**如果提示需要认证**：
- **用户名**：输入 `john20251372`
- **密码**：使用 GitHub Personal Access Token（不是账户密码）
  - 如果没有 Token，访问：https://github.com/settings/tokens
  - 点击 "Generate new token" → "Generate new token (classic)"
  - 勾选 `repo` 权限
  - 点击 "Generate token"
  - 复制 Token，在密码提示时粘贴

#### 方法二：使用 GitHub Desktop

1. 下载 GitHub Desktop：https://desktop.github.com/
2. 登录您的 GitHub 账户
3. File → Add Local Repository
4. 选择 `/Users/jiangli/Cursor/251031`
5. 点击 "Publish repository" 或 "Push origin"

#### 方法三：使用 SSH（如果已配置）

```bash
# 更改远程 URL 为 SSH
git remote set-url origin git@github.com:john20251372/japanese-tutorial.git

# 推送代码
git push -u origin main
```

### 步骤 3：验证推送成功

访问：https://github.com/john20251372/japanese-tutorial

您应该能看到所有项目文件。

## 连接 Netlify 到 GitHub（自动部署）

如果您已经通过 Netlify 手动上传了网站，现在可以连接到 GitHub 实现自动部署：

### 步骤：

1. **在 Netlify 中连接 GitHub**
   - 登录 https://app.netlify.com
   - 点击您已部署的网站
   - 点击 **"Site settings"**
   - 在左侧菜单中选择 **"Build & deploy"**
   - 在 "Continuous Deployment" 部分，点击 **"Link repository"**
   - 选择 **"GitHub"** 并授权
   - 选择仓库 `john20251372/japanese-tutorial`
   - 点击 **"Save"**

2. **配置构建设置**
   - Build command: 留空（因为这是静态网站）
   - Publish directory: `./`（根目录）
   - 点击 **"Save"**

3. **完成**
   - 现在每次您推送代码到 GitHub，Netlify 会自动重新部署
   - 您可以在 Netlify 的 "Deploys" 标签中看到自动部署状态

## 更新网站的流程

### 如果已连接 GitHub + Netlify：

1. 修改代码
2. 提交更改：
   ```bash
   git add .
   git commit -m "描述您的更改"
   ```
3. 推送到 GitHub：
   ```bash
   git push origin main
   ```
4. Netlify 自动检测到更改并重新部署
5. 几分钟后，网站自动更新

### 如果只是手动上传到 Netlify：

1. 修改代码
2. 重新打包文件夹
3. 在 Netlify 中重新上传

## 提示

✅ **推荐使用 GitHub + Netlify 自动部署**，这样更便捷，代码也有备份

✅ 所有更改都保存在 GitHub 上，可以随时查看历史记录

✅ Netlify 会自动部署，无需手动操作

