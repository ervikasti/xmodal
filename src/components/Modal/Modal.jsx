import { useState } from "react"

const Modal = ({toggle}) => {

    const styles = {
        container:{
            width:'100%',
            height:'100%',
            top:'0',
            bottom:'0',
            right:'0',
        },
        overlay:{
            display:'flex',
            'justify-content':'center',
            'align-item':'center',
            width:'100%',
            height:'100%',
            position:'fixed',
            top:'0',
            bottom:'0',
            right:'0',
            'background-color': 'rgb(152, 152, 152)',
        },
        modal:{
            position:'absolute',
            top:'20%',
            left:'25%',
            'min-height':'50%',
            'min-width':'50%',
            'align-items':'center',
            display:'flex',
            'flex-direction':'column',
            'background-color': 'white',
            color:'black',
        },
        form:{
            display:'flex',
            'flex-direction':'column',
            'align-items':'center',
        },

    }
    const [formdata,setFormData] = useState({
        username:'',
        email:'',
        phone:'',
        dob:'',
    })
    const inputHandler = (e) => {
        setFormData({...formdata,[e.target.name]:e.target.value});
    }
    const handleForm = (e) => {
        e.preventDefault();

        let date = new Date(formdata.dob);
        let today = new Date();
        today.setHours(0,0,0,0);

        if(formdata.phone.length<10){
            alert('Invalid phone number. Please enter a 10-digit phone number.');
        }else if(date >today){ 
            alert('Invalid date of birth. Date of birth cannot be in the future.')
            

        }else{
        setFormData({
                username:'',
                email:'',
                phone:'',
                dob:'',
            });
        }
        
       
    }

    return(
        <div className="modal" style={styles.container}>
            <div className="modal" onClick={toggle} style={styles.overlay}></div>
            <div className="modal-content" style={styles.modal}>
                <h2>Fill Details</h2>
                <form style={styles.form} onSubmit={handleForm}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={inputHandler} value={formdata.username}required/>

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" onChange={inputHandler} value={formdata.email}required/>

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" onChange={inputHandler} value={formdata.phone}required/>

                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" onChange={inputHandler} value={formdata.dob} required/>

                    <button type="submit" className="submit-button">Submit</button>
                </form>

            </div>
        </div>
    );
}

export default Modal;