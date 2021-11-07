import React from 'react';
import "./Login.css";
import Logo from "../../assets/images/logo.png";
import iraqImage from "../../assets/images/Iraq.png";
import usImage from "../../assets/images/us.png";
import { useHistory } from 'react-router';
import { Button, Select } from 'antd';
const { Option } = Select;

const Login=()=>{
    const history=useHistory();
    return(
        <div className="login">
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Select
                    style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                    defaultValue={"Arabic"}
                    className="login-select"
                >
                    <Option value="Arabic" style={{textAlign:"center"}}>
                        <img style={{width:"30px",position:"absolute",left:"2px"}} src={iraqImage} alt="Arabic" />
                        <span>Arabic</span>
                    </Option>
                    <Option value="English" style={{textAlign:"center"}}>
                        <img style={{width:"30px",position:"absolute",left:"2px"}} src={usImage} alt="English" />
                        <span>English</span>
                    </Option>
                    <Option value="Kurdish" style={{textAlign:"center"}}>
                        <img style={{width:"30px",position:"absolute",left:"2px"}} src={iraqImage} alt="Arabic" />
                        <span>Kurdish</span>
                    </Option>
                </Select>
                <Select
                    style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                    defaultValue={"Arabic"}
                    className="login-select"
                >
                    <Option value="Erbil">Erbil</Option>
                    <Option value="Basra">Basra</Option>
                    <Option value="Najaf">Najaf</Option>
                </Select>
                <Button 
                    onClick={()=>history.push("/category")}
                    className="login-button"
                >
                    Enter Menu
                </Button>
            </div>
        </div>
    )
}
export default Login;