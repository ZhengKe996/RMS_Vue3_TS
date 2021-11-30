import * as ECharts from 'echarts'
import chinaMapData from '@/base-ui/echart/data/china.json'
ECharts.registerMap('china', chinaMapData)

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
