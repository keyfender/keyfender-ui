<template>
  <div class="create-button">
    <el-button type="primary" @click="createFormVisible = true">Create Key</el-button>
    <el-dialog title="Create key" :visible.sync="createFormVisible">
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
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleCreate">Confirm</el-button>
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
  Option
} from 'element-ui';

var components = {};
components[Button.name] = Button;
components[Dialog.name] = Dialog;
components[Form.name] = Form;
components[FormItem.name] = FormItem;
components[Select.name] = Select;
components[Option.name] = Option;
export default {
  name: 'create-button',
  data: function () {
    return {
      createFormVisible: false,
      form: {
          purpose: 'encrypt',
          length: "2048",
        },
      formLabelWidth: '120px'
    };
  },
  components: components,
  methods: {
    handleCreate() {
      this.createFormVisible = false;
      var keyConfig = {
        "purpose": this.form.purpose,
        "algorithm":"RSA",
        "length": parseInt(this.form.length)
      };
      $axios.post("/api/v0/keys", keyConfig)
        .then(this.$emit("created"))
        .catch(error => console.log('create error:', error));
    },
  },
}
</script>

<style>
</style>
