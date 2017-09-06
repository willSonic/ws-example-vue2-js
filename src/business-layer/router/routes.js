import Home from "../../view-layer/pages/Home/Home";
import StyleCollection from "../../view-layer/pages/StyleCollection/StyleCollection";
import NotFound from "../../view-layer/pages/NotFound/NotFound";

function dynamicPropsFn(route) {
  console.log("dynamicPropsFn =", route);

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
