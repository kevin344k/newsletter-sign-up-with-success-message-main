const butSend=document.querySelector("#butSend")
const input_email=document.querySelector("#input_email")
const spanError=document.querySelector(".span-error")
const spanEmail=document.querySelector("#spanEmail")
//sections
const section_image_up=document.querySelector(".section-image--up")
const section_down=document.querySelector(".section-down")
const section_thanhks=document.querySelector(".section-thanhks")
section_thanhks.style.display="none"
butSend.addEventListener("click",()=>{
   

    validation()})


function validation() {

let inputValue=input_email.value

    if (inputValue=="") {
        input_email.classList.add("input-error")
        spanError.classList.add("error")
        spanError.textContent="Please enter an email"
    } else{
        let string=inputValue
        if (string.indexOf("@")!=-1 && string.indexOf(".com")!=-1) {
            input_email.classList.remove("input-error")
            spanError.classList.remove("error")

            spanError.textContent=""
            let validEmail=string
            section_image_up.style.display="none"
            section_down.style.display="none"
            section_thanhks.style.display="flex"
            spanEmail.textContent=validEmail
        } else{
            input_email.classList.add("input-error")
            spanError.classList.add("error")
            spanError.textContent="Valid email required" 
        }
    

      
      
    }
}