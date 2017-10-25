<template>
  <div id="key-list">
    <h1>Keys</h1>
    <p>
      <el-button type="primary" @click="fetchKeys">Reload</el-button>
      <generate-button @generated="fetchKeys"></generate-button>
      <config-button></config-button>
    </p>
    <el-table v-bind:data="keys" stripe style="width=100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <table id="key-details">
            <tr>
              <th>Location:</th>
              <td>{{ props.row.location }}</td>
            </tr>
            <tr>
              <th>Modulus:</th>
              <td>{{ props.row.publicKey.modulus }}</td>
            </tr>
            <tr>
              <th>Public exponent:</th>
              <td>{{ props.row.publicKey.publicExponent }}</td>
            </tr>
          </table>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="purpose" label="Purpose">
      </el-table-column>
      <el-table-column prop="algorithm" label="Algorithm">
      </el-table-column>
      <el-table-column prop="length" label="Size">
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <delete-button @click="handleDelete(scope.$index, scope.row)"></delete-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Utils from "./utils.js";
import {
  Button,
  Table,
  TableColumn,
} from 'element-ui';
import ConfigButton from './ConfigButton.vue';
import DeleteButton from './DeleteButton.vue';
import GenerateButton from './GenerateButton.vue';

function normal64(base64) {
    return base64.replace(/\-/g, '+').replace(/_/g, '/');
}

var components = {};
components[Button.name] = Button;
components[ConfigButton.name] = ConfigButton;
components[DeleteButton.name] = DeleteButton;
components[GenerateButton.name] = GenerateButton;
components[Table.name] = Table;
components[TableColumn.name] = TableColumn;

export default {
  name: 'key-list',
  data: function () {
    return {
      keys: []
    };
  },
  components: components,
  created: function () { this.fetchKeys() },
  methods: {
    fetchKeys() {
      $axios().get("/api/v0/keys")
        .then(result => {
          var new_keys = [];
          this.keys = new_keys; // link data to new_keys
          result.data.data.forEach(item =>
            $axios().get(item.location)
              .then(result => {
                result.data.data.location = item.location;
                result.data.data.length = atob(normal64(result.data.data.publicKey.modulus)).length*8;
                new_keys.push(result.data.data)
              })
              .catch(error => Utils.reportError('Fetching key details failed', error))
          )
        })
        .catch(error => Utils.reportError('Fetching keys failed', error));
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      $axios().delete(row.location)
        .then(result => {
          this.fetchKeys();
          Utils.reportSuccess("Key '" + row.id + "' deleted");
        })
        .catch(error => Utils.reportError('Delete failed', error));
    },
    logEvent(event) {
      console.log(event);
    }
  }
}
</script>

<style>
#key-details td {
  /* let the element expand but not overflow */
  overflow-wrap: break-word;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

#key-details th {
  padding: 1ex;
  text-align: right;
}
</style>
