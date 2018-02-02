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
      ? 'Create New Asset'
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
          <FormItem label='Asset Type' hasFeedback {...formItemLayout}>
             {getFieldDecorator('assetType', {
               initialValue: item.assetType,
               rules: [
                   {
                       required: true,
                       message: 'Please select Asset Type!'
                   }
               ]
             })(<Select  placeholder="Select Asset Type" >
                  <Option value="Smart Cooler" >Smart Cooler</Option>
                  <Option value="Truck" >Truck</Option>
                  <Option value="Tracker" >Tracker</Option>
                </Select>
             )}
          </FormItem>
          <FormItem label='Asset Name' hasFeedback {...formItemLayout}>
            {getFieldDecorator('assetName', {
              initialValue: item.assetName,
              rules: [
                {
                  required: true,
                  message: 'Asset Name is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Region Name' hasFeedback {...formItemLayout}>
            {getFieldDecorator('regionId', {
              initialValue: item.regionId,
              rules: [
                {
                  required: true,
                  message: 'Region is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Zone Name' hasFeedback {...formItemLayout}>
            {getFieldDecorator('zoneId', {
              initialValue: item.zoneId,
              rules: [
                {
                  required: true,
                  message: 'Zone is required'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Branch Name' {...formItemLayout}>
             {getFieldDecorator('branchId', {
               initialValue: item.branchId,
               rules: [
                   {
                       required: true,
                       message: 'Please select Branch!'
                   }
               ]
             })(<Select  placeholder="Select Branch" >
                  <Option value="Noida Zone One" >Noida Zone One</Option>
                  <Option value="Hyderabad Zone One" >Hyderabad Zone One</Option>
                  <Option value="Delhi Zone One" >Delhi Zone One</Option>
                </Select>
             )}
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
                  <Option value="ACTIVE" >Active</Option>
                  <Option value="INACTIVE" >Inactive</Option>
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
