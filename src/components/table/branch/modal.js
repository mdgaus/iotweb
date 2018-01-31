import React, {PropTypes} from 'react'
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  LocaleProvider,
  Select
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

const modal = ({
  visible,
  type,
  item = {},
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
      ? 'Create New User'
      : 'Edit User'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <LocaleProvider locale={enUS}>
      <Modal {...modalOpts}>
        <Form horizontal>
          <FormItem {...formItemLayout} label="Zone Id">
                    {getFieldDecorator('zoneId', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select zone!'
                                
                            }
                        ]
                    })(
                        <Select  placeholder="Please select zone">
                            <Option value="sec 8">sec 8</Option>
                            <Option value="sec 9">sec 9</Option>
                            <Option value="sec 10">sec 10</Option>
                        </Select>
                    )}
        </FormItem>
          <FormItem label='Branch Name：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('branchName', {
              initialValue: item.branchName,
              rules: [
                {
                  required: true,
                  message: 'Name Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
           <FormItem label='Address：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('Address', {
              initialValue: item.Address,
              rules: [
                {
                  required: true,
                  message: 'address Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Pin code' hasFeedback {...formItemLayout}>
            {getFieldDecorator('pinCode', {
              initialValue: item.pinCode,
              rules: [
                {
                  required: true,
                  message: 'Pincode Cannot be Filled'
                }
              ]
            })(<Input/>)}
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
