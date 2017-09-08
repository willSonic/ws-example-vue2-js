import { mapGetters } from "vuex";
import Pager from "../../components/Pager/Pager";

export default {
  name: "CollectionState",
  components: {
    Pager
  },
	data:()=> {
		return {
			collectionTitle:'',
			collectionId:'',
			page: 0,
			pageCount:0,
			pageDisplay:[],
		}
	},
  computed: {
		styleCollection() {
			let collection = this.$store.getters["GarmentCollection/currentCollection"];
			if(collection){
				this.collectionTitle = collection.category.fullName;
				this.collectionId = collection.id;
				this.page = collection.currentPage;
				this.pageCount = Math.ceil(collection.total/collection.limit);
				this.pageDisplay = [...Array(this.pageCount)];
			}
			return collection;
		}
  }
};
