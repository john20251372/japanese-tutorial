# 如何访问已部署的应用

## 在 Netlify 中找到您的应用网址

### 部署完成后，Netlify 会自动生成一个网址：

1. **查看 Netlify 仪表板**
   - 登录 https://app.netlify.com
   - 在 "Sites" 列表中，找到您的项目（通常是 `japanese-tutorial` 或您设置的名称）
   - 点击项目名称

2. **查看网站 URL**
   - 在项目详情页面的顶部，您会看到网站 URL
   - 格式类似：`https://random-name-123456.netlify.app`
   - 或者如果您设置了自定义名称：`https://your-custom-name.netlify.app`

3. **访问网站**
   - 直接点击 URL 即可访问
   - 或复制 URL 到浏览器地址栏打开

## 自定义网站名称（可选）

如果您想使用更好记的网址：

1. 在 Netlify 项目页面，点击 **"Site settings"**
2. 在左侧菜单中选择 **"Domain management"**
3. 在 "Site details" 部分，点击 **"Change site name"**
4. 输入您想要的名称（如：`japanese-phrases`）
5. 新的网址将是：`https://japanese-phrases.netlify.app`

## 功能检查清单

访问网站后，请检查：

✅ **主页**：能看到所有分类卡片
✅ **导航**：首页、学习、测试按钮正常工作
✅ **语音播放**：点击播放按钮能听到日语发音
✅ **进度跟踪**：标记已掌握/未掌握功能正常
✅ **响应式**：在手机上也能正常显示
✅ **数据持久化**：刷新页面后进度仍然保存

## 分享您的网站

您的网站 URL 可以直接分享给其他人使用，他们可以在任何设备上访问：
- 电脑浏览器
- 手机浏览器
- 平板电脑

## 常见问题

**Q: 部署后看不到更新的内容？**
A: 清除浏览器缓存（Ctrl+F5 或 Cmd+Shift+R），或使用无痕模式访问

**Q: 如何更新网站？**
- 如果使用手动上传：重新上传更新的文件夹
- 如果连接了 GitHub：推送代码后 Netlify 会自动重新部署

**Q: 如何知道部署是否成功？**
A: 在 Netlify 项目页面，查看 "Deploys" 标签，绿色表示成功

