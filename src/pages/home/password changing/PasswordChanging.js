import styled from "styled-components";
import CustomInput from "../../../_sharecomponents/custominput/CustomInput";
import FormGroup from "../../../_sharecomponents/formgroup/FromGroup";
import CustomButton from "../../../_sharecomponents/custombutton/CustomButton";
import { Form } from "formik";

const PasswordChanging = (props) => {

    return (
        <div className={props.className}>
            <div className="content">
                <h3>Change password</h3>
                <FormGroup>
                    <CustomInput 
                        label='New password *'
                        type='password'
                        name='password'
                    />
                </FormGroup>
                <FormGroup>
                    <CustomButton
                        type="submit"
                        color="#ffffff"
                        width="100%"
                        uppercase
                    >
                        Submit
                    </CustomButton>
                </FormGroup>
            </div>
        </div>
    )

}

const PasswordChangingStyled = styled(PasswordChanging) `
    height: calc(100vh - 108px);
    position: relative;

    .content {
        width: 400px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h3 {
        text-align: center;
    }
`

export default PasswordChangingStyled;