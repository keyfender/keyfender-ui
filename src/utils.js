import { Message, Notification } from "element-ui";

export default {
  reportError(msg, error) {
    console.log(msg, Object.assign({}, error));
    var desc = error.toString();
    try {
      desc += " - description: " + error.response.data.data.description;
    } catch (e) { };
    Notification.error({
      title: msg,
      message: desc,
      duration: 0
    });
  },
  reportSuccess(msg) {
    Message.success({
      showClose: true,
      message: msg,
      type: 'success'
    })
  },
}
