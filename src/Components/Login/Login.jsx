import React from 'react';
import "./Login.css";
import Logo from "../../assets/images/logo.png";
import iraqImage from "../../assets/images/Iraq.png";
import { Button, Select } from 'antd';
const { Option } = Select;

const Login=()=>{
    return(
        <div className="login">
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Select
                    showSearch
                    style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                    defaultValue={"jack"}
                    className="login-select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <Select
                    showSearch
                    className="login-select"
                    style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                    optionFilterProp="children"
                    // onChange={onChange}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <Button>
                    Enter Menu
                </Button>
            </div>
        </div>
    )
}
export default Login;