export default {
    getUserinfos: () => {
        return fetch('/Userinfo')
            .then(res => res.json())
            .then(data => data);
    },
    deleteUserinfo: (_id) => {
        return fetch(`/Userinfo/${_id}`,
            { method: 'delete' })
            .then(res => res.json())
            .then(data => data);
    },
    updateUserinfo: (Userinfo) => {
        return fetch(`/Userinfo/${Userinfo._id}`,
            {
                method: "put",
                body: JSON.stringify(Userinfo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(data => data);
    },
    createUserinfo: (Userinfo) => {
        //console.log(Userinfo)
        return fetch(`/Userinfo`,
            {
                method: 'post',
                body: JSON.stringify(Userinfo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(data => data);
    }
}