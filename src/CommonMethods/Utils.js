import superagent from 'superagent';

const apiFunc = {};
const BASE_URL = 'http://139.59.95.113:8080';

apiFunc.getAssetTypeList = () => {
     return superagent
       .get(BASE_URL+'/allAssetType')
       .query({clientId: 131})
}
apiFunc.getRegionList = () =>{
    console.log("aa gaya mai")
       return superagent
         .get(BASE_URL+'/allRegion')
         .query({})
}
apiFunc.getZoneList = () =>{
    return superagent
         .get(BASE_URL+'/allZone')
         .query({})
}
apiFunc.getUserTypeList = () => {
     return superagent
       .get(BASE_URL+'/allUserType')
       .query({clientId: 131})
}

export default apiFunc;
