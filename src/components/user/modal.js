import React, {PropTypes} from 'react'
import {
  Form,
  Input,
  Select,
  InputNumber,
  Radio,
  Modal,
  LocaleProvider
} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}
const displayNone = {
  display: "none"
}
const modal = ({
  visible,
  type,
  item = {},
  dropDownData,
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  function handleOk() {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create'
      ? 'Add New User'
      : 'Edit Asset'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <LocaleProvider locale={enUS}>
      <Modal {...modalOpts}>
        <Form horizontal>
          <FormItem style={displayNone} label='_id' hasFeedback {...formItemLayout}>
            {getFieldDecorator('_id', {
              initialValue: item._id,
            })(<Input/>)}
          </FormItem>
          <FormItem style={displayNone} label='clientId' hasFeedback {...formItemLayout}>
            {getFieldDecorator('clientId', {
              initialValue: item.clientId,
            })(<Input/>)}
          </FormItem>
          <FormItem label='Email Id' hasFeedback {...formItemLayout}>
            {getFieldDecorator('emailId', {
              initialValue: item.emailId,
              rules: [
                {
                  required: true,
                  message: 'Email Id is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Password' hasFeedback {...formItemLayout}>
            {getFieldDecorator('password', {
              initialValue: item.password,
              rules: [
                {
                  required: true,
                  message: 'Password is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='User Name' hasFeedback {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: item.name,
              rules: [
                {
                  required: true,
                  message: 'User Name is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='User Type' hasFeedback {...formItemLayout}>
             {getFieldDecorator('userType', {
               initialValue: item.userType,
               rules: [
                   {
                       required: true,
                       message: 'User Type is required'
                   }
               ]
             })(<Select  placeholder="Select User Type" >
                {
                  dropDownData.map((item, index) => {
                    return <Select.Option value={item.userType} key={item._id}>
                        {item.userType}
                      </Select.Option>
                  })
                }
                </Select>
             )}
          </FormItem>
        </Form>
      </Modal>
    </LocaleProvider>
  )
}

modal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

export default Form.create()(modal)
