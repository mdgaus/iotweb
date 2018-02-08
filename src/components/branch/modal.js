import React, {PropTypes} from 'react'
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  LocaleProvider
} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';
import {CLIENT_ID} from '../../CommonMethods/api'

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
          <FormItem style={displayNone} label='_id' hasFeedback {...formItemLayout}>
            {getFieldDecorator('_id', {
              initialValue: item._id,
            })(<Input/>)}
          </FormItem>
          <FormItem style={displayNone} label='clientId' hasFeedback {...formItemLayout}>
            {getFieldDecorator('clientId', {
              initialValue: CLIENT_ID,
            })(<Input/>)}
          </FormItem>
          <FormItem label='Zone Id' hasFeedback {...formItemLayout}>
            {getFieldDecorator('zoneId', {
              initialValue: item.zoneId,
              rules: [
                {
                  required: true,
                  message: 'Name Cannot be Empty'
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label='Branch Name：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('branchName', {
              initialValue: item.branchName,
              rules: [
                {
                  required: true,
                  message: 'User Name Cannot be Empty'
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
                  message: 'Address Cannot be Empty'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Pin Code：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('pinCode', {
              initialValue: item.pinCode,
              rules: [
                {
                  required: true,
                  message: 'Pin Code Cannot be Empty'
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
