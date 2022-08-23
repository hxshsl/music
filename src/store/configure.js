
const configure=({
    state: {
        HOST: 'http://127.0.0.1:9090',//后台访问地址根目录
        activeName: '',
    },
    getters: {
        activeName: state =>{
            let activeName = state.activeName;
            if (!activeName){
                activeName = JSON.parse(window.sessionStorage.getItem('activeName'));
            }
            return activeName;
        }

    },
    mutations: {
        setActiveName: (state, activeName)=>{
            state.activeName = activeName;
            window.sessionStorage.setItem('activeName',JSON.stringify(activeName));
        },
    },
    actions: {
    },
    modules: {
    }
})
export default configure