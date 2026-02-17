import { useState } from "react";
import {useFormik} from 'formik';

const validate = values =>{
        const errors = {};
        if(!values.username){
                errors.username='Username cannot be empty';
        }
        return errors;
};

export default function CommentsForm({addNewComment}){
        // let [formData, setFormData]=useState({
        //         username: "",
        //         remarks: "",
        //         rating: 5
        // });

        const formik =useFormik({
                initialValues: {
                        username:'',
                        remarks:'',
                        rating:5,
                                },
                                validate,
                                onSubmit: values=>{
                                        alert(JSON.stringify(values, null, 2));
                                },
        });

        let [isValid, SetIsValid]= useState(true);

        //    let handleInputChange = (event)=>{
        //         setFormData((currData)=>{
        //                 return {...currData, [event.target.name]: event.target.value}
        //         });
        //    };

        //    let handleSubmit = (event) =>{
        //        console.log(formData);
        //         addNewComment(formData);
                

        //         setFormData({
        //                 username: "",
        //                 remarks: "",
        //                 rating: 5
        //         })
        //    };

        return(
                <div>
                        <h4>Give a Comment!</h4>
                        <form onSubmit={handleSubmit}>
                                <label htmlFor="username">Username</label>
                                <input placeholder="username" type="text" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
                                <br></br><br></br>
                                 
                                 <label htmlFor="remark">Remarks</label>
                                <textarea  value={formik.values.remarks} placeholder="add few remarks" onChange={formik.handleChange} id="remarks" name="remarks"></textarea>
                                <br></br><br></br>
                                 
                                 <label htmlFor="rating">Rating</label>
                                <input placeholder="rating" type="number" min={1} max={5}  value={formik.values.rating} onChange={formik.handleChange} id="rating" name="rating"/>
                                <br></br><br></br>

                                <button>Add Comment</button>
                        </form>
                </div>
        )
}