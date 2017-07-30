<template>
  <div class="generate-button">
    <el-button type="primary" @click="generateFormVisible = true">Generate Key</el-button>
    <el-dialog title="Generate Key" :visible.sync="generateFormVisible">
      <el-form :model="form">
        <el-form-item label="Length" :label-width="formLabelWidth">
          <el-select v-model="form.length">
            <el-option value="1024"></el-option>
            <el-option value="2048"></el-option>
            <el-option value="4096"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Purpose" :label-width="formLabelWidth">
          <el-select v-model="form.purpose">
            <el-option label="Signing" value="sign"></el-option>
            <el-option label="Encryption" value="encrypt"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" auto-complete="off" placeholder="Automatic"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="generateFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleGenerate">Confirm</el-button>
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
  Select,
  Option,
  Input
} from 'element-ui';

var components = {};
components[Button.name] = Button;
components[Dialog.name] = Dialog;
components[Form.name] = Form;
components[FormItem.name] = FormItem;
components[Select.name] = Select;
components[Option.name] = Option;
components[Input.name] = Input;
export default {
  name: 'generate-button',
  data: function () {
    return {
      generateFormVisible: false,
      form: {
          purpose: 'encrypt',
          length: '2048',
          id: ''
        },
      formLabelWidth: '120px'
    };
  },
  components: components,
  methods: {
    handleGenerate() {
      this.generateFormVisible = false;
      var keyConfig = {
        'purpose': this.form.purpose,
        'algorithm':'RSA',
        'length': parseInt(this.form.length)
      };
      if (this.form.id.length) {
        keyConfig.id = this.form.id
        this.form.id = ''
      }
      $axios().post('/api/v0/keys', keyConfig)
        .then(this.$emit('generated'))
        .catch(error => console.log('generate error:', error));
    },
  },
}
</script>

<style>
</style>
