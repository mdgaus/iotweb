import React, {PropTypes} from 'react'
import { Button, Row, Form, Input } from 'antd'
import { config } from '../utils'
import styles from './login.less'
import {login,logout} from "../services/app" 

const FormItem = Form.Item

const login1 = ({
  loginButtonLoading,
  onOk,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      // onOk(values)
      var loginData={emailId:values.username,password:values.password};
      login(loginData).then(res=>{
        if (res.success){
          alert("Login Successful");
        }
        else{
          alert("Incorrect Username or Password !")
        }
      })
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img src={config.logoSrc} />
        <span>LOGIN</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please Enter Your User Name'
              }
            ]
          })(<Input size='large' onPressEnter={handleOk} placeholder='Username' />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please Enter Your Password'
              }
            ]
          })(<Input size='large' type='password' onPressEnter={handleOk} placeholder='Password' />)}
        </FormItem>
        <Row>
          <Button type='primary' size='large' onClick={handleOk} loading={loginButtonLoading}>
            Login
          </Button>
        </Row>
        {/* <p>
          <span>(Username:111,Password:111)</span>
        </p> */}
      </form>
    </div>
  )
}

login1.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func
}

export default Form.create()(login1)
