export default {
    getTestcase: () => {
        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }
        return fetch('/Testcase')
            .then(handleErrors)
            .then(response => "ok")
            .catch(error => console.log(error));
    },
    getTestcaseId: (index) => {
        return fetch(`/Testcase/${index}`,
            { method: 'get' })
            .then(res => res.text())          // convert to plain text
            .then(text => text)
            //.then(res => res.json())
            //.then(data => data.response[0].datas[0]);
    },
    createTestcase : (Testcase)=>{
        console.log(JSON.stringify(Testcase))
        return fetch(`/Testcase`,
            {method : 'post',
            body: JSON.stringify(Testcase),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}
//.then(data => data.response[id].datas[index]);