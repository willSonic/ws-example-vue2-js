import { mapGetters } from "vuex";

export default {
  name: "CollectionState",
	data:()=> {
		return {
			collectionTitle:'',
			page: 0,
			pageCount:0
		}
	},
  computed: {
		styleCollection() {
			let collection = this.$store.getters["GarmentCollection/currentCollection"];
			this.collectionTitle = collection.category.fullName;
			this.page = collection.category.fullName;
			return collection;
		}
  }
};
