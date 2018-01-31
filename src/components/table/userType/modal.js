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
          
          <FormItem label='User Type ：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('userType', {
              initialValue: item.userType,
              rules: [
                {
                  required: true,
                  message: 'userType Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
           <FormItem label='ClientId ：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('clientId', {
              initialValue: item.clientId,
              rules: [
                {
                  required: true,
                  message: 'clientId Cannot be Filled'
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
