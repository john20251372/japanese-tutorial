# 推送代码到 GitHub 指南

您的 GitHub 仓库已配置：https://github.com/john20251372/japanese-tutorial.git

## 方法一：使用终端推送（推荐）

### 步骤：

1. **打开终端**，进入项目目录：
   ```bash
   cd /Users/jiangli/Cursor/251031
   ```

2. **推送代码**：
   ```bash
   git push -u origin main
   ```

3. **输入 GitHub 凭证**：
   - 如果提示输入用户名：输入 `john20251372`
   - 如果提示输入密码：需要使用 Personal Access Token（不是 GitHub 密码）
     - 如果还没有 Token，访问：https://github.com/settings/tokens
     - 点击 "Generate new token" → "Generate new token (classic)"
     - 勾选 `repo` 权限
     - 复制生成的 Token，在密码提示时粘贴

## 方法二：使用 SSH（如果已配置 SSH Key）

如果您已经配置了 SSH Key：

```bash
# 更改远程 URL 为 SSH
git remote set-url origin git@github.com:john20251372/japanese-tutorial.git

# 推送代码
git push -u origin main
```

## 方法三：使用 GitHub Desktop

1. 下载 GitHub Desktop：https://desktop.github.com/
2. 登录您的 GitHub 账户
3. File → Add Local Repository
4. 选择 `/Users/jiangli/Cursor/251031`
5. 点击 "Publish repository"

## 验证推送是否成功

推送成功后，访问：
https://github.com/john20251372/japanese-tutorial

您应该能看到所有项目文件。

