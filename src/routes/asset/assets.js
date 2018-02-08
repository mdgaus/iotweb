import React, {PropTypes} from 'react'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import UserList from '../../components/assets/list'
import UserSearch from '../../components/assets/search'
import UserModal from '../../components/assets/modal'
import {apiFunc, BASE_URL, CLIENT_ID} from '../../CommonMethods/api'
import {Row, Col} from 'antd';

function Assets({location, dispatch, assets}) {
  const {
    loading,
    dropDownData,
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = assets
  const {field, keyword} = location.query

  async function  assetType(){
   console.log(22222)
    var a = await apiFunc.getAssetTypeList()
    assets.dropDownData = a.body.data;
  }
  assetType();

  const userModalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    dropDownData: dropDownData,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `assets/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'assets/hideModal'})
    }
  }

  const userListProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    onPageChange(page) {
      const {query, pathname} = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize
        }
      }))
    },
    onDeleteItem(id) {
      dispatch({type: 'assets/delete', payload: id})
    },
    onEditItem(item) {
      dispatch({
        type: 'assets/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    }
  }

  const userSearchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      fieldsValue.keyword.length
        ? dispatch(routerRedux.push({
          pathname: '/asset/assets',
          query: {
            field: fieldsValue.field,
            keyword: fieldsValue.keyword
          }
        }))
        : dispatch(routerRedux.push({pathname: '/asset/assets'}))
    },
    onAdd() {
      dispatch({
        type: 'assets/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  const UserModalGen = () => <UserModal {...userModalProps}/>


  return (
    <div className='content-inner'>
      <Row>
        <Col xs={24} md={24} lg={24}>
          <UserSearch {...userSearchProps}/>
          <UserList {...userListProps}/>
          <UserModalGen/>
        </Col>

      </Row>

    </div>
  )
}

Assets.propTypes = {
  assets: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({assets}) {
  return {assets}
}

export default connect(mapStateToProps)(Assets)
