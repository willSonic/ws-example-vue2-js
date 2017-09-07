// import { mapGetters } from "vuex";



export default {
  name: "Pager",
	data:()=> {
		return {
			pitch: 40,
			range: 5,
			pageCell: 1,
			ripDisabled:true,
			leadPg:false,
			centerPg:false,
			tailPg:false
		  }
	},
  computed: {
    last: function () {
      return Math.ceil(this.pitch / this.range)
    },
    leadPgVal:function (){
         return (this.pageCell -1)>0?false:true;
    },
    tailPgVal:function (){
         return (this.pageCell +1)<=this.pitch?false:true;
    }
  },
  methods:{
    updatePageIcons(){
         this.leadPgVal();
         this.tailPgVal();
    },
    pageIcon: function(value){
         this.pageCell =  this.pageCell +value;
    }
  }
};
