import * as ECharts from 'echarts'
import chinaMapData from '@/base-ui/echart/data/china.json'
ECharts.registerMap('china', chinaMapData)

/**
 *
 * @param el 由外部传入的Ref对象，用于绑定图表的显示
 *
 * @echartInstance 图表初始化
 * @setOptions 监听浏览器窗口从而重绘图表
 * @updateSize 页面大小改变时重绘图表
 */
export default function (el: HTMLElement) {
  const echartInstance = ECharts.init(el)

  const setOptions = (options: ECharts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  const updateSize = () => {
    echartInstance.resize()
  }

  return { echartInstance, setOptions, updateSize }
}
