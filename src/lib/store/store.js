import { writable } from "svelte/store";

export let newWebsiteName = writable("");

let dummyData =  {
    id: "", // website name
    home: "", //websitename
    userName: "username" , //Username from Moodle
    navbarStyle: 1, // 1/2/3/4
    navbarData: {}, // Custom Nav Data will be here
    coursesStyle: 1, //1/2/3/4
    homeBodyHtml: "string from Grapesjs",
    defaultHomeBodyHtml: "Default UI will be here",
    defaultPageBodyHtml: "Default Page Body Html",
    allPageData: [] , // from custom navbar to custom UI
    footerHtml: "Default Footer Design"
}
// ==============Menulists Data==================
let nodes = {
    node1:{
            name:'Home',
            id:'home',
            items:[ 
                {id: 'courses'},
                {id: 'experience'},
                {id: 'services'}
             ], 
    },
    courses: {
        name:'courses', id:"courses"
    },
    experience: {
        name:'experience', id:"experience",items:[]
    },
    services: {
        name:'services',
        id:"services",
         items:[
             {id: 'service1'},
             {id: 'service2'},
             {id: 'service3'},
             {id: 'service4'}
         ],
    },
    service1: {
        name:'service1', id:"service1"
    },
    service2: {
        name:'service2', id:"service2"
    },
    service3: {
        name:'service3', id:"service3"
    },
    service4: {
        name:'service4', id:"service4"
    },

}
export let MenuListResult = writable(nodes)
// ============User Data ========================
//websiteName   :   String            =>  input
//navbarData    :   MenuListResult    =>  Obj
//navStyle      :   1/2/3/4           =>  number
//coursesStyle  :   1/2/3/4           =>  number
//homeBodyHtml  :   Default Design    =>  "Html String"
//footerData    :   Default           =>  "Html String"
//allPagesData  :   Array of Obj      =>  { page_id, page_name, page_data }
export let UserAllData = writable({})


//==========New Plan ============================
export let ShowProcess = writable("step-1")