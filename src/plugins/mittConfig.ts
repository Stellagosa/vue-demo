import mitt from "mitt";

const emitter = mitt()

const eventBus = {
  /**
   * 添加一个监听事件
   */
  on: emitter.on,
  /**
   * 移除一个监听事件
   */
  off: emitter.off,
  /**
   * 发送一个监听事件
   */
  emit: emitter.emit
}

export default eventBus
