<template>
  <el-table
    :data="tableData"
    :row-class-name="tableRowClassName"
    :header-cell-style="tableHeaderColor"
    :row-style="tableRowStyle"
    @row-click="rowClick"
  >
    <el-table-column property="name" label=" the name " width="120">
    </el-table-column>
    <el-table-column property="age" label=" age " width="120">
    </el-table-column>
    <el-table-column property="sex" label=" gender " width="120">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "table",
  data() {
    return {
      tableData: [
        {
          name: "Cindy",
          age: 20,
          sex: " female "
        },
        {
          name: "Mila",
          age: 22,
          sex: " female "
        },
        {
          name: "Bob",
          age: 23,
          sex: " male "
        }
      ],
      getIndex: ""
    };
  },
  created() {},
  methods: {
    //  modify the table tr row background
    tableRowStyle({ row, rowIndex }) {
      if (this.getIndex === rowIndex) {
        return {
          "background-color": "pink"
        };
      }
    },
    //  modify the table header the background color
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color:red;color: #fff;font-weight: 50;";
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    rowClick(row) {
      this.getIndex = row.index;
    }
  }
};
</script>

<style scoped></style>
