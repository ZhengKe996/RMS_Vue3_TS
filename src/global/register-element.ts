import { App } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default function (app: App): void {
  app.use(ElementPlus)
}
