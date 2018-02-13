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
import {CLIENT_ID} from '../../CommonMethods/api';

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
      ? 'Add New Device'
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
              initialValue:131,
            })(<Input/>)}
          </FormItem>
          <FormItem label='Serial No.' hasFeedback {...formItemLayout}>
            {getFieldDecorator('serialNo', {
              initialValue: item.serialNo,
              rules: [
                {
                  required: true,
                  message: 'Serial no. is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Sim No.' hasFeedback {...formItemLayout}>
            {getFieldDecorator('simno', {
              initialValue: item.simno,
              rules: [
                {
                  required: true,
                  message: 'Sim no. is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Asset Id' hasFeedback {...formItemLayout}>
             {getFieldDecorator('assetId', {
               initialValue: item.assetId,
               rules: [
                   {
                       required: true,
                       message: 'Please select Asset Id!'
                   }
               ]
             })(<Select  placeholder="Select Asset ID" >
                  <Option value= {10}>Smart Cooler</Option>
                  <Option value={11} >Truck</Option>
                </Select>
             )}
          </FormItem>
          <FormItem label='Device Id' hasFeedback {...formItemLayout}>
            {getFieldDecorator('deviceId', {
              initialValue: item.deviceId,
              rules: [
                {
                  required: true,
                  message: 'Device Id is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Device Type' hasFeedback {...formItemLayout}>
            {getFieldDecorator('deviceType', {
              initialValue: item.deviceType,
              rules: [
                {
                  required: true,
                  message: 'Device Type is required'
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label='Branch' hasFeedback {...formItemLayout}>
            {getFieldDecorator('branchId', {
              initialValue: item.branchId,
              rules: [
                {
                  required: true,
                  message: 'Please add branch!'
                }
              ]
            })(<Select placeholder="Select Branch" >
              <Option value={10}>JMI</Option>
              <Option value={11} >xyz</Option>
            </Select>
              )}
          </FormItem>
          <FormItem label='Brand' hasFeedback {...formItemLayout}>
            {getFieldDecorator('brand', {
              initialValue: item.brand,
              rules: [
                {
                  required: true,
                  message: 'Brand is required'
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label='Device Name' hasFeedback {...formItemLayout}>
            {getFieldDecorator('deviceName', {
              initialValue: item.deviceName,
              rules: [
                {
                  required: true,
                  message: 'Device Name is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
         
          <FormItem label="Status" {...formItemLayout}>
             {getFieldDecorator('status', {
               initialValue: item.status,
               rules: [
                   {
                       required: true,
                       message: 'Please select status!'
                   }
               ]
             })(<Select  placeholder="Select Status" >
                  <Select.Option value="ACTIVE" >Active</Select.Option>
                  <Select.Option value="INACTIVE" >Inactive</Select.Option>
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
