<template>
  <div class="config-button">
    <el-button type="primary" @click="handleShow">Config</el-button>
    <el-dialog title="Configuration" :visible.sync="configFormVisible">
      <el-form>
        <el-form-item label="Url" :label-width="formLabelWidth">
          <el-input v-model="config.url"></el-input>
        </el-form-item>
        <el-form-item label="Username" :label-width="formLabelWidth">
          <el-input v-model="config.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth">
          <el-input type="password" v-model="config.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="configFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleConfirm">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  Button,
  Dialog,
  Form,
  FormItem,
  Input
} from 'element-ui';

var components = {};
components[Button.name] = Button;
components[Dialog.name] = Dialog;
components[Form.name] = Form;
components[FormItem.name] = FormItem;
components[Input.name] = Input;
export default {
  name: 'config-button',
  data: function () {
    return {
      configFormVisible: false,
      config: {},
      formLabelWidth: '120px'
    };
  },
  components: components,
  methods: {
    handleShow() {
      this.configFormVisible = true;
      this.config = Object.assign({}, $config);
    },
    handleConfirm() {
      this.configFormVisible = false;
      $config = Object.assign({}, this.config);
    },
  },
}
</script>

<style>
</style>
