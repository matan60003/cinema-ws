const axios = require('axios');
const subWsSubscriptionsBL = require('../../SubscruptionsWs/BLs/subscruptionsBL');
const Sub = require('../../SubscruptionsWs/models/subscruptionsModel');

const getAllSub = async () => {
    try {
        let resp = await axios.get("http://localhost:8000/subscriptions");
        let data = resp.data;
        return data
    } catch (err) {
        console.log(err);
    }
}


const getSubById = async (id) => {
    try {
        let resp = await axios.get(`http://localhost:8000/subscriptions/${id}`)
        const data = resp.data
        return data
    } catch (err) {
        return err
    }
}


const updateSub = async (id, subObj) => {
    try {
        let resp = await axios.put(`http://localhost:8000/subscriptions/${id}`, subObj)
        const data = resp.data
        return ' subscription was updated successfully'
    } catch (err) {
        return err
    }
}


const deleteSub = async (id) => {
    try {
        let resp = await axios.delete(`http://localhost:8000/subscriptions/${id}`)
        const data = resp.data
        return "subscription was deleted successfully"
    } catch (err) {
        return err
    }
}


const addSub = async (newSub) => {
    try {
        let resp = await axios.post(`http://localhost:8000/subscriptions`, newSub)
        let data = resp.data
        return "subscription was created successfully"
    } catch (err) {
        return err
    }
}



module.exports = {
    getAllSub,
    getSubById,
    updateSub,
    deleteSub,
    addSub
}