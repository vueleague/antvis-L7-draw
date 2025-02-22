# L7Draw

> 基于 [L7](https://l7.antv.vision/zh) 封装的地理绘制库

[![npm Version](https://img.shields.io/npm/v/@antv/l7-draw.svg)](https://www.npmjs.com/package/@antv/l7-draw) [![npm Download](https://img.shields.io/npm/dm/@antv/l7-draw.svg)](https://www.npmjs.com/package/@antv/l7-draw) ![Status](https://badgen.net/github/status/antvis/l7-draw) [![Percentage of issues still open](http://isitmaintained.com/badge/open/antvis/l7-draw.svg)](http://isitmaintained.com/project/antvis/l7-draw 'Percentage of issues still open') [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/antvis/l7-draw.svg)](http://isitmaintained.com/project/antvis/l7-draw 'Average time to resolve an issue')

## 📚 文档

[文档](https://antv.vision/L7Draw/docs/draw/point) [示例](https://antv.vision/L7Draw/example/point/start)

## 🔨 工具

基于 L7Draw 的面向 GeoJSON 编辑工具 [L7Editor](https://l7editor.antv.antgroup.com/) 已上线，欢迎尝鲜~。

## 📦 安装

```bash
npm install @antv/l7-draw
```

## 🔨 使用

### 通过 NPM 引入

```tsx | pure
// ----js-----
import { GaodeMap, Scene } from '@antv/l7';
import { DrawEvent, DrawPoint } from '@antv/l7-draw';

const scene = new Scene({
  id: 'map',
  map: new GaodeMap({}),
});

scene.on('loaded', () => {
  // 实例化 Draw
  const draw = new DrawPoint(scene, {
    editable: false,
    // Draw 配置
  });

  // 调用 Draw 上的方法
  draw.enable();

  // 监听 Draw 的事件
  draw.on(DrawEvent.Add, (newPoint) => {
    console.log(newPoint);
  });
});

// ----html----
<div id="map"></div>;
```

### 通过 CDN 引入

```html | pure
<!-- 引入依赖包 -->
<script src="https://unpkg.com/@antv/l7"></script>
<script src="https://unpkg.com/@antv/l7-draw"></script>

<script>
  const scene = new L7.Scene({
    id: 'map',
    map: new L7.GaodeMap({
      style: 'dark',
      center: [104.288144, 31.239692],
      zoom: 4.4,
    }),
  });
  scene.on('loaded', () => {
    // 通过 L7.Draw.*** 访问
    const draw = new L7.Draw.DrawPoint(scene, {});
    draw.enable();
  });
</script>
```

## ⌨️ 本地开发

```bash
# 安装依赖
npm install

# 运行页面
npm run start

# 打包
npm run build
```

## 💬 答疑

在使用 L7Draw 过程中，若有疑惑无法在文档中解决的可以扫码加入 L7 官方答疑群。

<img src="https://mdn.alipayobjects.com/huamei_rzapb5/afts/img/A*ndWjTqmhTlEAAAAAAAAAAAAADqWCAQ/original" width="400"/>

## 🤝 如何贡献

如果您在使用的过程中碰到问题，可以先通过 [issues](https://github.com/antvis/l7-draw/issues) 看看有没有类似的 bug 或者建议。

## 📖 许可证

MIT@[AntV](https://github.com/antvis).
