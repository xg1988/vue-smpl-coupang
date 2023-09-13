import axios from "axios";
import _uniqBy from "lodash/uniqBy";

const _defaultMessage = '쿠팡 상품검색';

export default{
    namespaced:true,
    //data
    state:()=>({ //mutations에서만 데이터를 수정할 수 있다.
        objectList: [],
        pageCnt: 0,
        pageNo: 0,
        message: _defaultMessage,
        loading: false,
        theMovie:{}
    }),
    //computed
    getters:{

    },
    //methods
    // 변이 변경할 수 있다. 데이터를 수정할 수 있다.
    mutations:{
        updateState(state, payload){
            //movies, message, loading
            Object.keys(payload).forEach(key=>{
                console.log(key,"/", payload[key])
                state[key] = payload[key];
                //state.movies = payload.movies를 반복문으로 작성한 것
            });


        },// 통합적인 데이터 변경을 위한 함수
        resetDatas(state){
            state.objectList=[];
            state.message = _defaultMessage;
            state.loading = false;
            state.pageCnt = 0;
            state.pageNo =  0;
            state.pageNoArr = [];
        }
    },
    // 비동기로 동작
    actions:{
        resetData({state, commit}, payload){
            commit('updateState', {
                objectList:[]
                , loading : false
                , pageCnt : 0
                , pageNo  :  0
            });
        }
        ,
        async apiCall({state, commit}, payload){ //context를 구조분해할당한 commit
            if(state.loading){
                return;
            }

            commit('updateState', {
                message: ''
                , loading: true
            });

            try{
                const res = await _fetchCoupangAPI(payload);

                let response = "";
                let pageCnt = "";
                let pageNo = "";

                if(payload.method == "goldbox"){
                    response = res.data.data;
                }else if(payload.method == "search"){
                    response = res.data.data.productData;
                }else if(payload.method == "bestcategories"){
                    response = res.data.data;
                }
                pageCnt = res.pageCnt;
                pageNo = res.pageNo;


                commit('updateState', {
                      objectList: response
                    , pageCnt: pageCnt
                    , pageNo: pageNo
                }); //mutations 에 함수를 실행하는 방법

            }catch({message}){
                commit('updateState', {
                    objectList:[],
                    pageCnt: 0,
                    pageNo: 0,
                    message
                })
            }finally{
                commit('updateState', {
                    loading: false
                })

            }
        },
    }
}

async function _fetchCoupangAPI(payload){
    const method = (payload.method)? payload.method: "goldbox";

    let url = `http://localhost:8081/coupang/${method}`

    if(method == 'goldbox'){
        const pageNo =  (payload.pageNo != undefined)? payload.pageNo: "1";

        url += `?pageNo=${pageNo}`;
    }else if(method == 'search'){
        const keyword =  (payload.keyword != undefined)? payload.keyword: "";

        url += `/${keyword}`;
    }else if(method == 'bestcategories'){
        const categoryId =  (payload.categoryId != undefined)? payload.categoryId: "";
        const pageNo =  (payload.pageNo != undefined)? payload.pageNo: "1";

        url += `/${categoryId}`;
    }
    console.log(url);

    return await axios.get(url, payload);
}