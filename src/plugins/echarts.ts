// 按需引入一堆坑，暂时不用
// 对于echarts按需引入
// echarts必要的接口，核心模块等
import * as echarts from "echarts/core";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
  } from 'echarts/components';
  import { LabelLayout, UniversalTransition } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
])
export default echarts