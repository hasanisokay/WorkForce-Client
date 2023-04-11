import Swal from "sweetalert2"

export const saveToLocal = (jobClicked)=>{
    let storageArray = []
    const savedLocalStorage = localStorage.getItem('applied-job')
    if(savedLocalStorage){
        storageArray.push(savedLocalStorage)
        if(storageArray.find(id => id===jobClicked)){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You already applied for this job',
                
              })
        }
        else{
            storageArray.push(jobClicked)
            localStorage.setItem('applied-job',storageArray)
        }       
    }
    else{
        localStorage.setItem('applied-job',jobClicked)
    }

}