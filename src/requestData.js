import axios from 'axios'
import Vue from 'vue'



let data1 = {};

async function getData() {
    const acdata = await axios.get("http://localhost:61208/api/3/all/views");
    // this.data = acdata;
    let cpu = acdata.data["cpu"]["user"];
    // let dec = acdata.data["cpu"]["user"].decoration
    data1 = cpu
}


// getData()

module.exports.data1 = data1;