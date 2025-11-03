#!/bin/bash

# 快速推送到 GitHub 脚本

echo "🚀 准备推送到 GitHub..."
echo ""

# 检查远程仓库
if git remote get-url origin &>/dev/null; then
    echo "✅ GitHub 远程仓库已配置"
    git remote -v
    echo ""
else
    echo "❌ 未配置远程仓库"
    exit 1
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  检测到未提交的更改，正在提交..."
    git add .
    git commit -m "Auto commit: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 尝试推送
echo "📤 正在推送到 GitHub..."
echo ""
echo "如果提示需要认证："
echo "  用户名: john20251372"
echo "  密码: 使用 GitHub Personal Access Token (不是账户密码)"
echo "  创建 Token: https://github.com/settings/tokens"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "访问您的仓库："
    echo "https://github.com/john20251372/japanese-tutorial"
    echo ""
    echo "如果 Netlify 已连接到 GitHub，网站会自动更新！"
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "可能的原因："
    echo "1. 需要 GitHub 认证"
    echo "2. 网络连接问题"
    echo ""
    echo "解决方案："
    echo "1. 访问 https://github.com/settings/tokens 创建 Personal Access Token"
    echo "2. 或者使用 GitHub Desktop 推送"
fi

