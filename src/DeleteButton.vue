<template>
  <span>
    <el-popover ref="deletepopover" placement="top" width="160" v-model="popupVisible">
      <p>Are you sure to delete this?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" @click="popupVisible=false">cancel</el-button>
        <el-button type="danger" size="mini" @click="$emit('click')">confirm</el-button>
      </div>
    </el-popover>
    <el-button size="small" type="danger" v-popover:deletepopover>Delete</el-button>
  </span>
</template>

<script>
import {
  Button,
  Popover
} from 'element-ui';

var components = {};
components[Button.name] = Button;
components[Popover.name] = Popover;
export default {
  name: 'delete-button',
  data: function () {
    return {
      popupVisible: false
    };
  },
  components: components,
  methods: {
    handleDelete: function () {
      this.popupVisible = false;
      this.$emit('click');
    }
  },
}
</script>

<style>
</style>
