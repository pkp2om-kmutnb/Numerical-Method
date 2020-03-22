export default {
    //error check
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
    //get testcase
    getTestcaseId: (index) => {
        return fetch(`/Testcase/${index}`,
            { method: 'get' })
            .then(res => res.text())          
            .then(text => text);
    },
    //create testcase
    createTestcase : (Testcase)=>{
        console.log(JSON.stringify(Testcase))
        return fetch(`/Testcase`,
            {
            method : 'post',
            body: JSON.stringify(Testcase),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
            .then(data => data);
    }
}
