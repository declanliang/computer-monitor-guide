# Computer Monitor Guide — 网站改造计划 & 内容目录

> 适用于：[computer-monitor-guide.com](https://www.computer-monitor-guide.com)  
> 技术框架：Docusaurus  
> 目标：在保留现有教科书结构的基础上，新增 Affiliate 推荐内容

---

## 一、网站结构改造方案

### 1.1 整体架构（双轨制）

```
computer-monitor-guide.com/
├── /docs/                    ← 现有教科书内容，保持不变
│   ├── quick-guide/
│   ├── fundamentals/
│   └── advanced/
│
├── /recommendations/         ← 新增：常青推荐榜单（高 aff 转化）
│   ├── by-use-case/
│   ├── by-budget/
│   └── by-type/
│
└── /blog/                    ← 新增：时效性内容（评测、新品、促销）
```

---

### 1.2 `docusaurus.config.js` 修改内容

#### ① 启用 Blog 插件

在 `plugins` 或 `presets` 中添加 blog 配置：

```js
blog: {
  showReadingTime: true,
  blogTitle: 'Reviews & Updates',
  blogDescription: 'Monitor reviews, comparisons, and buying news',
  routeBasePath: 'blog',
  postsPerPage: 10,
}
```

#### ② 新增 Recommendations 文档区

在 `docs` 配置中新增一个独立的 plugin 实例（Docusaurus 支持多实例）：

```js
[
  '@docusaurus/plugin-content-docs',
  {
    id: 'recommendations',
    path: 'recommendations',
    routeBasePath: 'recommendations',
    sidebarPath: require.resolve('./sidebarsRecommendations.js'),
  },
]
```

#### ③ 导航栏修改

将顶部导航栏从：

```
[Guide]  [GitHub]  [Language]
```

改为：

```
[Guide]  [Our Picks 🛒]  [Reviews]  [GitHub]  [Language]
```

对应配置：

```js
navbar: {
  items: [
    { to: '/docs/quick-guide/by-use-case', label: 'Guide', position: 'left' },
    { to: '/recommendations', label: 'Our Picks 🛒', position: 'left' },
    { to: '/blog', label: 'Reviews', position: 'left' },
    { href: 'https://github.com/...', label: 'GitHub', position: 'right' },
  ]
}
```

---

### 1.3 侧边栏修改（`sidebars.js`）

在现有 docs 侧边栏末尾新增"Our Picks"章节入口（作为引导，实际内容在 `/recommendations/`）：

```js
{
  type: 'link',
  label: '🛒 Monitor Recommendations →',
  href: '/recommendations',
}
```

---

### 1.4 现有文章末尾添加内链引导模块

在每篇基础知识文章末尾，添加一个 Docusaurus Admonition 提示框，引导用户到推荐页面。

示例（放在 Panel Types 文章末尾）：

```mdx
:::tip Ready to choose?
Now that you understand panel types, see our curated picks:  
👉 [Best IPS Monitors](/recommendations/best-ips-monitors)  
👉 [Best OLED Monitors](/recommendations/best-oled-monitors)
:::
```

内链映射建议：

| 基础知识文章 | 推荐到的页面 |
|---|---|
| Panel Types | Best IPS / Best OLED |
| Refresh Rate | Best 144Hz / Best Gaming Monitors |
| Size and Resolution | Best 27-inch / Best 4K Monitors |
| Color Gamut | Best for Design & Color Work |
| Interface Types | Best Monitors with USB-C |

---

### 1.5 Affiliate 链接规范

- 所有 aff 链接统一使用 Amazon Associates（起步阶段）
- 在每个推荐页面顶部添加 Disclosure 声明（FTC 合规要求）：

```mdx
> *Disclosure: This page contains affiliate links. If you buy through our links, 
> we may earn a small commission at no extra cost to you.*
```

- 推荐链接格式：`https://www.amazon.com/dp/[ASIN]?tag=YOUR-TAG-20`

---

## 二、推荐文章目录

> 按内容类型分类，优先级从高到低排列（⭐ = aff 转化潜力）

---

### 📋 类型 A：场景选购指南（Recommendations by Use Case）
> 放在 `/recommendations/` 目录，常青内容，核心 aff 来源

| 文章标题 | URL Slug | 优先级 |
|---|---|---|
| Best Monitor for Daily Office & Study | `best-monitor-office-study` | ⭐⭐⭐⭐⭐ |
| Best Monitor for Programming & Coding | `best-monitor-programming` | ⭐⭐⭐⭐⭐ |
| Best Monitor for Graphic Design | `best-monitor-graphic-design` | ⭐⭐⭐⭐⭐ |
| Best Monitor for Video Editing | `best-monitor-video-editing` | ⭐⭐⭐⭐⭐ |
| Best Monitor for Gaming (Competitive) | `best-monitor-competitive-gaming` | ⭐⭐⭐⭐⭐ |
| Best Monitor for Gaming (Single-player AAA) | `best-monitor-aaa-gaming` | ⭐⭐⭐⭐ |
| Best Monitor for Photo Editing | `best-monitor-photo-editing` | ⭐⭐⭐⭐ |
| Best Monitor for Home Theater & Movies | `best-monitor-home-theater` | ⭐⭐⭐⭐ |
| Best Monitor for Students | `best-monitor-students` | ⭐⭐⭐⭐ |
| Best Dual Monitor Setup | `best-dual-monitor-setup` | ⭐⭐⭐ |

---

### 💰 类型 B：预算段榜单（Recommendations by Budget）
> SEO 流量大，用户购买意图最强

| 文章标题 | URL Slug | 优先级 |
|---|---|---|
| Best Monitors Under $150 | `best-monitors-under-150` | ⭐⭐⭐⭐⭐ |
| Best Monitors Under $300 | `best-monitors-under-300` | ⭐⭐⭐⭐⭐ |
| Best Monitors Under $500 | `best-monitors-under-500` | ⭐⭐⭐⭐⭐ |
| Best Monitors Under $1000 | `best-monitors-under-1000` | ⭐⭐⭐⭐ |
| Best Budget 4K Monitor | `best-budget-4k-monitor` | ⭐⭐⭐⭐ |
| Best Premium Monitor (No Budget Limit) | `best-premium-monitors` | ⭐⭐⭐ |

---

### 🖥️ 类型 C：规格/技术型榜单（Recommendations by Spec）
> 与现有教科书内容直接衔接，内链效果最好

| 文章标题 | URL Slug | 优先级 |
|---|---|---|
| Best IPS Monitors | `best-ips-monitors` | ⭐⭐⭐⭐⭐ |
| Best OLED Monitors | `best-oled-monitors` | ⭐⭐⭐⭐⭐ |
| Best VA Panel Monitors | `best-va-monitors` | ⭐⭐⭐ |
| Best 144Hz Monitors | `best-144hz-monitors` | ⭐⭐⭐⭐⭐ |
| Best 240Hz Monitors | `best-240hz-monitors` | ⭐⭐⭐⭐ |
| Best 4K Monitors | `best-4k-monitors` | ⭐⭐⭐⭐⭐ |
| Best 1440p (2K) Monitors | `best-1440p-monitors` | ⭐⭐⭐⭐⭐ |
| Best 1080p Monitors | `best-1080p-monitors` | ⭐⭐⭐⭐ |
| Best 27-inch Monitors | `best-27-inch-monitors` | ⭐⭐⭐⭐⭐ |
| Best 32-inch Monitors | `best-32-inch-monitors` | ⭐⭐⭐⭐ |
| Best Ultrawide Monitors | `best-ultrawide-monitors` | ⭐⭐⭐⭐ |
| Best Monitors with USB-C | `best-monitors-usb-c` | ⭐⭐⭐⭐ |
| Best HDR Monitors | `best-hdr-monitors` | ⭐⭐⭐ |

---

### ⚔️ 类型 D：对比文章（Comparisons）
> 放在 `/blog/` 或 `/docs/comparisons/`，SEO 长尾效果好

| 文章标题 | URL Slug | 优先级 |
|---|---|---|
| IPS vs VA vs OLED: Which Panel Is Right for You? | `ips-vs-va-vs-oled` | ⭐⭐⭐⭐⭐ |
| 1080p vs 1440p vs 4K: Which Resolution Should You Choose? | `1080p-vs-1440p-vs-4k` | ⭐⭐⭐⭐⭐ |
| 27 inch vs 32 inch Monitor: Size Comparison | `27-vs-32-inch-monitor` | ⭐⭐⭐⭐ |
| 144Hz vs 240Hz: Is the Upgrade Worth It? | `144hz-vs-240hz` | ⭐⭐⭐⭐ |
| 60Hz vs 144Hz: Do You Really Need High Refresh Rate? | `60hz-vs-144hz` | ⭐⭐⭐⭐ |
| Ultrawide vs Dual Monitor: Which Setup Is Better? | `ultrawide-vs-dual-monitor` | ⭐⭐⭐ |
| HDMI vs DisplayPort: Which Cable Should You Use? | `hdmi-vs-displayport` | ⭐⭐⭐ |
| G-Sync vs FreeSync: Which Sync Technology Is Better? | `gsync-vs-freesync` | ⭐⭐⭐ |
| TN vs IPS for Gaming: The Truth | `tn-vs-ips-gaming` | ⭐⭐⭐ |

---

### 🔬 类型 E：产品评测（Reviews）
> 放在 `/blog/`，需定期更新，适合评测具体热门型号

| 文章标题 | 说明 |
|---|---|
| LG 27GP850-B Review | 主流 1440p 游戏显示器 |
| Dell U2723D Review | 办公/设计主力款 |
| ASUS ProArt PA279CRV Review | 专业创作者 |
| BenQ MOBIUZ EX2710Q Review | 游戏 + 日常两用 |
| Samsung Odyssey G7 Review | 曲面游戏高端款 |
| LG 27EP950-B OLED Review | OLED 旗舰 |

> 💡 评测文章建议每篇结构：开箱概述 → 规格表 → 各维度评分 → 适合人群 → 购买建议（含 aff 链接）→ 同类对比

---

### ❓ 类型 F：问答/科普文章（FAQ & Educational）
> 配合 SEO 长尾词，流量稳定，可以自然嵌入内链

| 文章标题 | URL Slug |
|---|---|
| Is 27 Inch Too Big for 1080p? | `27-inch-1080p-too-big` |
| Do You Need 144Hz for Office Work? | `144hz-for-office` |
| How Far Should You Sit from a 27-inch Monitor? | `monitor-viewing-distance-27` |
| What Is the Best Monitor Size for Programming? | `monitor-size-programming` |
| Does Monitor Size Affect Eye Strain? | `monitor-size-eye-strain` |
| Should I Get a Curved Monitor? | `curved-monitor-worth-it` |
| How Many Monitors Do I Need for Productivity? | `how-many-monitors-productivity` |

---

## 三、推荐文章内容模板

每篇"Best X Monitors"文章建议使用以下统一结构：

```
1. 开头（100字）：这篇文章的筛选标准和方法论
2. Disclosure 声明
3. 快速总结表格（型号 / 价格 / 最适合人群）
4. 每个推荐（3-5个）：
   - 产品名 + aff 链接
   - 核心规格
   - 优点 / 缺点
   - 适合谁
5. 如何选择（引导回 /docs/ 基础知识）
6. 常见问题 FAQ（SEO用）
```

---

## 四、执行优先级建议

### 第一阶段（先跑通链路）
1. 修改 `docusaurus.config.js`，添加导航栏入口
2. 创建 `/recommendations/` 目录和侧边栏配置
3. 写第一篇文章：`best-monitor-office-study`（最广受众）
4. 在 Panel Types 和 Refresh Rate 页面加内链

### 第二阶段（扩充核心内容）
5. 完成所有类型 A（场景指南）共 10 篇
6. 完成类型 B（预算榜单）共 6 篇
7. 开始类型 D（对比文章）中搜索量最高的 5 篇

### 第三阶段（SEO + 变现深化）
8. 申请更高佣金的品牌 aff 项目（LG、ASUS、Samsung）
9. 添加类型 C（规格榜单）
10. 开始类型 E（评测文章），每月 1-2 篇

---

*文档版本：v1.0 | 生成于 2026-03*
