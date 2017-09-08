import { mapGetters } from "vuex";
import Card from "../../components/Card/Card";

export default {
  name: "StyleCollection",
  components: {
    Card
  },
	data: ()=>{
	  return{
			garmentCollection:null,
		}
  },
  // computed: {
  //   // ...mapGetters({
  //   //    collections:"GarmentCollection/collections"
  //   // })
  //   styleCollection() {
  //     let garmentCollection = this.$store.getters["GarmentCollection/currentCollection"];
  //     if(!garmentCollection){
  //         this.$router.push('/')
  //     }
  //     return garmentCollection.products[garmentCollection.currentPage];
  //   }
  // },
	created() {
		this.getGarmentCollection()
	},


	methods: {
		getGarmentCollection:function() {
			console.log('getGarmentCollect =', this.$route)
			let aCollection = this.$store.getters["GarmentCollection/collectionById"](this.$route.query.selection);
			if(!aCollection){
				this.$router.push('/')
			}
			if(aCollection.currentPage !== this.$route.query.page){
				this.$store.dispatch("GarmentCollection/updateCurrentPage", aCollection)
			}


			this.garmentCollection = aCollection.products[this.$route.query.page];

		}
	},
	watch: {
		'$route':'getGarmentCollection'
	}


};
