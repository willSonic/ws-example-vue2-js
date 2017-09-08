import Home from "../../view-layer/pages/Home/Home";
import StyleCollection from "../../view-layer/pages/StyleCollection/StyleCollection";
import NotFound from "../../view-layer/pages/NotFound/NotFound";

 import store from '../../data-layer/store/index';

function dynamicPropsFn(route) {
  console.log("dynamicPropsFn  route.query.page=",  route.query.page);
	console.log("dynamicPropsFn  route.query.page=",  route.query.selection);
	console.log("store.state.GarmentCollection = ", store.state.GarmentCollection)
	// const id = store.state.GarmentCollection.selectedCollectionId;
	// if(id && id === route.query.selection ) {
    //
	// 	if(store.state.GarmentCollection.collections[id].currentPage!== route.query.page){
	// 		store.dispatch("GarmentCollection/fetchGarmentCollection", {
	// 			selection: route.query.selection,
	// 			page: route.query.page
	// 		});
	// 	}
    //
	// }

  return {
    query: { selection: route.query.selection, page: route.query.page }
  };
}

const routes = [
  {
    path: "/",
    name: " ",
    component: Home
  },
  {
    path: "/stylecollection/",
    component: StyleCollection,
    props: dynamicPropsFn
  },
  // {
  //   path: "/venues/detail",
  //   component: VenueDetail,
  //   props: route => ({
  //     query: { id: route.query.id }
  //   })
  // },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
