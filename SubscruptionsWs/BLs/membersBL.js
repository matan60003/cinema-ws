const Member = require('../models/membersModel');
const jsonDal = require('../DAL/jsonWs');



const populateDbWithMembers = async () => {
    const resp = await jsonDal.getAllMembers();
    const members = resp.data
    members.forEach(member => {
        const newMember = new Member({
            name: member.name,
            email: member.email,
            city: member.address.city
        })
        newMember.save(err => { if (err) return err })
    });
}


const getAllMembers = () => {
    console.log("We are on getAllMembers BL")
    return new Promise((resolve, reject) => {
        Member.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const getMembersById = (id) => {
    return new Promise((resolve, reject) => {
        Member.find({ _id: id }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}




const updateMemberById = (id, memberToUpdate) => {
    return new Promise((resolve, reject) => {
        Member.findByIdAndUpdate(id,
            {
                name: memberToUpdate.name,
                email: memberToUpdate.email,
                city: memberToUpdate.city
            }, (err) => {
                if (err)
                    reject(err)
                else
                    resolve('Member wes Succefully Updated')
            }
        )
    })
}


const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        Member.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Member deleted succefully")
            }
        })
    })
}


const addMember = (memberObj) => {
    return new Promise((resolve, reject) => {
        let newMember = new Member({
            name: memberObj.name,
            email: memberObj.email,
            city: memberObj.city
        })
        newMember.save((err) => {
            err ? reject(err) : resolve("Member Created")
        })
    })
}


module.exports = {
    populateDbWithMembers,
    getAllMembers,
    getMembersById,
    updateMemberById,
    deleteMember,
    addMember
}