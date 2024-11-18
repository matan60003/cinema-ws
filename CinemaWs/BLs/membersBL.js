const axios = require('axios');
const subsWSMembersBL = require('../../SubscruptionsWs/BLs/membersBL');
const Member = require('../../SubscruptionsWs/models/membersModel');


const getAllMembers = async () => {
    try {
        let resp = await axios.get("http://localhost:8000/members");
        let data = resp.data;
        return data
    }
    catch (err) {
        console.log(err);
    }
}


const getMembersById = async (id) => {
    try {
        let resp = await axios.get(`http://localhost:8000/members/${id}`)
        const data = resp.data
        return data
    } catch (err) {
        return err
    }
}

const updateMember = async (id, memberObj) => {
    try {
        let resp = await axios.put(`http://localhost:8000/members/${id}`, memberObj)
        const data = resp.data
        return ' member was updated successfully'
    } catch (err) {
        return err
    }
}

const deleteMember = async (id) => {
    try {
        let resp = await axios.delete(`http://localhost:8000/members/${id}`)
        const data = resp.data
        return "member was deleted successfully"
    } catch (err) {
        return err
    }
}

const addMember = async (newMember) => {
    try {
        let resp = await axios.post(`http://localhost:8000/members`, newMember)
        const data = resp.data
        return "member was created successfully"
    } catch (err) {
        return err
    }

}



module.exports = {
    getAllMembers,
    getMembersById,
    updateMember,
    deleteMember,
    addMember

}