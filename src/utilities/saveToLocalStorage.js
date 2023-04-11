import Swal from "sweetalert2"

export const saveToLocal = (jobClicked)=>{

    let storageArray = []
    
    const savedLocalStorage = JSON.parse(localStorage.getItem('applied-job'))

    if(!savedLocalStorage){
        storageArray.push(jobClicked)
        localStorage.setItem("applied-job", JSON.stringify(storageArray) )
    }
    else{
        if(savedLocalStorage.find(id=> id===jobClicked)){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You already applied for this job',
                
              })
        }
        else{
            savedLocalStorage.push(jobClicked)
            localStorage.setItem("applied-job", JSON.stringify(savedLocalStorage))
            Swal.fire(
                'Applied!',
                'Applied Successfully',
                'success'
              )
        }
    }
}