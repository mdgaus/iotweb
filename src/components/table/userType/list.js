
import React, {Component} from 'react';
import superagent from 'superagent';

const BASE_URL = 'http://139.59.95.113:8080/allUserType';
export default class UserTypeList extends Component{
  constructor(props) {
    super(props);
      this.state = {
        isUserTypeData: [],
        activePage:1,
        totalItemsCount:0,
        searchString:''
      }
  }
  componentDidMount() {
    this.getZoneData().then((res)=>{
      console.log("res", res)
      if(res.body.success){
        this.setState({
          isUserTypeData:res.body.data
        })
      }
      
    }).catch((error)=>{
      console.log(error)
    });
  }
  getZoneData = () => {
    //try{
        // let skip = this.state.activePage?(this.state.activePage-1)*10:this.state.activePage;
        // let queryObj = {skip:skip,limit:10};
        // console.log(queryObj)
        // if(this.state.searchString){
        //   queryObj.searchString = this.state.searchString
        // }
        
        
        
          return superagent
          .get(BASE_URL)
          .query({clientId:1})
       
        // SOCKET.emit('orders::find', queryObj, (error, response) => {
        //     console.log(error, response)
        //     if(!error && response.total){
        //         this.setState({
        //             isUserTypeData : response.data,
        //             totalItemsCount:response.total
        //         })
        //     }else{
        //       this.setState({
        //         searchString:''
        //       })
        //     }
        // });
    // }catch(error){
    //   alert("Check server error");
    // }
  }
  // handlePageChange=(pageNumber)=> {
  //   console.log(`active page is ${pageNumber}`);
  //   this.setState({activePage: pageNumber});
  //   this.getOrdersData()

  // }
  // handleSearchChange = (e) =>{
  //   if (e.target.id === 'search') {
  //     this.setState({
  //       searchString:e.target.value
  //     })
  //     if(!e.target.value){
  //       this.getOrdersData()
  //     }
  //    } 

  // }
  render(){
    console.log(this.state.isUserTypeData)
    return(
        <div className="content-wrapper">

            <section className="content-header">

            <h1 className="float-left"> </h1>
              <div className="import-tools-block">
              
               
              </div>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-xs-12">
                  <div className="box">
                    <div className="box-header">
                      <div className="col-xs-8">
                        <h3 className="box-title"></h3>
                      </div>
                      <div className="col-xs-4">
                        <div className="col-xs-12">
                          <div id="custom-search-input">
                            <div className="input-group col-md-12">
                              
                              <span className="input-group-btn">
                              
                              </span>
                              </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="box-body">
                      <table id="example2" className="table table-bordered table-hover">
                        <thead>
                          <tr>
                          <th>SNo.</th>
                            <th>User Type</th>
                            <th>status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.isUserTypeData.map((user, index) => {
                              return (
                                <tr key={index} >
                                  <td>{index+1}</td>
                                 
                                  <td>{user.userType}</td>
                                  <td>{user.status}</td>
                                  <td>
                                   
                                    <a  onClick={(e)=>this.deleteVehicle(order.orderId)} ><i className="fa fa-trash"></i></a>
                                  </td>
                                </tr>
                              )})
                        }
                        </tbody>
                      </table>
                     
                    </div>

                  </div>
                </div>

              </div>

            </section>

        </div>
      )
  }
}
