# GitHub Pages 部署指南（一步步）

本项目已经是静态网站结构，核心入口是 `index.html`，可直接部署到 GitHub Pages。

## 方式 A：部署为个人主页（推荐）

适用于你希望网址是：`https://<你的GitHub用户名>.github.io/`

1. 在 GitHub 新建仓库，仓库名必须是：`<你的GitHub用户名>.github.io`
2. 在本地项目目录执行：

```bash
git init
git add .
git commit -m "Init personal website"
git branch -M main
git remote add origin git@github.com:<你的GitHub用户名>/<你的GitHub用户名>.github.io.git
git push -u origin main
```

3. 打开仓库页面：`Settings -> Pages`
4. 在 `Build and deployment` 中选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`，`/(root)`
5. 保存后等待 1-3 分钟，访问：`https://<你的GitHub用户名>.github.io/`

## 方式 B：部署为项目主页

适用于你希望网址是：`https://<你的GitHub用户名>.github.io/<仓库名>/`

1. 仓库名可以任意，例如：`pengliu-cv-site`
2. 把当前代码推到该仓库
3. 在 `Settings -> Pages` 里选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`，`/(root)`
4. 访问：`https://<你的GitHub用户名>.github.io/<仓库名>/`

## 每次更新网站

```bash
git add .
git commit -m "Update website"
git push
```

推送后 GitHub Pages 会自动重新发布。

## 常见问题

1. 页面 404：确认 `Settings -> Pages` 是否已启用，并等待几分钟。
2. 图片不显示：确认 `photo.jpg` 文件已提交到仓库。
3. CV 链接打不开：确认 `cv-llt.pdf` 和 `cv-cn.pdf` 已提交。
4. 如果你不想公开手机号，可在 `index.html` 删除电话那一行。
