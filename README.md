# Neomatrix Club (新矩阵俱乐部) 🚀

> 🔮 **AI 时代新范式 —— 成为你这个时代的超级个体**

一个人就是一支军队。新矩阵俱乐部为超级个体提供系统化成长方法论、前沿 AI 工具和同频社群，帮你在 AI 时代独立撬动世界。本项目是 Neomatrix Club 的官方落地页，采用极简高效的前端架构构建，提供极致的性能与富有活力的现代设计感。

---

## 📖 项目简介

这是一个展示型落地页（Landing Page）项目，致力于直观展示俱乐部的核心价值、用户评价、定价策略以及加入方式。项目的设计理念深受现代前沿极简主义与动态微交互的启发，为访问者带来丝滑的沉浸式体验。

## ✨ 核心特性

- ⚡️ **极速加载与极致性能**：默认发货零 JavaScript，基于 Astro 实现极致的静态网站性能体验。
- 🎨 **高级视觉设计语言**：使用高级 CSS 渐变、动态模糊（Glassmorphism）与多层次的悬浮动效。
- 🧩 **模块化的组件结构**：页面拆分为高度复用的 Astro 组件（如 `Hero`、`Features`、`HowItWorks`、`Pricing` 等），易于扩展和维护。
- 🌐 **纯粹且轻量的技术选型**：无需复杂的 CSS 预处理器或重度 UI 框架，通过 Scoped Vanilla CSS 和 Vanilla JS IntersectionObserver 实现交互。

## 🛠️ 技术栈

- **框架**: [Astro 5.x](https://astro.build/) - 下一代 Web 框架，专注于内容极速分发。
- **样式**: Vanilla CSS (原生 CSS 变量 + 模块化作用域样式)
- **部署&构建**: Node.js + NPM Scripts

---

## 🚀 快速开始

本项目运行环境需要 Node.js (建议 v18+)。

### 1. 克隆代码仓库

```bash
git clone https://github.com/Neonity2020/neomatrix.git
cd neomatrix-club
```

### 2. 安装依赖包

```bash
npm install
```

### 3. 启动本地开发服务器

```bash
npm run dev
```
打开浏览器访问 `http://localhost:4321` 即可预览落地页。

### 4. 生成生产环境构建版

```bash
npm run build
```
构建出的静态网页产物将会生成在 `dist/` 目录中。

---

## 🔒 仓库安全与提交规范

在这个项目中，我们强制实施了严格的版本控制安全准则：

1. **绝对禁止泄露环境变量**：所有与环境和密钥相关的文件（如 `.env`, `.env.local`）已被 `.gitignore` 和全局 Git Hook 严格屏蔽，**严禁提交**。
2. **保持仓库整洁**：所有的构建产物和框架缓存目录（如 `node_modules/`, `dist/`, `.astro/`, `.vercel/` 等）都应被忽略，绝不能被推送至远程代码库。

为了约束这一点，项目中已配有 `RULES.md` 和相匹配的安全检查，请在开发时务必遵守。

---
*Built with ❤️ for the AI era super individuals.*
