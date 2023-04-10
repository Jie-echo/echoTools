# echo-track介绍
1. echo-track工具库为C端产品pv/uv提供服务，方便多端规范统一，封装公用埋点库。
2. 熟悉npm发布流程。
3. 模拟埋点方法调用，可根据实际业务进行改进。

# 用法
import echoTrack from 'echo-track';

const instance = new echoTrack();
instance?.action({
  name: 'echo',
  event: 'click'
})
