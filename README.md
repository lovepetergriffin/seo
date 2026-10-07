# AI Tool Compass

英文 AI 工具导航 + 博客站，静态生成（Astro），面向 SEO，变现方式为联盟营销 + 展示广告。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 页面类型（每种对应一类搜索词）

| 路径 | 目标关键词 | 数据来源 |
| --- | --- | --- |
| `/tools/<slug>/` | `<tool> review`、`<tool> pricing` | `src/content/tools/*.md` |
| `/category/<slug>/` | `best ai <category> tools` | `src/data/categories.ts` |
| `/alternatives/<slug>/` | `<tool> alternatives` | 自动生成（同分类 ≥2 个其他工具时） |
| `/compare/<a>-vs-<b>/` | `<a> vs <b>` | `src/content/comparisons/*.md` |
| `/blog/<slug>/` | 信息类长尾词 | `src/content/blog/*.md` |

## 日常操作

- **加工具**：复制 `src/content/tools/` 里任意一个 `.md`，改字段。文件名即 URL。分类页、替代品页、sitemap 自动更新。
- **加联盟链接**：在工具的 frontmatter 加 `affiliateUrl: "https://..."`。按钮会自动切换到该链接，加上 `rel="sponsored nofollow"` 并显示披露文字。
- **加对比页**：在 `src/content/comparisons/` 新建 `a-vs-b.md`，`a`/`b` 填工具文件名。
- **改站名**：`src/site.config.ts`。
- **开广告 / 统计**：复制 `.env.example` 为 `.env`，填 `PUBLIC_ADSENSE_CLIENT`、`PUBLIC_GA_ID`。未填时线上不渲染任何广告位。

## 上线前必须做

1. 站点 URL 在 Vercel 上自动取项目的生产域名（先是 `*.vercel.app`，绑定自定义域名后自动切换），canonical、sitemap、RSS 都依赖它。部署到其他平台时需手动设置 `SITE_URL`。
2. **逐条核对工具的价格和功能**。种子数据是初稿，AI 工具定价变动很快。
3. 改站名和 `public/favicon.svg`；补一张 1200×630 的默认分享图并传给 `Base.astro` 的 `image`。
4. `about` 页补联系方式；`privacy` 页是模板，面向欧盟流量投广告需要接入 Cookie 同意管理（CMP）。
5. 部署：Vercel 导入本仓库即可，框架自动识别为 Astro，无需额外配置；之后每次 push 到 `main` 自动重新部署。
6. 在 Google Search Console 和 Bing Webmaster Tools 提交 `sitemap-index.xml`。
