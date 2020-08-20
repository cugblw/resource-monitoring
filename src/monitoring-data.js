import axios from "axios";

let URL = "http://localhost:61208/api/3/all"

let getCpuData = async function () {
    return await axios
        .get(URL)
        .then(res => res.data.cpu)
        .catch(err => console.log(err));
};

let getMemoryData = async function () {
    return await axios
        .get(URL)
        .then(res => res.data.mem)
        .catch(err => console.log(err));
}

let getDiskIO = async function () {
    return await axios
        .get(URL)
        .then(res => res.data.diskio)
        .catch(err => console.log(err));
}

let getDiskInfo = async function () {
    return await axios
        .get(URL)
        .then(res => res.data.fs)
        .catch(err => console.log(err));
}

let getSystemInfo = async function () {
    return await axios
        .get(URL)
        .then(res => res.data.system)
        .catch(err => console.log(err));
}

let getProcessList = async function () {
    return await axios
        .get(URL)
        .then(res => res.data.processlist)
        .catch(err => console.log(err));
}

let getNetworkIO = async function () {
    return await axios
        .get(URL)
        .then(res => res.data.network)
        .catch(err => console.log(err));
}
export { getCpuData, getDiskIO, getMemoryData, getProcessList, getNetworkIO, getSystemInfo, getDiskInfo };
