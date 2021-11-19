import React,{useEffect , useState} from 'react';
import "./Login.css";
import Logo from "../../assets/images/logo.png";
import iraqImage from "../../assets/images/Iraq.png";
import kurdistanImage from "../../assets/images/kurdistan.png";
import { useDispatch } from 'react-redux';
import {setRes,setLang, setCartData, setCart} from "../../Store/Action";
import usImage from "../../assets/images/us.png";
import { useHistory } from 'react-router';
import { Button, Select , Spin , message} from 'antd';
import axios from "axios";
import { useSelector } from 'react-redux';
const { Option } = Select;

const Login=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [loading , setLoading]=useState(false);
    const [resData , setResData]=useState(null);

    const res=useSelector(state=>state.Reducer.res);
    
    const getRes=async()=>{
        setLoading(true);
        try{
            const response=await axios.get("https://admin.btob-restaurant.com/api/v3/restaurants");
            setResData(response.data);
            dispatch(setRes(response.data[0].id))
            setLoading(false);
        }catch(err){
            console.log(err);
            setLoading(false);
            message.error("Failed");
        }
    }

    useEffect(()=>{
        getRes();
        dispatch(setLang("ar"));
    },[])

    useEffect(()=>{
        dispatch(setCartData([]));
    },[res])

    return(
        <div className="login">
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Select
                    style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                    defaultValue={"Arabic"}
                    onChange={(value)=>dispatch(setLang(value))}
                    className="login-select"
                >
                    <Option value="ar" style={{textAlign:"center"}}>
                        <img style={{width:"30px",position:"absolute",left:"2px"}} src={iraqImage} alt="Arabic" />
                        <span>Arabic</span>
                    </Option>
                    <Option value="en" style={{textAlign:"center"}}>
                        <img style={{width:"30px",position:"absolute",left:"2px"}} src={usImage} alt="English" />
                        <span>English</span>
                    </Option>
                    <Option value="ku" style={{textAlign:"center"}}>
                        <img style={{width:"30px",position:"absolute",left:"2px"}} src={kurdistanImage} alt="Arabic" />
                        <span>Kurdish</span>
                    </Option>
                </Select>
                {resData ? 
                <Select
                        style={{border:"1px solid #BEBEBE",borderRadius:"30px"}}
                        placeholder="select restaurant"
                        defaultValue={resData && resData[0].id}
                        onChange={(value)=>dispatch(setRes(value))}
                        className="login-select"
                >
                {loading===true ?
                    <Spin style={{margin:"12px 0"}} size="large"/> 
                :
                    resData && resData.map((data,index)=>(
                            <Option key={index} value={data.id}>{data.name}</Option>
                    ))
                }
                </Select>
                :
                <Spin size="large" style={{margin:"12px 0"}} />
                }
                <Button 
                    onClick={()=>history.push("/category")}
                    className="login-button"
                    disabled={res===null}
                >
                    Enter Menu
                </Button>
            </div>
        </div>
    )
}
export default Login;