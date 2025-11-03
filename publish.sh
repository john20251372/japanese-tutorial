#!/bin/bash

# 日语旅行短语学习工具 - 发布脚本

echo "🚀 日语旅行短语学习工具 - 发布助手"
echo "=================================="
echo ""
echo "选择部署方式："
echo "1. Netlify（推荐 - 最简单）"
echo "2. Vercel"
echo "3. GitHub Pages"
echo "4. 本地测试"
echo ""
read -p "请输入选项 (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📦 Netlify 部署步骤："
        echo "1. 访问 https://app.netlify.com"
        echo "2. 注册/登录账户"
        echo "3. 点击 'Add new site' → 'Deploy manually'"
        echo "4. 将整个项目文件夹拖拽到上传区域"
        echo "5. 等待部署完成（约30秒）"
        echo ""
        echo "✨ 部署完成后，您将获得一个免费的网址！"
        ;;
    2)
        echo ""
        echo "🚀 Vercel 部署步骤："
        echo "1. 访问 https://vercel.com"
        echo "2. 注册/登录账户"
        echo "3. 点击 'Add New Project'"
        echo "4. 选择 'Import Git Repository' 或直接拖拽文件夹"
        echo "5. 等待部署完成"
        echo ""
        echo "✨ 部署完成后，您将获得一个免费的网址！"
        ;;
    3)
        echo ""
        echo "📦 GitHub Pages 部署："
        echo ""
        echo "步骤 1: 在 GitHub 创建仓库"
        echo "1. 访问 https://github.com"
        echo "2. 点击右上角 '+' → 'New repository'"
        echo "3. 输入仓库名称，选择 Public，不勾选任何选项"
        echo "4. 点击 'Create repository'"
        echo ""
        read -p "请输入您的 GitHub 用户名: " username
        read -p "请输入仓库名称: " repo
        
        echo ""
        echo "步骤 2: 推送代码到 GitHub"
        echo "执行以下命令："
        echo ""
        echo "git remote add origin https://github.com/${username}/${repo}.git"
        echo "git branch -M main"
        echo "git push -u origin main"
        echo ""
        echo "步骤 3: 启用 GitHub Pages"
        echo "1. 进入仓库 Settings"
        echo "2. 点击左侧 'Pages'"
        echo "3. Source 选择 'Deploy from a branch'"
        echo "4. Branch 选择 'main' / '/ (root)'"
        echo "5. 点击 Save"
        echo ""
        echo "✨ 几分钟后，访问: https://${username}.github.io/${repo}"
        ;;
    4)
        echo ""
        echo "🌐 启动本地服务器..."
        echo ""
        if command -v python3 &> /dev/null; then
            echo "使用 Python 3 启动服务器..."
            echo "访问 http://localhost:8000"
            echo "按 Ctrl+C 停止服务器"
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            echo "使用 Python 启动服务器..."
            echo "访问 http://localhost:8000"
            echo "按 Ctrl+C 停止服务器"
            python -m SimpleHTTPServer 8000
        else
            echo "未找到 Python，尝试使用 Node.js..."
            if command -v npx &> /dev/null; then
                echo "使用 http-server 启动..."
                echo "访问 http://localhost:8080"
                echo "按 Ctrl+C 停止服务器"
                npx http-server -p 8080
            else
                echo "❌ 未找到可用的服务器。请安装 Python 3 或 Node.js"
                echo ""
                echo "或直接在浏览器中打开 index.html 文件"
            fi
        fi
        ;;
    *)
        echo "❌ 无效的选项"
        ;;
esac

