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
                    showSearch
                    style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                    defaultValue={"Arabic"}
                    className="login-select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
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
                    showSearch
                    defaultValue={"Erbil"}
                    style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                    className="login-select"
                    optionFilterProp="children"
                    // onChange={onChange}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Erbil">Erbil</Option>
                    <Option value="Basra">Basra</Option>
                    <Option value="Najaf">Najaf</Option>
                </Select>
                <Button 
                    onClick={()=>history.push("/home")}
                    className="login-button"
                >
                    Enter Menu
                </Button>
            </div>
        </div>
    )
}
export default Login;